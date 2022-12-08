import { useState } from 'react';
import LeaveAccrualsPresenter from './leaveAccruals.presenter';

const LeaveAccrualsContainer = () => {
  const [isSelect, setIsSelect] = useState(true);

  const onClickEmployee = () => {
    setIsSelect(true);
  };

  const onClickList = () => {
    setIsSelect(false);
  };

  return (
    <LeaveAccrualsPresenter
      isSelect={isSelect}
      onClickEmployee={onClickEmployee}
      onClickList={onClickList}
    />
  );
};

export default LeaveAccrualsContainer;
