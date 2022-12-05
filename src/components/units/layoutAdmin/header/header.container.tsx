import { useState } from 'react';
import AdminHeaderPresenter from './header.presenter';

const AdminHeaderContainer = () => {
  const [isOn, setIsOn] = useState(false);
  const onClickSwitch = () => {
    setIsOn(!isOn);
  };

  return <AdminHeaderPresenter isOn={isOn} onClickSwitch={onClickSwitch} />;
};

export default AdminHeaderContainer;
