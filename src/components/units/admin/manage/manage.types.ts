import { Dispatch, SetStateAction } from 'react';
import {
  Control,
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
} from 'react-hook-form';
import { IQuery } from '../../../../commons/types/generated/types';

export interface IManagePresenterProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  aniMode: boolean;
  onClickCloseModal: () => void;
  onClickOpenModal: (el: any) => void;
  tab: string;
  formProps: {
    register: UseFormRegister<FieldValues>;
    onCancel: () => void;
    onSubmit: SubmitHandler<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
    reset: UseFormReset<FieldValues>;
    control: Control;
  };
  setIsLocation: Dispatch<SetStateAction<boolean>>;
  isLocation: boolean;
  onOpenEdit: (el: any) => void;
  editTarget: any;
  data?: {
    members?: Pick<IQuery, 'fetchMembers'>;
    organizations?: Pick<IQuery, 'fetchOrganizations'>;
    roleCategories?: Pick<IQuery, 'fetchRoleCategories'>;
  };
}

export interface IManageProps {
  tab: string;
  data?: {
    members?: Pick<IQuery, 'fetchMembers'>;
    organizations?: Pick<IQuery, 'fetchOrganizations'>;
    roleCategories?: Pick<IQuery, 'fetchRoleCategories'>;
  };
}

export interface IStyle {
  isLocation: boolean;
}
