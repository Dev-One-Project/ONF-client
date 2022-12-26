import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface ILoginProps {
  handleSubmit: any;
  register: UseFormRegister<FieldValues>;
  onClickLogin: (data: IFormData) => Promise<void>;
}

export interface IFormData {
  email: string;
  password: string;
}
