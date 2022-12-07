export interface IVacationContainerProps {
  onClickPositionOpen: () => void;
  onClickCancel: () => void;
  onClickTemplate: () => void;
  onClickVaction: () => void;
  isTemplate: boolean;
  isWorking: boolean;
  isPosition: boolean;
  isVacation: boolean;
}

export interface IVacationPageProps {
  isWorking: boolean;
}

export interface IVacationSelectComponentProps {
  isTemplate: boolean;
  isPosition: boolean;
  isVacation: boolean;
}
