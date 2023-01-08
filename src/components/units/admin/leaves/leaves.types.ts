import { Dispatch, SetStateAction } from 'react';
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';

export interface ILeavesPresenterProps {
  filterInit: boolean;
  setFilterInit: SetStateAction<any>;
  organizationsData?: IInputData[];
  date: Date;
  setOrganizationArr: Dispatch<SetStateAction<IInputData[]>>;
  onChangeStartEndDate: (value: any) => void;
  isOpen: boolean;
  aniMode: boolean;
  onClickList: () => void;
  onClickCloseModal: () => void;
  setIsOpen: SetStateAction<any>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  onSubmit: (data: any) => void;
  onClickCheckedChange: () => void;
  isCheckedChange: boolean;
  setIsCheckedChange: SetStateAction<any>;
}

export interface IInputData {
  id: string;
  name: string;
}
