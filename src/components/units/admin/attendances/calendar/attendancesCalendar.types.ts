import { Dispatch, SetStateAction } from 'react';
import {
  Control,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { IQuery } from '../../../../../commons/types/generated/types';
import { InputData } from '../../../../commons/input/select01';

export interface IAttendancesCalendarPresenterProps {
  monthArr: number[];
  month: string;
  organizationsData?: IInputData[];
  setOrganizationArr: Dispatch<SetStateAction<InputData[]>>;
  isOpen: boolean;
  aniMode: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setAniMode: Dispatch<SetStateAction<boolean>>;
  onClickOpenModal: () => void;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: (data: any) => void;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  control: Control<FieldValues, any>;
  organizationArr: InputData[];
  init: boolean;
  setInit: Dispatch<SetStateAction<boolean>>;
  data?: Pick<IQuery, 'fetchMonthWorkChecks'>;
}

interface IInputData {
  id: string;
  name: string;
}
