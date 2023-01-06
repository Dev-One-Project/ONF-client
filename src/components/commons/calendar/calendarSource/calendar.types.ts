import { Moment } from 'moment';

export interface IWeekData {
  index: number;
  day: string;
  work: string;
  tardy: string;
  css: {
    color: string;
    backgroundColor: string | undefined;
    display: string;
  };
  func: {
    onClick: boolean;
  };
}

export interface ICalendarContainerProps {
  dateArr: IWeekData[][];
  MoveNextMonth?: () => void;
  MovePrevMonth?: () => void;
  today?: Moment;
}
