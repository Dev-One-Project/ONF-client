import { Dispatch, SetStateAction } from 'react';
import {
  Control,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { IQuery } from '../../../../../../commons/types/generated/types';
import { IInputData } from '../../../leaveAccruals/modules/edit/editLeaveAccruals.types';

export interface IEditLeavesContainerProps {
  vacationCategoriesData?: IInputData[];
  data?: Pick<IQuery, 'fetchVacation'>;
  date: Date;
  onClickCloseModal: () => void;
  setAniMode: Dispatch<SetStateAction<boolean>>;
}

export interface IEditLeavesPresenterProps {
  vacationCategoriesData?: IInputData[];
  data?: Pick<IQuery, 'fetchVacation'>;
  date: Date;
  onClickCloseModal: () => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  control: Control<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  onSubmit: (data: any) => void;
  onClickDelete: () => void;
}
