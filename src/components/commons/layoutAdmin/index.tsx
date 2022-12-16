import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { isAdminSidebarState } from '../../../commons/store';
import { styleSet } from '../../../commons/styles/styleSet';
import ManageSidebarComponent from '../../units/admin/manageSidebar';
import AdminHeaderPage from './header';
import AdminSidebarPage from './sidebar';

interface IAdminLayoutProps {
  children?: JSX.Element;
  isAdminSidebar?: boolean;
  isManage?: boolean;
}

const AdminLayout = (props: IAdminLayoutProps) => {
  const router = useRouter();
  const [isAdminSidebar] = useRecoilState(isAdminSidebarState);
  const isManage = router.asPath.includes('/admin/manage');

  return (
    <>
      <AdminHeaderPage />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <AdminSidebarPage />
        {isManage && <ManageSidebarComponent />}
        <ChildrenBox isAdminSidebar={isAdminSidebar} isManage={isManage}>
          {props.children}
        </ChildrenBox>
      </div>
    </>
  );
};
export default AdminLayout;

const ChildrenBox = styled.div`
  margin: ${({ isAdminSidebar, isManage }: IAdminLayoutProps) =>
    isAdminSidebar
      ? isManage
        ? '7rem 3rem 6.5rem 26.5rem'
        : '7rem 3rem 6.5rem 15rem'
      : isManage
      ? '7rem 3rem 6.5rem 17.5rem'
      : '7rem 3rem 6.5rem 6rem'};
  width: 100%;
  @media ${styleSet.breakPoints.tablet} {
    margin: ${({ isAdminSidebar, isManage }: IAdminLayoutProps) =>
      isAdminSidebar
        ? isManage
          ? '7rem 3rem 6.5rem 17.5rem'
          : '7rem 3rem 6.5rem 6rem'
        : isManage
        ? '7rem 3rem 6.5rem 26.5rem'
        : '7rem 3rem 6.5rem 15rem'};
  }
`;
