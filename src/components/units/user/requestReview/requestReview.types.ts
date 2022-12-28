import { MouseEvent, MutableRefObject } from 'react';

export interface IRequestReviewContainerProps {
  isWorking?: boolean;
  requestBtnRef?: MutableRefObject<HTMLButtonElement | undefined>;
}

export interface IRequestReviewPresenterProps {
  isWorking?: boolean;
  requestBtnRef?: any;
  onClickWorking: (e: MouseEvent<HTMLFormElement>) => void;
  onClickVacation: (e: MouseEvent<HTMLFormElement>) => void;
}
