import { MouseEvent, Dispatch, SetStateAction, ChangeEvent } from 'react';
import {
  IOrganization,
  ISchedule,
} from '../../../../../commons/types/generated/types';
import { Dayjs } from 'dayjs';

export interface ISchedulerListProps {
  scheduleList: ISchedule[] | undefined;
  initOption: InitData | undefined;
  workHour: number;
  startDate: string;
  endDate: string;
  isOpen: boolean;
  isOpenDetail: boolean;
  aniMode: boolean;
  selectSchedule: Partial<ISchedule> | undefined;
  checkedList: string[] | undefined;
  setSelectOrganization: Dispatch<
    SetStateAction<Array<Partial<IOrganization>>>
  >;
  setStartDate: Dispatch<SetStateAction<string>>;
  setEndDate: Dispatch<SetStateAction<string>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setIsOpenDetail: Dispatch<SetStateAction<boolean>>;
  onChangeStartEndDate: (
    dates: null | Array<Dayjs | null>,
    dateStrings: string[],
  ) => void;
  onChangeCheckAll: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickToday: () => void;
  onClickOpenModal: () => void;
  onClickCloseModal: () => void;
  onClickListContent: (e: MouseEvent<HTMLDivElement>) => void;
  onChangeCheckList: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface InitData {
  organization:
    | Array<{
        id: string;
        name: string;
      }>
    | undefined;
  roleCategory:
    | Array<{
        id: string;
        name: string;
      }>
    | undefined;
  workType:
    | Array<{
        id: string;
        name: string;
      }>
    | undefined;
}
