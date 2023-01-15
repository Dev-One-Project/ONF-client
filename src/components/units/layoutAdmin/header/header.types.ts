import { SetStateAction } from 'react';
import { IQuery } from '../../../../commons/types/generated/types';

export interface IAdminHeaderPresenterProps {
  onClickMenu: () => void;
  onClickReload: () => void;
  isOpen: boolean;
  setIsOpen: SetStateAction<any>;
  isPoppingModalOpen: boolean;
  onClickModalOpen: () => void;
  aniMode: boolean;
  setIsPoppingModalOpen: SetStateAction<any>;
  onClickModalClose: () => void;
  onClickWorkCheck: () => void;
  onClickWorkEndCheck: () => void;
  status?: boolean;
  fetchMember?: Pick<IQuery, 'fetchMember'>;
  fetchMemberSchedule?: Pick<IQuery, 'fetchMemberSchedule'>;
  fetchOrganizationDetail?: Pick<IQuery, 'fetchOrganizationDetail'>;
  onClickLogout: () => void;
}
