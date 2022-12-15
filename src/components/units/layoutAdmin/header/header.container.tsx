import { useRecoilState } from 'recoil';
import { isAdminSidebarState } from '../../../../commons/store';
import AdminHeaderPresenter from './header.presenter';

const AdminHeaderContainer = () => {
  const [, setIsAdminSidebar] = useRecoilState(isAdminSidebarState);

  const onClickMenu = () => {
    setIsAdminSidebar((prev) => !prev);
  };
  return <AdminHeaderPresenter onClickMenu={onClickMenu} />;
};

export default AdminHeaderContainer;
