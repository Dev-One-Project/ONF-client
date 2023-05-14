import { InputData } from '../../../../../commons/input/select01';
import { FormActionTypes } from '../common/form.types';

export interface IFormData {
  name: string;
  timeOption: string;
  memo: string;
  paidTime: number;
  deductionDays: number;
  organizationId: string;
  roleCategoryId: string;
}

export interface IVacationCategoryPresenterProps extends FormActionTypes {
  organizations?: InputData[];
  roleCategories?: InputData[];
}
