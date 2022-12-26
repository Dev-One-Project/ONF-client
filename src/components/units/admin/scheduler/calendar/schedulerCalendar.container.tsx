import { useMemo, useState } from 'react';
import SchedulerCalendarPresenter from './schedulerCalendar.presenter';
import { IDateData } from '../scheduler.types';
import getWeekData from '../../../../../commons/utils/getWeekData';
import moment from 'moment';

const SchedulerCalendarContainer = () => {
  const [dateArray, setDateArray] = useState<IDateData[]>([]);
  const [currentMonth, setCurrentMonth] = useState<string>(
    moment().format('YYYY년 MM월'),
  );
  // const [mode, setMode] = useState<
  //   ['schedule', boolean] | ['vacation', boolean]
  // >(['schedule', false]);

  useMemo(() => {
    setDateArray(getWeekData());
  }, []);

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

  return (
    <SchedulerCalendarPresenter
      // mode={mode}
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
