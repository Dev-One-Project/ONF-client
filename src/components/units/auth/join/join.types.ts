import { ChangeEvent } from 'react';
import { FieldValues, FormState, UseFormRegister } from 'react-hook-form';

export interface IJoinProps {
  onClickSubmit: (data: IFormData) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: any;
  formState: FormState<FieldValues>;
  onError?: any;
  onChangeChecked: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IFormData {
  email: string;
  password: string;
  passwordConfirm: string;
}
