import { useState } from 'react';
import RequestPresenter from './requests.presenter';

const RequestContainer = () => {
  const [modal, setModal] = useState(false);

  const onClickModal = () => {
    setModal((prev) => !prev);
  };

  return <RequestPresenter onClickModal={onClickModal} modal={modal} />;
};
export default RequestContainer;
