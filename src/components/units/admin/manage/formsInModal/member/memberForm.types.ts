import { InputData } from '../../../../../commons/input/select01';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Dayjs } from 'dayjs';
import type { DatePickerProps } from 'antd';
import { FormActionTypes } from '../common/form.types';

export interface IFormData {
  name?: string;
  exitDate?: Date;
  joinDate?: Date;
  memo?: string;
  organizationId?: InputData[];
  roleCategoryId?: InputData[];
  email?: string;
  workInfoId?: string;
  appliedFrom?: string;
}

export interface IMemberFormPresenterProps extends FormActionTypes {
  roleCategories?: InputData[];
  workInfos?: InputData[];
  organizations?: InputData[];
  roleCategoryDefaultValue?: InputData[];
  organizationDefaultValue?: InputData[];
  workInfoDefaultValue?: InputData[];
  isActiveStartDate: boolean;
  setIsActiveStartDate: Dispatch<SetStateAction<boolean>>;
  onChangeStartDate: DatePickerProps['onChange'];
  onChangeEndDate: DatePickerProps['onChange'];
  onChangeAppliedFrom: DatePickerProps['onChange'];
  setIsActiveEndDate: Dispatch<SetStateAction<boolean>>;
  isActiveEndDate: boolean;
  defaultJoinDate?: Dayjs;
  defaultExitDate?: Dayjs;
  defaultAppliedFrom?: Dayjs;
  onChangeInvitation: (
    index: number,
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
  invitationRadio: boolean[];
  setIsActiveWagesInput: Dispatch<SetStateAction<boolean>>;
  isActvieWageInput: boolean;
  isActiveWagesInput: boolean;
}
