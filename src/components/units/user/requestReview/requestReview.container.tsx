import { MouseEvent } from 'react';
import RequestReviewPresenter from './requestReview.presenter';
import { IRequestReviewContainerProps } from './requestReview.types';

const RequestReviewContainer = (props: IRequestReviewContainerProps) => {
  const onClickWorking = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('근무요청 보내기 누름');
    // 추후 try{}catch{} 써서 통신완료되면 스케줄페이지로 가게 하면 될듯.
  };
  const onClickVacation = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('휴가요청 보내기 누름');
    // 추후 try{}catch{} 써서 통신완료되면 스케줄페이지로 가게 하면 될듯.
  };
  return (
    <RequestReviewPresenter
      isWorking={props.isWorking}
      requestBtnRef={props.requestBtnRef}
      onClickWorking={onClickWorking}
      onClickVacation={onClickVacation}
    />
  );
};

export default RequestReviewContainer;
