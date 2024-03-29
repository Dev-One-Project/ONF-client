import { MouseEvent, useEffect, useMemo, useState } from 'react';
import SchedulerCalendarPresenter from './schedulerCalendar.presenter';
import { IDateData } from '../scheduler.types';
import getWeekData from '../../../../../commons/utils/getWeekData';
import moment from 'moment';
import {
  IOrganization,
  IQuery,
  IQueryFetchListTypeScheduleArgs,
  IRoleCategory,
  ISchedule,
} from '../../../../../commons/types/generated/types';
import { useLazyQuery, useQuery } from '@apollo/client';
import {
  FETCH_MEMBERS,
  FETCH_ORGANIZATIONS,
  FETCH_ROLE_CATEGORIES,
  FETCH_SCHEDULE_LIST,
  FETCH_SCHEDULE_TEMPLATE,
} from './schedulerCalendar.queries';
import { InitData } from './schedulerCalendar.types';
import { getWorkHour } from '../../../../../commons/utils/work';

const SchedulerCalendarContainer = () => {
  // state
  const [dateArray, setDateArray] = useState<IDateData[]>([]);
  const [currentMonth, setCurrentMonth] = useState<string>(
    moment().format('YYYY년 MM월'),
  );
  const [selectOrganization, setSelectOrganization] = useState<
    Array<Partial<IOrganization>>
  >([]);
  const [, setSelectRoleCategory] = useState<Array<Partial<IRoleCategory>>>([]);
  const [initOption, setInitOption] = useState<InitData | undefined>();
  const [workHours, setWorkHours] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [workNumbers, setWorkNumbers] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);
  const [aniMode, setAniMode] = useState<boolean>(false);
  const [selectSchedule, setSelectSchedule] = useState<Partial<ISchedule>>();

  // function
  const getSelectedSchedule = (id: string) => {
    const selectedSchedule = scheduleList?.fetchListTypeSchedule.filter(
      (schedule) => {
        return String(schedule.id) === id;
      },
    );
    return selectedSchedule;
  };

  // graphql query
  const [getCategory, { data: roleCategory }] = useLazyQuery<
    Pick<IQuery, 'fetchRoleCategories'>
  >(FETCH_ROLE_CATEGORIES, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-only',
  });

  const [getOrganization, { data: organization }] = useLazyQuery<
    Pick<IQuery, 'fetchOrganizations'>
  >(FETCH_ORGANIZATIONS, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-only',
  });

  const { data: scheduleList, refetch } = useQuery<
    Pick<IQuery, 'fetchListTypeSchedule'>,
    IQueryFetchListTypeScheduleArgs
  >(FETCH_SCHEDULE_LIST, {
    variables: {
      startDate: String(moment(dateArray[0]?.day).format('YYYY-MM-DD')),
      endDate: String(moment(dateArray[6]?.day).format('YYYY-MM-DD')),
      organizationId: selectOrganization?.map((select) => String(select.id)),
    },
  });

  const [getMember, { data: memberList }] =
    useLazyQuery<Pick<IQuery, 'fetchMembers'>>(FETCH_MEMBERS);

  const [getScheduleTemplates, { data: scheduleTemplates }] = useLazyQuery<
    Pick<IQuery, 'fetchAllScheduleTemplates'>
  >(FETCH_SCHEDULE_TEMPLATE);

  // initializing
  useEffect(() => {
    const weekWorkHours = [0, 0, 0, 0, 0, 0, 0, 0];
    const weekNumbers = [0, 0, 0, 0, 0, 0, 0, 0];

    scheduleList?.fetchListTypeSchedule.forEach((schedule: ISchedule) => {
      const day = moment(schedule.startWorkTime).day();
      weekWorkHours[day] = getWorkHour(
        String(schedule.startWorkTime),
        String(schedule.endWorkTime),
      );
      weekWorkHours[7] += getWorkHour(
        String(schedule.startWorkTime),
        String(schedule.endWorkTime),
      );
      weekNumbers[day] += 1;
      weekNumbers[7] += 1;
    });
    setWorkHours(weekWorkHours);
    setWorkNumbers(weekNumbers);
  }, [scheduleList]);

  useMemo(() => {
    if (dateArray.length === 0) {
      setDateArray(getWeekData());
    }
  }, [dateArray]);

  useMemo(() => {
    if (memberList === undefined) {
      getMember().catch(() => {});
    }
    if (roleCategory === undefined) {
      getCategory().catch(() => {});
    }
    if (organization === undefined) {
      getOrganization().catch(() => {});
    }
    if (scheduleTemplates === undefined) {
      getScheduleTemplates().catch(() => {});
    }
    if (roleCategory && organization && scheduleTemplates) {
      const data: InitData = {
        roleCategory: roleCategory?.fetchRoleCategories.map((data) => {
          return {
            id: data.id,
            name: data.name,
          };
        }),
        organization: organization?.fetchOrganizations.map((data) => {
          return {
            id: String(data.id),
            name: String(data.name),
          };
        }),
        workType: [{ id: '', name: '' }],
        scheduleTemplate: scheduleTemplates?.fetchAllScheduleTemplates.map(
          (data) => {
            return {
              id: data.id,
              name: data.name,
            };
          },
        ),
      };
      setInitOption(data);
      setSelectOrganization(data.organization ?? []);
      setSelectRoleCategory(data.roleCategory ?? []);
    }
  }, [
    memberList,
    roleCategory,
    organization,
    scheduleTemplates,
    getCategory,
    getOrganization,
    getMember,
    getScheduleTemplates,
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

  const onClickOpenModal = () => {
    setIsOpen(true);
    setAniMode(true);
  };

  const onClickCloseModal = async () => {
    setAniMode(false);
    await refetch({
      startDate: String(moment(dateArray[0]?.day).format('YYYY-MM-DD')),
      endDate: String(moment(dateArray[6]?.day).format('YYYY-MM-DD')),
      organizationId: selectOrganization?.map((select) => String(select.id)),
    });
  };

  const onClickCalendarElement = (e: MouseEvent<HTMLDivElement>) => {
    setSelectSchedule(getSelectedSchedule(e.currentTarget.id)?.[0]);
    setIsOpenDetail(true);
    setAniMode(true);
  };

  // render
  return (
    <SchedulerCalendarPresenter
      templates={scheduleTemplates?.fetchAllScheduleTemplates}
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
      onClickCalendarElement={onClickCalendarElement}
      member={memberList?.fetchMembers}
      workHours={workHours}
      workNumbers={workNumbers}
      aniMode={aniMode}
      isOpen={isOpen}
      isOpenDetail={isOpenDetail}
      onClickOpenModal={onClickOpenModal}
      onClickCloseModal={onClickCloseModal}
      setIsOpenDetail={setIsOpenDetail}
      setIsOpen={setIsOpen}
      selectSchedule={selectSchedule}
    />
  );
};

export default SchedulerCalendarContainer;
