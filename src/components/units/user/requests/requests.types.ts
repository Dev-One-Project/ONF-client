import { Dispatch, SetStateAction } from 'react';

export interface IUserRequestProps {
  onClickModal?: () => void;
  modal?: boolean;
  setModal?: Dispatch<SetStateAction<boolean>>;
}
