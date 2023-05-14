import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import {
  IPeriodRange,
  IStandard,
} from '../../../../../../commons/types/generated/types';
import { FormActionTypes } from '../common/form.types';

export interface IFormData {
  name: string;
  fixedLabor?: string;
  weekOffDays?: string;
  memo?: string;
  fixedStandard?: IStandard;
  fixedHours?: string;
  fixedUnitPeriod?: string;
  fixedPeriodRange?: IPeriodRange;
  maximumStandard: IStandard;
  maximumHours?: string;
  maximumUnitPeriod?: string;
  maximumPeriodRange: IPeriodRange;
}
export interface IWorkInfoPresenterProps extends FormActionTypes {
  isActive: boolean[];
  onClickTab: (i: number) => () => void;
}

export interface IWorkInfoTabProps {
  register: UseFormRegister<IFormData>;
  setValue?: UseFormSetValue<IFormData>;
}
