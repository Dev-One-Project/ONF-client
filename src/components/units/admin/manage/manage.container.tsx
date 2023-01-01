import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ManagePresenter from './manage.presenter';
import { IManageProps } from './manage.types';

const Manage = (props: IManageProps) => {
  const { register, handleSubmit, setValue } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const [aniMode, setAniMode] = useState(false);

  const [isLocation, setIsLocation] = useState(false);

  const onClickOpenModal = () => {
    setIsOpen(true);
    setAniMode(true);
  };

  const onClickCloseModal = () => {
    setAniMode(false);
  };

  const onSubmit = (data: any) => {
    if (data) {
      console.log(data);
      setAniMode(false);
    }
  };

  const formProps = {
    register,
    handleSubmit,
    setValue,
    onSubmit,
    onCancel: onClickCloseModal,
  };

  const tab = props.tab === '지점' && isLocation ? '출퇴근 장소' : props.tab;
  return (
    <ManagePresenter
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      aniMode={aniMode}
      onClickCloseModal={onClickCloseModal}
      onClickOpenModal={onClickOpenModal}
      tab={tab}
      formProps={formProps}
      setIsLocation={setIsLocation}
      isLocation={isLocation}
    />
  );
};

export default Manage;
