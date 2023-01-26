import { Dispatch, SetStateAction } from 'react';
import {
  Control,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';

export interface IEditLeaveAccrualsContainerProps {
  onClickCloseModal: () => void;
  data?: any;
  listMemberId: string;
  setAniMode: Dispatch<SetStateAction<boolean>>;
}

export interface IEditLeaveAccrualsPresenterProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  control: Control<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  memberData?: IInputData[];
  onSubmit: (data: any) => void;
  onClickDelete: () => void;
  data: any;
  onClickCloseModal: () => void;
}

export interface IInputData {
  id: string;
  name: string;
}
