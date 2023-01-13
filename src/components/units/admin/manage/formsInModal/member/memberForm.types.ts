import { InputData } from '../../../../../commons/input/select01';
import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Dayjs } from 'dayjs';
import type { DatePickerProps } from 'antd';

export interface IFormData {
  name?: string;
  exitDate?: Date;
  joinDate?: Date;
  memo?: string;
  organizationId?: InputData[];
  roleCategoryId?: InputData[];
  email?: string;
  workInfoName?: string;
  appliedFrom?: string;
}

export interface IMemberFormPresenterProps {
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  editTarget?: any;
  onEdit: SubmitHandler<FieldValues>;
  onSubmit: SubmitHandler<FieldValues>;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  roleCategories?: InputData[];
  workInfos?: InputData[];
  organizations?: InputData[];
  roleCategoryDefaultValue?: InputData[];
  organizationDefaultValue?: InputData[];
  isActiveStartDate: boolean;
  setIsActiveStartDate: Dispatch<SetStateAction<boolean>>;
  defaultJoinDate?: Dayjs;
  onChangeStartDate: DatePickerProps['onChange'];
  onChangeEndDate: DatePickerProps['onChange'];
  onChangeAppliedFrom: DatePickerProps['onChange'];
  onCancel: () => void;
  setIsActiveEndDate: Dispatch<SetStateAction<boolean>>;
  isActiveEndDate: boolean;
  defaultExitDate?: Dayjs;
  onChangeInvitation: (
    index: number,
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
  invitationRadio: boolean[];
  setIsActiveWagesInput: Dispatch<SetStateAction<boolean>>;
  onSoftDelete: () => void;
  isActvieWageInput: boolean;
  isActiveWagesInput: boolean;
}
