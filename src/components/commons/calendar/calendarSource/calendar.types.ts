import { Moment } from 'moment';
import React, { Dispatch, SetStateAction } from 'react';

export interface IWeekData {
  index: number;
  day: string;
  work: string;
  tardy: string;
  option: boolean;
}

export interface ICalendarContainerProps {
  selectedColor?: string;
  dateArr: IWeekData[][];
  MoveNextMonth?: () => void;
  MovePrevMonth?: () => void;
  today?: Moment;
  selected: string[];
  onClickElement: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  width?: string;
  elementHeight?: string;
  daySize?: {
    fontSize?: string;
  };
  titleSize?: {
    fontSize?: string;
  };
}

export interface ICalendarProps {
  selectedColor?: string;
  width?: string;
  elementHeight?: string;
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
  daySize?: string;
  titleSize?: string;
}
