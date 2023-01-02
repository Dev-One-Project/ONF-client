import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { isAdminSidebarState } from '../../../../commons/store';
import { SuccessModal } from '../../../commons/modal/sweetAlertModal';
import AdminHeaderPresenter from './header.presenter';

const AdminHeaderContainer = () => {
  const router = useRouter();

  const [, setIsAdminSidebar] = useRecoilState(isAdminSidebarState);
  const [isOpen, setIsOpen] = useState(false);
  const [isPoppingModalOpen, setIsPoppingModalOpen] = useState(false);
  const [aniMode, setAniMode] = useState(false);

  const onClickMenu = () => {
    setIsAdminSidebar((prev) => !prev);
  };

  const onClickReload = () => {
    void router.reload();
    SuccessModal('새로고침 중입니다.');
  };

  const onClickModalOpen = () => {
    setIsPoppingModalOpen(true);
    setAniMode(true);
  };

  const onClickModalClose = () => {
    setAniMode(false);
  };

  return (
    <AdminHeaderPresenter
      onClickMenu={onClickMenu}
      onClickReload={onClickReload}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isPoppingModalOpen={isPoppingModalOpen}
      onClickModalOpen={onClickModalOpen}
      aniMode={aniMode}
      setIsPoppingModalOpen={setIsPoppingModalOpen}
      onClickModalClose={onClickModalClose}
    />
  );
};

export default AdminHeaderContainer;
