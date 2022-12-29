import moment from 'moment';
import { useMemo, useState } from 'react';
import CalendarPresenter from './calendar.presenter';
import { IWeekData } from './calendar.types';

const newWeekData = (
  days: string,
  i: number,
  option: boolean,
  bgC?: string,
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

const CalendarContainer = () => {
  const [today] = useState(moment());
  const [dateArr, setDateArr] = useState<IWeekData[][]>([]);

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
          weekArray.push(newWeekData(days, index, false, 'lightgray'));
        } else {
          weekArray.push(newWeekData(days, index, true));
        }
        index++;
      }
      result.push(weekArray);
    }
    setDateArr(result);
  }, [today, todayFirstWeek, todayLastWeek]);

  return <CalendarPresenter dateArr={dateArr} />;
};

export default CalendarContainer;
