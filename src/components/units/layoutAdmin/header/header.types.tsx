import { SetStateAction } from 'react';

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
}
