import { Dispatch, SetStateAction } from 'react';
import { FieldValues, FormState, UseFormRegister } from 'react-hook-form';

export interface IJoinProps {
  onError?: any;
  isOpenEmployee: boolean;
  isOpenAdmin: boolean;
  aniMode: boolean;
  handleSubmit: any;
  checkedList: string[];
  checkboxContents: string[];
  onClickAdminModal: () => void;
  onClickEmployeeModal: () => void;
  onClickCloseModal: () => void;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  onClickSubmit: (data: IFormData) => void;
  setIsOpenEmployee: Dispatch<SetStateAction<boolean>>;
  setIsOpenAdmin: Dispatch<SetStateAction<boolean>>;
  onChangeCheckedAll: (checked: boolean) => void;
  onChangeChecked: (checked: boolean, content: string) => void;
}

export interface IFormData {
  email: string;
  name?: string;
  password: string;
  phone?: number;
  passwordConfirm: string;
}

export interface IModalDate {
  setIsOpenAdmin?: any;
  isOpenAdmin?: boolean;
  onClickAdminModal?: () => void;
  onClickCloseModal?: () => void;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  isOpen?: boolean;
  aniMode: boolean;
}
