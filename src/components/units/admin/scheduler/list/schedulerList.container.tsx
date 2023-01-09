import { ChangeEvent, MouseEvent, useEffect, useMemo, useState } from 'react';
import SchedulerListPresenter from './schedulerList.presenter';
import moment from 'moment';
import {
  IOrganization,
  IQuery,
  IQueryFetchListTypeScheduleArgs,
  ISchedule,
} from '../../../../../commons/types/generated/types';
import { useLazyQuery, useQuery } from '@apollo/client';
import {
  FETCH_ORGANIZATIONS,
  FETCH_ROLE_CATEGORIES,
  FETCH_SCHEDULE_LIST,
} from './schedulerList.queries';
import { InitData } from './schedulerList.types';
import { Dayjs } from 'dayjs';
import { getWorkHour } from '../../../../../commons/utils/work';

const SchedulerListContainer = () => {
  // state
  const [startDate, setStartDate] = useState<string>(
    moment().startOf('month').format('YYYY-MM-DD'),
  );
  const [endDate, setEndDate] = useState<string>(moment().format('YYYY-MM-DD'));
  const [selectOrganization, setSelectOrganization] = useState<
    Array<Partial<IOrganization>>
  >([]);
  const [initOption, setInitOption] = useState<InitData | undefined>();
  const [workHour, setWorkHour] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);
  const [aniMode, setAniMode] = useState<boolean>(false);
  const [selectSchedule, setSelectSchedule] = useState<Partial<ISchedule>>();
  const [checkedList, setCheckedList] = useState<string[] | undefined>([]);

  // graphql query
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
    fetchPolicy: 'network-only',
    variables: {
      startDate,
      endDate,
      organizationId: selectOrganization?.map((select) => String(select.id)),
    },
  });

  const [getCategory, { data: roleCategory }] = useLazyQuery<
    Pick<IQuery, 'fetchRoleCategories'>
  >(FETCH_ROLE_CATEGORIES, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-only',
  });

  // initializing
  useEffect(() => {
    let count = 0;
    scheduleList?.fetchListTypeSchedule.forEach((schedule) => {
      count += getWorkHour(
        String(schedule.startWorkTime),
        String(schedule.endWorkTime),
      );
    });
    setWorkHour(count);
  }, [scheduleList]);

  useMemo(() => {
    if (organization === undefined) {
      getOrganization().catch(() => {});
    }
    if (roleCategory === undefined) {
      getCategory().catch(() => {});
    }
    if (organization && roleCategory) {
      const data: InitData = {
        organization: organization?.fetchOrganizations.map((data) => {
          return {
            id: String(data.id),
            name: String(data.name),
          };
        }),
        roleCategory: roleCategory?.fetchRoleCategories.map((data) => {
          return {
            id: String(data.id),
            name: String(data.name),
          };
        }),
        workType: [{ id: '', name: '' }],
      };
      setInitOption(data);
      setSelectOrganization(data.organization ?? []);
    }
  }, [organization, roleCategory, getOrganization, getCategory]);

  // functions
  const getSelectedSchedule = (id: string) => {
    const selectedSchedule = scheduleList?.fetchListTypeSchedule.filter(
      (schedule) => {
        return String(schedule.id) === id;
      },
    );
    return selectedSchedule;
  };

  // event handler
  const onClickToday = () => {
    setStartDate(moment().format('YYYY-MM-DD'));
    setEndDate(moment().format('YYYY-MM-DD'));
  };

  const onRangeChange = (
    dates: null | Array<Dayjs | null>,
    dateStrings: string[],
  ) => {
    setStartDate(dateStrings[0]);
    setEndDate(dateStrings[1]);
  };

  const onClickOpenModal = () => {
    setIsOpen(true);
    setAniMode(true);
  };

  const onClickCloseModal = async () => {
    setAniMode(false);
    await refetch({
      startDate,
      endDate,
      organizationId: selectOrganization?.map((select) => String(select.id)),
    });
  };

  const onClickListContent = (e: MouseEvent<HTMLDivElement>) => {
    setSelectSchedule(getSelectedSchedule(e.currentTarget.id)?.[0]);
    setIsOpenDetail(true);
    setAniMode(true);
  };

  const onChangeCheckAll = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      const data = scheduleList?.fetchListTypeSchedule.map((schedule) => {
        return String(schedule.id);
      });
      setCheckedList(data);
    } else {
      setCheckedList([]);
    }
  };

  const onChangeCheckList = (e: ChangeEvent<HTMLInputElement>) => {
    if (checkedList?.includes(e.currentTarget.id)) {
      const data = checkedList?.filter((id) => {
        return id !== e.currentTarget.id;
      });
      setCheckedList(data);
    } else {
      const data = checkedList?.concat(e.currentTarget.id);
      setCheckedList(data);
    }
  };

  // render
  return (
    <SchedulerListPresenter
      scheduleList={scheduleList?.fetchListTypeSchedule}
      initOption={initOption}
      startDate={startDate}
      endDate={endDate}
      workHour={workHour}
      isOpen={isOpen}
      isOpenDetail={isOpenDetail}
      aniMode={aniMode}
      selectSchedule={selectSchedule}
      checkedList={checkedList}
      setEndDate={setEndDate}
      setStartDate={setStartDate}
      setIsOpen={setIsOpen}
      setIsOpenDetail={setIsOpenDetail}
      setSelectOrganization={setSelectOrganization}
      onChangeCheckAll={onChangeCheckAll}
      onClickToday={onClickToday}
      onClickOpenModal={onClickOpenModal}
      onClickCloseModal={onClickCloseModal}
      onClickListContent={onClickListContent}
      onChangeStartEndDate={onRangeChange}
      onChangeCheckList={onChangeCheckList}
    />
  );
};

export default SchedulerListContainer;
