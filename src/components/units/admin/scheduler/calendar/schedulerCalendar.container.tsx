import { useMemo, useState } from 'react';
import SchedulerCalendarPresenter from './schedulerCalendar.presenter';
import { IDateData } from '../scheduler.types';
import getWeekData from '../../../../../commons/utils/getWeekData';
import moment from 'moment';
import {
  IAccount,
  IOrganization,
  IQuery,
  IQueryFetchListTypeScheduleArgs,
  IQueryFetchMembersArgs,
  IQueryFetchOrganizationsArgs,
  IQueryFetchRoleCategoriesArgs,
  IRoleCategory,
} from '../../../../../commons/types/generated/types';
import { useLazyQuery, useQuery } from '@apollo/client';
import {
  FETCH_ACCOUNT,
  FETCH_MEMBERS,
  FETCH_ORGANIZATIONS,
  FETCH_ROLE_CATEGORIES,
  FETCH_SCHEDULE_LIST,
} from './schedulerCalendar.queries';
import { InitData } from './schedulerCalendar.types';

const SchedulerCalendarContainer = () => {
  console.log('-------------------------------------');
  // state
  const [dateArray, setDateArray] = useState<IDateData[]>([]);
  const [currentMonth, setCurrentMonth] = useState<string>(
    moment().format('YYYY년 MM월'),
  );
  const [selectOrganization, setSelectOrganization] = useState<
    Array<Partial<IOrganization>>
  >([]);
  const [selectRoleCategory, setSelectRoleCategory] = useState<
    Array<Partial<IRoleCategory>>
  >([]);
  const [initOption, setInitOption] = useState<InitData | undefined>();
  const [identification, setIdentification] = useState<IAccount>();
  console.log('initOption', initOption);
  console.log('selectOrganization', selectOrganization);
  console.log('selectRoleCategory', selectRoleCategory);
  console.log('identification', identification);
  console.log(selectOrganization.map((select) => String(select.id)));

  // graphql query
  const [getCategory, { data: roleCategory }] = useLazyQuery<
    Pick<IQuery, 'fetchRoleCategories'>,
    IQueryFetchRoleCategoriesArgs
  >(FETCH_ROLE_CATEGORIES, {
    variables: {
      companyId: String(identification?.company?.id),
    },
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-only',
  });

  const [getOrganization, { data: organization }] = useLazyQuery<
    Pick<IQuery, 'fetchOrganizations'>,
    IQueryFetchOrganizationsArgs
  >(FETCH_ORGANIZATIONS, {
    variables: {
      companyId: String(identification?.company?.id),
    },
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-only',
  });

  const { data: scheduleList } = useQuery<
    Pick<IQuery, 'fetchListTypeSchedule'>,
    IQueryFetchListTypeScheduleArgs
  >(FETCH_SCHEDULE_LIST, {
    variables: {
      startDate: String(moment(dateArray[0]?.day).format('YYYY-MM-DD')),
      endDate: String(moment(dateArray[6]?.day).format('YYYY-MM-DD')),
      organizationId: selectOrganization.map((select) => String(select.id)),
    },
  });

  const [getMember, { data: memberList }] = useLazyQuery<
    Pick<IQuery, 'fetchMembers'>,
    IQueryFetchMembersArgs
  >(FETCH_MEMBERS, {
    variables: {
      companyId: String(identification?.company?.id),
    },
  });

  const { data: accountDetail } =
    useQuery<Pick<IQuery, 'fetchAccount'>>(FETCH_ACCOUNT);

  console.log('organization', organization);
  console.log('roleCategory', roleCategory);
  console.log('scheduleList', scheduleList);

  // initializing

  useMemo(() => {
    if (dateArray.length === 0) {
      setDateArray(getWeekData());
    }
  }, [dateArray]);

  useMemo(() => {
    if (accountDetail) {
      setIdentification(accountDetail?.fetchAccount);
      if (memberList === undefined) {
        getMember().catch(() => {});
      }
      if (roleCategory === undefined) {
        getCategory().catch(() => {});
      }
      if (organization === undefined) {
        getOrganization().catch(() => {});
      }
      if (roleCategory && organization) {
        const data: InitData = {
          roleCategory: roleCategory?.fetchRoleCategories.map((data) => {
            return {
              id: data.id,
              name: data.duty,
            };
          }),
          organization: organization?.fetchOrganizations.map((data) => {
            return {
              id: String(data.id),
              name: String(data.name),
            };
          }),
        };
        setInitOption(data);
      }
    }
  }, [
    accountDetail,
    memberList,
    roleCategory,
    organization,
    getCategory,
    getOrganization,
    getMember,
  ]);

  // event handler
  const onClickNextWeek = () => {
    const weekData = getWeekData(dateArray, 'next');
    setDateArray(weekData);
    setCurrentMonth(moment(weekData[0].day).format('YYYY년 MM월'));
  };

  const onClickPrevWeek = () => {
    const weekData = getWeekData(dateArray, 'prev');
    setDateArray(weekData);
    setCurrentMonth(moment(weekData[0].day).format('YYYY년 MM월'));
  };

  const onClickToday = () => {
    setDateArray(getWeekData(dateArray));
  };
  console.log('-------------------------------------');
  // render
  return (
    <SchedulerCalendarPresenter
      scheduleList={scheduleList?.fetchListTypeSchedule}
      setSelectOrganization={setSelectOrganization}
      setSelectRoleCategory={setSelectRoleCategory}
      initOption={initOption}
      dateArray={dateArray}
      setDateArray={setDateArray}
      currentMonth={currentMonth}
      onClickNextWeek={onClickNextWeek}
      onClickPrevWeek={onClickPrevWeek}
      onClickToday={onClickToday}
      member={memberList?.fetchMembers}
    />
  );
};

export default SchedulerCalendarContainer;
