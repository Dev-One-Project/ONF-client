import { useState } from 'react';
import RequestPresenter from './request.presenter';

const RequestContainer = () => {
  const [modal, setModal] = useState(false);

  const onClickModal = () => {
    setModal((prev) => !prev);
  };

  console.log(modal);
  return <RequestPresenter onClickModal={onClickModal} modal={modal} />;
};
export default RequestContainer;
