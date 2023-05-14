import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { IQuery } from '../../../../../../commons/types/generated/types';

export interface IFormProps {
  onCancel: () => void;
  editTarget: any;
  tab: string;
  data?: {
    members?: Pick<IQuery, 'fetchMembers'>;
    organizations?: Pick<IQuery, 'fetchOrganizations'>;
    roleCategories?: Pick<IQuery, 'fetchRoleCategories'>;
    workInfos?: Pick<IQuery, 'fetchWorkInfos'>;
    scheduleCategories?: Pick<IQuery, 'fetchAllScheduleCategories'>;
  };
}

export interface FormActionTypes {
  handleSubmit: UseFormHandleSubmit<any>;
  onEdit: SubmitHandler<any>;
  onSubmit: SubmitHandler<any>;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  onSoftDelete: () => void;
  onCancel: () => void;
  editTarget: any;
  isValid: boolean;
}
