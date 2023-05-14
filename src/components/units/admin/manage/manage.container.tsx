import { useEffect, useState } from 'react';
import ManagePresenter from './manage.presenter';
import { IManageProps } from './manage.types';

const Manage = (props: IManageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [aniMode, setAniMode] = useState(false);
  const [isLocation, setIsLocation] = useState(false);
  const [editTarget, setEditTarget] = useState();
  const [isInActive, setIsInActive] = useState(false);

  useEffect(() => {
    if (props.tab !== '직원') return;
    const onChangeSwitch = async () => {
      try {
        await props.refetch?.({ isInActiveMember: isInActive });
      } catch (error) {}
    };
    void onChangeSwitch();
  }, [props, isInActive]);

  const onClickOpenModal = () => {
    setIsOpen(true);
    setAniMode(true);
  };

  const onClickCloseModal = () => {
    setAniMode(false);
    setEditTarget(undefined);
  };

  const onOpenEdit = (data: any) => {
    console.log(data);
    setEditTarget(data);
    onClickOpenModal();
  };

  return (
    <ManagePresenter
      setIsInActive={setIsInActive}
      tab={props.tab}
      data={props.data}
      editTarget={editTarget}
      onOpenEdit={onOpenEdit}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      aniMode={aniMode}
      onClickCloseModal={onClickCloseModal}
      onClickOpenModal={onClickOpenModal}
      setIsLocation={setIsLocation}
      isLocation={isLocation}
    />
  );
};

export default Manage;
