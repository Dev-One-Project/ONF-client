import SchedulePresenter from './schedule.presenter';
import moment from 'moment';
import { IWeekData } from './schedule.types';
import { useMemo, useState } from 'react';
import { FETCH_ACCOUNT, FETCH_USER_SCHEDULE } from './schedule.quries';
import { useLazyQuery, useQuery } from '@apollo/client';
import {
  IQuery,
  IQueryFetchMonthMemberScheduleArgs,
} from '../../../../commons/types/generated/types';

const newWeekData = (days: string, i: number, option: boolean): IWeekData => {
  return {
    index: i,
    day: days,
    work: '',
    tardy: '',
    option,
  };
};

const ScheduleContainer = () => {
  const [today, setToday] = useState(moment()); // 오늘
  const [dateArr, setDateArr] = useState<IWeekData[][]>([]);

  const [getUserData, { data: userData }] =
    useLazyQuery<Pick<IQuery, 'fetchAccount'>>(FETCH_ACCOUNT);

  useMemo(() => {
    if (userData === undefined) {
      getUserData().catch(() => {});
    }
  }, [getUserData, userData]);

  const { data: scheduleData } = useQuery<
    Pick<IQuery, 'fetchMonthMemberSchedule'>,
    IQueryFetchMonthMemberScheduleArgs
  >(FETCH_USER_SCHEDULE, {
    variables: {
      memberId: [String(userData?.fetchAccount.member?.id)],
    },
  });

  console.log(scheduleData?.fetchMonthMemberSchedule);

  const MoveNextMonth = () => {
    setToday(today.clone().add(1, 'month'));
  };

  const MovePrevMonth = () => {
    setToday(today.clone().subtract(1, 'month'));
  };

  const todayFirstWeek = today.clone().startOf('month').week(); // 이번달의 첫째 주
  const todayLastWeek =
    today.clone().endOf('month').week() === 1
      ? 53
      : today.clone().endOf('month').week(); // 이번달의 마지막주

  useMemo(() => {
    let index = 0; // 고유 인덱스 번호
    const result: IWeekData[][] = []; // 이번달 배열
    for (let week = todayFirstWeek; week <= todayLastWeek; week++) {
      const weekArray: IWeekData[] = []; // 주별로 담는 배열
      for (let i = 0; i < 7; i++) {
        // 일주일 계산
        const days = today
          .clone()
          .startOf('year')
          .week(week)
          .startOf('week')
          .add(i, 'day')
          .format('YYYY-MM-DD'); // 그날의 시간 정보
        if (days.split('-')[1] !== today.format('MM')) {
          // 현재 월이 아닌경우
          weekArray.push(newWeekData(days, index, false));
        } else {
          weekArray.push(newWeekData(days, index, true));
        }
        index++;
      }
      result.push(weekArray);
    }
    setDateArr(result);
  }, [today, todayFirstWeek, todayLastWeek]);

  return (
    <SchedulePresenter
      dateArr={dateArr}
      MoveNextMonth={MoveNextMonth}
      MovePrevMonth={MovePrevMonth}
      today={today}
    />
  );
};

export default ScheduleContainer;
