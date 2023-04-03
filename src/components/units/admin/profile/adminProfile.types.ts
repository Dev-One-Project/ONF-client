import { IQuery } from './../../../../commons/types/generated/types';
import { MenuProps } from 'antd';
import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';

export interface IFormData {
  duty?: string[];
  organization?: string[];
  account: { name?: string };
}

export interface IAdminProfileProps {
  setValue: UseFormSetValue<IFormData>;
  register: UseFormRegister<IFormData>;
  onSubmit: (data: any) => void;
  handleSubmit: UseFormHandleSubmit<IFormData>;
  data?: Pick<IQuery, 'fetchAccount'>;
  items?: MenuProps['items'];
}
