import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

export interface IAccountPresenterProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickUpdateAccount: (inputData: FieldValues) => void;
  onClickUpdateEmail: (inputData: FieldValues) => void;
  onClickUpdatePassword: (inputData: FieldValues) => void;
  onClickSendCode: (inputData: FieldValues) => void;
  onClickCheckCode: (inputData: FieldValues) => void;
  isValitationBtn: boolean;
  isEmailValitation: boolean;
  fetchAccount: {
    id: string;
    email: string;
    name: string;
    phone: string;
  };
}
