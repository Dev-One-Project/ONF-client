import { Moment } from 'moment';

export interface IScheduleContainerProps {
  dateArr: IWeekData[][];
  setDateArray?: () => void;
  onClickCreateVacation?: () => void;
  onClickCreateWorking?: () => void;
  MovePrevMonth?: () => void;
  MoveNextMonth?: () => void;
  today?: Moment;
}

export interface IWeekData {
  index: number;
  day: string;
  work: string;
  tardy: string;
  option: boolean;
}
