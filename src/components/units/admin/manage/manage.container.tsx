import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ManagePresenter from './manage.presenter';
import { IManageProps } from './manage.types';

const Manage = (props: IManageProps) => {
  console.log('container start');
  console.log(props.data);
  const { register, handleSubmit, setValue, reset, control } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const [aniMode, setAniMode] = useState(false);

  const [isLocation, setIsLocation] = useState(false);

  const [editTarget, setEditTarget] = useState();

  const onClickOpenModal = () => {
    setIsOpen(true);
    setAniMode(true);
  };

  const onClickCloseModal = () => {
    setAniMode(false);
    setEditTarget(undefined);
  };

  const onSubmit = (data: any) => {
    if (typeof data.accessAuth === 'object') {
      data.accessAuth = data.accessAuth[0].name;
    }
    if (data) {
      console.log('onSubmit:', data);
      onClickCloseModal();
    }
  };

  const onOpenEdit = (el: any) => {
    console.log(el);
    setEditTarget(el);
    onClickOpenModal();
  };

  const formProps = {
    register,
    handleSubmit,
    setValue,
    onSubmit,
    onCancel: onClickCloseModal,
    reset,
    control,
  };

  const tab = props.tab === '지점' && isLocation ? '출퇴근 장소' : props.tab;
  return (
    <ManagePresenter
      data={props.data}
      editTarget={editTarget}
      onOpenEdit={onOpenEdit}
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
