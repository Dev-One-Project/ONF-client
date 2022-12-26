import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

export interface IJoinProps {
  onClickSubmit: (data: IFormData) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
}

export interface IFormData {
  email: string;
  password: string;
  passwordConfirmation: string;
}
