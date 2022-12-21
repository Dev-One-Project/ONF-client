import { Moment } from 'moment';

export interface IScheduleContainerProps {
  dateArr: IWeekData[][];
  setDateArray?: () => void;
  dayData: any;
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
  css: {
    color: string;
    backgroundColor: string;
    display: string;
  };
  func: {
    onClick: boolean;
  };
}
