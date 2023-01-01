import { Dispatch, SetStateAction } from 'react';
import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';

export interface IManagePresenterProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  aniMode: boolean;
  onClickCloseModal: () => void;
  onClickOpenModal: () => void;
  tab: string;
  formProps: {
    register: UseFormRegister<FieldValues>;
    onCancel: () => void;
    onSubmit: SubmitHandler<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
  };
  setIsLocation: Dispatch<SetStateAction<boolean>>;
  isLocation: boolean;
}

export interface IManageProps {
  tab: string;
}

export interface IStyle {
  isLocation: boolean;
}
