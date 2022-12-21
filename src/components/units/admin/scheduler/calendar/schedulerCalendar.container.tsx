import { useMemo, useState } from 'react';
import SchedulerCalendarPresenter from './schedulerCalendar.presenter';
import moment from 'moment';
import { IDateData } from '../scheduler.types';
import dayToString from '../../../../../commons/utils/dayToString';

const SchedulerCalendarContainer = () => {
  const [today] = useState(moment());
  const [dateArray, setDateArray] = useState<IDateData[]>([]);

  useMemo(() => {
    let index = 0;
    const result: IDateData[] = [];
    for (let i = 0; i < 7; i++) {
      const currentDay = today
        .clone()
        .startOf('week')
        .add(i, 'days')
        .format('YYYY-MM-DD');
      const dayOfWeek = today.clone().startOf('week').add(i, 'days').day();
      if (today.format('YYYY-MM-DD') === currentDay) {
        result.push({
          index,
          day: currentDay,
          isToday: true,
          dateStr: dayToString(dayOfWeek),
        });
      } else {
        result.push({
          index,
          day: currentDay,
          isToday: false,
          dateStr: dayToString(dayOfWeek),
        });
      }
      index++;
    }
    setDateArray(result);
  }, [today]);

  return <SchedulerCalendarPresenter dateArray={dateArray} />;
};

export default SchedulerCalendarContainer;
