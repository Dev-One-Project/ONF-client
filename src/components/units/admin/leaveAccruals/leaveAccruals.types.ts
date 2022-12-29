import { Dispatch, SetStateAction } from 'react';
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { IQuery } from '../../../../commons/types/generated/types';

export interface ILeaveAccrualsPresenterProps {
  setOrganizationArr: Dispatch<SetStateAction<IInputData[]>>;
  isSelect: boolean;
  onClickEmployee: () => void;
  onClickList: () => void;
  isOpen: boolean;
  aniMode: boolean;
  onClickOpenModal: () => void;
  onClickCloseModal: () => void;
  setIsOpen: SetStateAction<any>;
  onSubmit: (data: any) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  organizationsData?: any;
  init: boolean;
  setInit: SetStateAction<any>;
  filterInit: boolean;
  setFilterInit: SetStateAction<any>;
  onChangeDate: (value: any) => void;
  onChangeStartEndDate: (value: any) => void;
  date: Date;
  isSelectOpen: boolean;
  setIsSelectOpen: SetStateAction<any>;
  onClickOpenSelectModal: () => void;
  isMemberOpen: boolean;
  setValue: UseFormSetValue<FieldValues>;
  vDetailDelete?: Pick<IQuery, 'fetchVacationIssueDetailDateDelete'>;
  vDetail?: Pick<IQuery, 'fetchVacationIssueDetailDate'>;
  vBase?: Pick<IQuery, 'fetchVacationIssueBaseDate'>;
  vBaseDelete?: Pick<IQuery, 'fetchVacationIssueWithBaseDateDelete'>;
  setIsMemberOpen: SetStateAction<any>;
  onClickCheckedChange: () => void;
  isCheckedChange: boolean;
  setIsCheckedChange: SetStateAction<any>;
  setDayChecked: SetStateAction<any>;
  setStartDateChecked: SetStateAction<any>;
  setEndDateChecked: SetStateAction<any>;
  setMemoChecked: SetStateAction<any>;
  dayChecked: boolean;
  startDateChecked: boolean;
  endDateChecked: boolean;
  memoChecked: boolean;
}

export interface IInputData {
  id: string;
  name: string;
}

export interface IStyedDate {
  memoChecked?: boolean;
}
