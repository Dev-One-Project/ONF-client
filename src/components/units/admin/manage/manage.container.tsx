import { useState } from 'react';
import ManagePresenter from './manage.presenter';
import { IManageProps } from './manage.types';

const Manage = (props: IManageProps) => {
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

  const onOpenEdit = (el: any) => {
    console.log(el);
    setEditTarget(el);
    onClickOpenModal();
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
      setIsLocation={setIsLocation}
      isLocation={isLocation}
    />
  );
};

export default Manage;
