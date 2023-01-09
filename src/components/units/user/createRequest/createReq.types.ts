import { Dispatch, SetStateAction } from 'react';

export interface ICreateReqContainerProps {
  onClickPositionOpen: () => void;
  onClickCancel: () => void;
  onClickTemplate: () => void;
  onClickVaction: () => void;
  setSelected: Dispatch<SetStateAction<string[]>>;
  selected: string[];
  isTemplate: boolean;
  isWorking: boolean;
  isPosition: boolean;
  isVacation: boolean;
}

export interface ICreateReqPageProps {
  isWorking: boolean;
}

export interface ICreateReqSelectComponentProps {
  isTemplate: boolean;
  isPosition: boolean;
  isVacation: boolean;
}
