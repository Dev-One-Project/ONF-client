import {
  Control,
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
} from 'react-hook-form';
import { IQuery } from '../../../../../../commons/types/generated/types';

export interface IFormProps {
  register: UseFormRegister<FieldValues>;
  onCancel: () => void;
  onSubmit: SubmitHandler<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  setValue?: UseFormSetValue<FieldValues>;
  reset: UseFormReset<FieldValues>;
  control: Control;
  editTarget: any;
  tab: string;
  data?: {
    members?: Pick<IQuery, 'fetchMembers'>;
    organizations?: Pick<IQuery, 'fetchOrganizations'>;
    roleCategories?: Pick<IQuery, 'fetchRoleCategories'>;
  };
}
