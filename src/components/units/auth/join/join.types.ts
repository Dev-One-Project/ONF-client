import { Dispatch, SetStateAction } from 'react';
import { FieldValues, FormState, UseFormRegister } from 'react-hook-form';

export interface IJoinProps {
  onError?: any;
  isOpen: boolean;
  isOpen2: boolean;
  aniMode: boolean;
  handleSubmit: any;
  checkedList: string[];
  checkboxContents: string[];
  onClickOpenModal: () => void;
  onClickOpenModal2: () => void;
  onClickCloseModal: () => void;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  onClickSubmit: (data: IFormData) => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setIsOpen2: Dispatch<SetStateAction<boolean>>;
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
  onClickOpenModal?: () => void;
  onClickCloseModal?: () => void;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  isOpen?: boolean;
  aniMode: boolean;
}
