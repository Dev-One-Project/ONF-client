import { InputData } from '../../../../../commons/input/select01';
import { FormActionTypes } from '../common/form.types';

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

export interface IScheduleTemplateFormPresenterProps extends FormActionTypes {
  organizations?: InputData[];
  roleCategories?: InputData[];
  scheduleCategories?: InputData[];
}
