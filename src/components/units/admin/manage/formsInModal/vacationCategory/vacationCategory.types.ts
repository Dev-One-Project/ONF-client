import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { InputData } from '../../../../../commons/input/select01';

export interface IFormData {
  name: string;
  timeOption: string;
  memo: string;
  paidTime: number;
  deductionDays: number;
  organizationId: string;
  roleCategoryId: string;
}

export interface IVacationCategoryPresenterProps {
  register: UseFormRegister<IFormData>;
  handleSubmit: UseFormHandleSubmit<IFormData>;
  onSubmit: SubmitHandler<IFormData>;
  setValue: UseFormSetValue<IFormData>;
  isValid: boolean;
  onCancel: () => void;
  organizations?: InputData[];
  roleCategories?: InputData[];
}
