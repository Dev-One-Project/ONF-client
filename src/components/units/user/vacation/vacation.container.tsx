import { useRouter } from 'next/router';
import { useState } from 'react';
import VacationPresenter from './vacation.presenter';
import { IVacationPageProps } from './vacation.types';

const VacationContainer = (props: IVacationPageProps) => {
  const [isPosition, setIsPosition] = useState(false);
  const [isTemplate, setIsTemplate] = useState(false);
  const [isVacation, setIsVacation] = useState(false);
  const router = useRouter();

  const onClickCancel = () => {
    void router.back();
  };

  const onClickPositionOpen = () => {
    setIsPosition((prev) => !prev);
  };

  const onClickTemplate = () => {
    setIsTemplate((prev) => !prev);
  };

  const onClickVaction = () => {
    setIsVacation((prev) => !prev);
  };

  return (
    <VacationPresenter
      onClickCancel={onClickCancel}
      isWorking={props.isWorking}
      isPosition={isPosition}
      isTemplate={isTemplate}
      isVacation={isVacation}
      onClickPositionOpen={onClickPositionOpen}
      onClickTemplate={onClickTemplate}
      onClickVaction={onClickVaction}
    />
  );
};

export default VacationContainer;
