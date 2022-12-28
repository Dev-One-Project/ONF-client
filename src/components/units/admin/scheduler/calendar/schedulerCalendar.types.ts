import { Dispatch, SetStateAction } from 'react';
import { IDateData } from '../scheduler.types';
import {
  IOrganization,
  IRoleCategory,
  ISchedule,
} from '../../../../../commons/types/generated/types';

export interface ISchedulerCalendarProps {
  dateArray: IDateData[];
  setDateArray: (dateArray: IDateData[]) => void;
  onClickNextWeek: () => void;
  onClickPrevWeek: () => void;
  onClickToday: () => void;
  member?: any;
  currentMonth: string;
  initOption: InitData | undefined;
  setSelectRoleCategory: Dispatch<
    SetStateAction<Array<Partial<IRoleCategory>>>
  >;
  setSelectOrganization: Dispatch<
    SetStateAction<Array<Partial<IOrganization>>>
  >;
  scheduleList: ISchedule[] | undefined;
}

export interface InitData {
  roleCategory:
    | Array<{
        id: string;
        name: string;
      }>
    | undefined;
  organization:
    | Array<{
        id: string;
        name: string;
      }>
    | undefined;
}
