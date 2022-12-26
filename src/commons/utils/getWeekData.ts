import moment from 'moment';
import { IDateData } from '../../components/units/admin/scheduler/scheduler.types';
import dayToString from './dayToString';

const getWeekData = (dateArray?: IDateData[], option?: string) => {
  const today = moment();
  let target = null;
  if (option === 'next') {
    target = moment(dateArray?.[0].day).add(1, 'weeks');
  } else if (option === 'prev') {
    target = moment(dateArray?.[0].day).subtract(1, 'weeks');
  } else {
    target = moment();
  }
  let index = 0;
  const result: IDateData[] = [];
  for (let i = 0; i < 7; i++) {
    const day = target
      .clone()
      .startOf('week')
      .add(i, 'days')
      .format('YYYY-MM-DD');
    const dayOfWeek = target.clone().startOf('week').add(i, 'days').day();
    if (today.format('YYYY-MM-DD') === day) {
      result.push({
        index,
        day,
        isToday: true,
        dateStr: dayToString(dayOfWeek),
      });
    } else {
      result.push({
        index,
        day,
        isToday: false,
        dateStr: dayToString(dayOfWeek),
      });
    }
    index++;
  }
  return result;
};
export default getWeekData;
