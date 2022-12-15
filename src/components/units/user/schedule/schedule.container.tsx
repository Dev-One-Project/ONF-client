import SchedulePresenter from './schedule.presenter';
import moment from 'moment';
import { IWeekData } from './schedule.types';
import { useMemo, useState } from 'react';

const newWeekData = (
  days: string,
  i: number,
  bgC: string,
  option: boolean,
): IWeekData => {
  return {
    index: i,
    day: days,
    work: '',
    tardy: '',
    css: {
      color: '',
      backgroundColor: bgC,
      display: '',
    },
    func: {
      onClick: option,
    },
  };
};

const ScheduleContainer = () => {
  const [today] = useState(moment()); // 오늘
  const [dateArr, setDateArr] = useState<IWeekData[][]>([]);
  // const dayData = [];

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
        if (moment().format('YYYY-MM-DD') === days) {
          // 현재 날짜일 경우
          weekArray.push(newWeekData(days, index, 'lightpink', true));
        } else if (days.split('-')[1] !== today.format('MM')) {
          // 현재 월이 아닌경우
          weekArray.push(newWeekData(days, index, 'white', false));
        } else {
          weekArray.push(newWeekData(days, index, 'lightgray', true));
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
      // dayData={dayData}
    />
  );
};

export default ScheduleContainer;
