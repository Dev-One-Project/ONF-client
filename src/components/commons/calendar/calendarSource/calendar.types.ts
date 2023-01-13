import { Moment } from 'moment';
import React, { Dispatch, SetStateAction } from 'react';

export interface IWeekData {
  index: number;
  day: string;
  work: string;
  tardy: string;
  option: boolean;
}

export interface ICalendarContainerProps extends ICalendarStyleProps {
  dateArr: IWeekData[][];
  MoveNextMonth?: () => void;
  MovePrevMonth?: () => void;
  today?: Moment;
  selected: string[];
  onClickElement: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface ICalendarProps extends ICalendarStyleProps {
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
}

export interface ICalendarStyleProps {
  daySize?: string;
  titleSize?: string;
  width?: string;
  elementHeight?: string;
  selectedColor?: string;
}
