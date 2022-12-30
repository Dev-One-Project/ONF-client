import { Dispatch, SetStateAction } from 'react';
import {
  IOrganization,
  ISchedule,
} from '../../../../../commons/types/generated/types';
import { Dayjs } from 'dayjs';

export interface ISchedulerListProps {
  onClickToday: () => void;
  initOption: InitData | undefined;
  setSelectOrganization: Dispatch<
    SetStateAction<Array<Partial<IOrganization>>>
  >;
  scheduleList: ISchedule[] | undefined;
  setStartDate: Dispatch<SetStateAction<string>>;
  setEndDate: Dispatch<SetStateAction<string>>;
  startDate: string;
  endDate: string;
  onChangeStartEndDate: (
    dates: null | Array<Dayjs | null>,
    dateStrings: string[],
  ) => void;
  workHour: number;
}

export interface InitData {
  organization:
    | Array<{
        id: string;
        name: string;
      }>
    | undefined;
}
