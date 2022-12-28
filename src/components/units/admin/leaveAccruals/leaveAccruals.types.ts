import { SetStateAction } from 'react';
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';

export interface ILeaveAccrualsPresenterProps {
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
  onClickOpenList: () => void;
  isMemberOpen: boolean;
  onClickCloseList: () => void;
  setValue: UseFormSetValue<FieldValues>;
  optionalFetch: any;
}
