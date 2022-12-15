export interface IScheduleContainerProps {
  dateArr: IWeekData[][];
  setDateArray?: () => void;
}

export interface IWeekData {
  index: number;
  day: string;
  work: string;
  tardy: string;
  css: {
    color: string;
    backgroundColor: string;
    display: string;
  };
  func: {
    onClick: boolean;
  };
}
