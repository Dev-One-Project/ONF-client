import { FormActionTypes } from '../common/form.types';

export interface IFormData {
  test: string;
  name: string;
  color: string;
  isOvertime: boolean;
  isNotHolidayWork: boolean;
  memo?: string;
}

export interface IScheduleCategoryFormPresenterProps extends FormActionTypes {}
