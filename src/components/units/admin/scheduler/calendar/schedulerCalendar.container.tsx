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
  IQueryFetchOrganizationsArgs,
  IQueryFetchRoleCategoriesArgs,
  IRoleCategory,
} from '../../../../../commons/types/generated/types';
import { useLazyQuery, useQuery } from '@apollo/client';
import {
  FETCH_ACCOUNT,
  FETCH_ORGANIZATIONS,
  FETCH_ROLE_CATEGORIES,
  FETCH_SCHEDULE_LIST,
} from './schedulerCalendar.queries';
import { InitData } from './schedulerCalendar.types';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../../../../commons/store';

const SchedulerCalendarContainer = () => {
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
  const [accessToken] = useRecoilState(accessTokenState);
  console.log('initOption', initOption);
  console.log('selectOrganization', selectOrganization);
  console.log('selectRoleCategory', selectRoleCategory);
  console.log('identification', identification);
  console.log('accessToken', accessToken);

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

  const [getScheduleList, { data: scheduleList }] = useLazyQuery<
    Pick<IQuery, 'fetchListTypeSchedule'>,
    IQueryFetchListTypeScheduleArgs
  >(FETCH_SCHEDULE_LIST, {
    variables: {
      startDate: moment(dateArray[0]?.day).format('YYYY-MM-DD'),
      endDate: moment(dateArray[6]?.day).format('YYYY-MM-DD'),
      organizationId: selectOrganization.map((select) => String(select.id)),
    },
    fetchPolicy: 'network-only',
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
      if (roleCategory === undefined) {
        getCategory().catch(() => {});
      }
      if (organization === undefined) {
        getOrganization().catch(() => {});
      }
      if (roleCategory && organization) {
        getScheduleList().catch(() => {});
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
    roleCategory,
    organization,
    getCategory,
    getOrganization,
    getScheduleList,
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
    />
  );
};

export default SchedulerCalendarContainer;
