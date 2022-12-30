import { useEffect, useMemo, useState } from 'react';
import SchedulerListPresenter from './schedulerList.presenter';
import moment from 'moment';
import {
  IOrganization,
  IQuery,
  IQueryFetchListTypeScheduleArgs,
} from '../../../../../commons/types/generated/types';
import { useLazyQuery, useQuery } from '@apollo/client';
import {
  FETCH_ORGANIZATIONS,
  FETCH_SCHEDULE_LIST,
} from './schedulerList.queries';
import { InitData } from './schedulerList.types';
import { Dayjs } from 'dayjs';
import { getWorkHour } from '../../../../../commons/utils/work';

const SchedulerListContainer = () => {
  console.log('-------------------------------------');
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
  console.log('startDate', startDate);
  console.log('endDate', endDate);

  // graphql query
  const [getOrganization, { data: organization }] = useLazyQuery<
    Pick<IQuery, 'fetchOrganizations'>
  >(FETCH_ORGANIZATIONS, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-only',
  });

  const { data: scheduleList } = useQuery<
    Pick<IQuery, 'fetchListTypeSchedule'>,
    IQueryFetchListTypeScheduleArgs
  >(FETCH_SCHEDULE_LIST, {
    variables: {
      startDate,
      endDate,
      organizationId: selectOrganization?.map((select) => String(select.id)),
    },
  });

  console.log('scheduleList', scheduleList);

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
    if (organization) {
      const data: InitData = {
        organization: organization?.fetchOrganizations.map((data) => {
          return {
            id: String(data.id),
            name: String(data.name),
          };
        }),
      };
      setInitOption(data);
      setSelectOrganization(data.organization ?? []);
    }
  }, [organization, getOrganization]);

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

  console.log('-------------------------------------');

  // render
  return (
    <SchedulerListPresenter
      scheduleList={scheduleList?.fetchListTypeSchedule}
      setSelectOrganization={setSelectOrganization}
      initOption={initOption}
      onClickToday={onClickToday}
      startDate={startDate}
      endDate={endDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      onChangeStartEndDate={onRangeChange}
      workHour={workHour}
    />
  );
};

export default SchedulerListContainer;
