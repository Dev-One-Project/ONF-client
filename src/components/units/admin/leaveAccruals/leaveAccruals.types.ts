import { SetStateAction } from 'react';
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { IQuery } from '../../../../commons/types/generated/types';

export interface ILeaveAccrualsPresenterProps {
  isSelect: boolean;
  onClickEmployee: () => void;
  onClickList: () => void;
  isOpen: boolean;
  aniMode: boolean;
  onClickOpenModal: () => void;
  onClickCloseModal: () => void;
  setIsOpen: SetStateAction<any>;
  onSubmit: (data: any) => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  data?: Pick<IQuery, 'fetchVacationIssues'>;
  organizationsData?: any;
  init: boolean;
  setInit: SetStateAction<any>;
  filterInit: boolean;
  setFilterInit: SetStateAction<any>;
  onChangeDate: (value: any) => void;
}
