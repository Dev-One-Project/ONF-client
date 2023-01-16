import { Dispatch, SetStateAction } from 'react';
import {
  Control,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import {
  IQuery,
  IVacationIssue,
} from '../../../../commons/types/generated/types';
import { Dayjs } from 'dayjs';
import { InputData } from '../../../commons/input/select01';

export interface ILeaveAccrualsPresenterProps {
  setOrganizationArr: Dispatch<SetStateAction<IInputData[]>>;
  isSelect: boolean;
  onClickEmployee: () => void;
  onClickList: () => void;
  isOpen: boolean;
  aniMode: boolean;
  onClickOpenModal: () => void;
  onClickCloseModal: () => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onSubmit: (data: any) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  organizationsData?: IInputData[];
  init: boolean;
  setInit: Dispatch<SetStateAction<boolean>>;
  filterInit: boolean;
  setFilterInit: Dispatch<SetStateAction<boolean>>;
  onChangeDate: (value: Dayjs | null) => void;
  onChangeStartEndDate: (
    dates: null | Array<Dayjs | null>,
    dateString: string[],
  ) => void;
  date: Date;
  isSelectOpen: boolean;
  setIsSelectOpen: Dispatch<SetStateAction<boolean>>;
  onClickOpenSelectModal: () => void;
  isMemberOpen: boolean;
  setValue: UseFormSetValue<FieldValues>;
  vDetailDelete?: Pick<IQuery, 'fetchVacationIssueDetailDateDelete'>;
  vDetail?: Pick<IQuery, 'fetchVacationIssueDetailDate'>;
  vBase?: Pick<IQuery, 'fetchVacationIssueBaseDate'>;
  vBaseDelete?: Pick<IQuery, 'fetchVacationIssueWithBaseDateDelete'>;
  setIsMemberOpen: Dispatch<SetStateAction<boolean>>;
  onClickCheckedChange: () => void;
  isCheckedChange: boolean;
  setIsCheckedChange: Dispatch<SetStateAction<boolean>>;
  setDayChecked: Dispatch<SetStateAction<boolean>>;
  setStartDateChecked: Dispatch<SetStateAction<boolean>>;
  setEndDateChecked: Dispatch<SetStateAction<boolean>>;
  setMemoChecked: Dispatch<SetStateAction<boolean>>;
  dayChecked: boolean;
  startDateChecked: boolean;
  endDateChecked: boolean;
  memoChecked: boolean;
  onCheckedAll: (checked: boolean) => void;
  onCheckedElement: (checked: boolean, selectedTarget: IVacationIssue) => void;
  checkedList: IVacationIssue[];
  dataLength: number;
  organizationArr: InputData[];
  onClickDeleteChecked: () => void;
  control: Control<FieldValues, any>;
}

export interface IInputData {
  id: string;
  name: string;
}

export interface IStyedDate {
  memoChecked?: boolean;
}
