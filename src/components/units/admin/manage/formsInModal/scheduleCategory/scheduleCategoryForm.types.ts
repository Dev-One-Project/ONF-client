import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

export interface IFormData {
  test: string;
  name: string;
  color: string;
  isOvertime: boolean;
  isNotHolidayWork: boolean;
  memo?: string;
}

export interface IScheduleCategoryFormPresenterProps {
  register: UseFormRegister<IFormData>;
  onSubmit: SubmitHandler<IFormData>;
  handleSubmit: UseFormHandleSubmit<IFormData>;
  onCancel: () => void;
  isValid: boolean;
}
