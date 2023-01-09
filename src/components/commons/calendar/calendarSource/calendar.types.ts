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
}

export interface ICalendarProps {
  selectedColor?: string;
  width?: string;
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
}
