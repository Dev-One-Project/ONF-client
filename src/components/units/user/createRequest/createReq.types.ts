export interface ICreateReqContainerProps {
  onClickPositionOpen: () => void;
  onClickCancel: () => void;
  onClickTemplate: () => void;
  onClickVaction: () => void;
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
