import { useMemo, useState } from 'react';
import SchedularCalendarPresenter from './schedularCalendar.presenter';
import moment from 'moment';
import { IDateData } from '../schedular.types';

const SchedularCalendarContainer = () => {
  const [today] = useState(moment()); // 오늘
  const [dateArray, setDateArray] = useState<IDateData[]>([]);

  // const firstDate = today.clone().startOf('week').format('YYYY-MM-DD');
  // const lastDate = today.clone().endOf('week').format('YYYY-MM-DD');

  useMemo(() => {
    let index = 0; // 고유 인덱스 번호
    const result: IDateData[] = [];
    for (let i = 0; i < 7; i++) {
      const currentDay = today
        .clone()
        .startOf('week')
        .add(i, 'days')
        .format('YYYY-MM-DD');
      if (today.format('YYYY-MM-DD') === currentDay) {
        // 현재 날짜일 경우
        result.push({ index, date: currentDay, isToday: true });
      } else {
        result.push({ index, date: currentDay, isToday: false });
      }
      index++;
    }
    setDateArray(result);
  }, [today]);

  return <SchedularCalendarPresenter dateArray={dateArray} />;
};

export default SchedularCalendarContainer;
