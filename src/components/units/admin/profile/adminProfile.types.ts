import { MenuProps } from 'antd';
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';

export interface IAdminProfileProps {
  setValue: UseFormSetValue<FieldValues>;
  register: UseFormRegister<FieldValues>;
  onSubmit: (data: any) => void;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  data?: any;
  items?: MenuProps['items'];
  organizationModalState: boolean;
  categoryModalState: boolean;
  onClickToggleOrganizationModal: () => void;
  onClickToggleCategoryModal: () => void;
}
