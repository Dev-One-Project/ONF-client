import { IDateData } from '../scheduler.types';

export interface ISchedulerCalendarProps {
  dateArray: IDateData[];
  setDateArray: (dateArray: IDateData[]) => void;
  onClickNextWeek: () => void;
  onClickPrevWeek: () => void;
  onClickToday: () => void;
  member?: any;
  currentMonth: string;
  // mode: ['schedule', boolean] | ['vacation', boolean];
}
