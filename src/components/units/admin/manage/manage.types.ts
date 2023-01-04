import { Dispatch, SetStateAction } from 'react';
import {
  Control,
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
} from 'react-hook-form';

export interface IManagePresenterProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  aniMode: boolean;
  onClickCloseModal: () => void;
  onClickOpenModal: (el: any) => void;
  tab: string;
  formProps: {
    register: UseFormRegister<FieldValues>;
    onCancel: () => void;
    onSubmit: SubmitHandler<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
    reset: UseFormReset<FieldValues>;
    control: Control;
  };
  setIsLocation: Dispatch<SetStateAction<boolean>>;
  isLocation: boolean;
  onOpenEdit: (el: any) => void;
  editTarget: any;
}

export interface IManageProps {
  tab: string;
}

export interface IStyle {
  isLocation: boolean;
}
