import { useRouter } from 'next/router';
import { useState } from 'react';
import CreateReqPresenter from './createReq.presenter';
import { ICreateReqPageProps } from './createReq.types';

const CreateReqContainer = (props: ICreateReqPageProps) => {
  const [isPosition, setIsPosition] = useState(false);
  const [isTemplate, setIsTemplate] = useState(false);
  const [isVacation, setIsVacation] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
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
  console.log(selected);
  return (
    <CreateReqPresenter
      onClickCancel={onClickCancel}
      isWorking={props.isWorking}
      isPosition={isPosition}
      isTemplate={isTemplate}
      isVacation={isVacation}
      onClickPositionOpen={onClickPositionOpen}
      onClickTemplate={onClickTemplate}
      onClickVaction={onClickVaction}
      selected={selected}
      setSelected={setSelected}
    />
  );
};

export default CreateReqContainer;
