import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import {
  IPeriodRange,
  IStandard,
} from '../../../../../../commons/types/generated/types';

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
export interface IWorkInfoPresenterProps {
  register: UseFormRegister<IFormData>;
  setValue?: UseFormSetValue<IFormData>;
  handleSubmit: UseFormHandleSubmit<IFormData>;
  onSubmit: SubmitHandler<IFormData>;
  isValid?: boolean;
  isActive: boolean[];
  onClickTab: (i: number) => () => void;
  onCancel: () => void;
}

export interface IWorkInfoTabProps {
  register: UseFormRegister<IFormData>;
  setValue?: UseFormSetValue<IFormData>;
}
