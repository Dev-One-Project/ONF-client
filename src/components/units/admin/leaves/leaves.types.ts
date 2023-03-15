import { Dispatch, MouseEvent, SetStateAction } from 'react';
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { IQuery, IVacation } from '../../../../commons/types/generated/types';
import { InputData } from '../../../commons/input/select01';

export interface ILeavesPresenterProps {
  filterInit: boolean;
  setFilterInit: SetStateAction<any>;
  organizationsData?: IInputData[];
  date: Date;
  setOrganizationArr: Dispatch<SetStateAction<IInputData[]>>;
  onChangeStartEndDate: (value: any) => void;
  isOpen: boolean;
  aniMode: boolean;
  onClickList: (e: MouseEvent<HTMLUListElement>) => void;
  onClickCloseModal: () => void;
  setIsOpen: SetStateAction<any>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  onSubmit: (data: any) => void;
  onClickCheckedChange: () => void;
  isCheckedChange: boolean;
  setIsCheckedChange: SetStateAction<any>;
  organizationArr: InputData[];
  withDate?: Pick<IQuery, 'fetchVacationWithDate'>;
  withDelete?: Pick<IQuery, 'fetchVacationWithDelete'>;
  onCheckedAll: (checked: boolean) => void;
  onCheckedElement: (checked: boolean, selectedTarget: IVacation) => void;
  dataLength: number;
  checkedList: IVacation[];
  onClickDeleteChecked: () => void;
  onClickOpenModal: () => void;
  isAddModalOpen: boolean;
  setIsAddModalOpen: Dispatch<SetStateAction<boolean>>;
  selectedDate: string[];
  setSelectedDate: Dispatch<SetStateAction<string[]>>;
  memberData?: InputData[];
  setMemberArr: Dispatch<SetStateAction<IInputData[]>>;
  vacationCategoriesData?: IInputData[];
  data?: Pick<IQuery, 'fetchVacation'>;
  setAniMode: Dispatch<SetStateAction<boolean>>;
}

export interface IInputData {
  id: string;
  name: string;
}
