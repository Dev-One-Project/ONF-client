import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { InputData } from '../../../../../commons/input/select01';

export interface IFormData {
  name: string;
  startTime: string;
  endTime: string;
  scheduleCategoryId: string;
  organizationId: string[];
  roleCategoryId: string[];
  colorCode: string;
  memo: string;
}

export interface IScheduleTemplateFormPresenterProps {
  register: UseFormRegister<IFormData>;
  handleSubmit: UseFormHandleSubmit<IFormData>;
  onSubmit: SubmitHandler<IFormData>;
  setValue: UseFormSetValue<IFormData>;
  onCancel: () => void;
  organizations?: InputData[];
  roleCategories?: InputData[];
  scheduleCategories?: InputData[];
  isValid: boolean;
}
