import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { isAdminSidebarState } from '../../../commons/store';
import { styleSet } from '../../../commons/styles/styleSet';
import AdminHeaderPage from './header';
import AdminSidebarPage from './sidebar';

interface IAdminLayoutProps {
  children?: JSX.Element;
  isAdminSidebar?: boolean;
}

const AdminLayout = (props: IAdminLayoutProps) => {
  const [isAdminSidebar] = useRecoilState(isAdminSidebarState);
  return (
    <>
      <AdminHeaderPage />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <AdminSidebarPage />
        <ChildrenBox isAdminSidebar={isAdminSidebar}>
          {props.children}
        </ChildrenBox>
      </div>
    </>
  );
};
export default AdminLayout;

const ChildrenBox = styled.div`
  margin: ${({ isAdminSidebar }: IAdminLayoutProps) =>
    isAdminSidebar ? '7rem 3rem 6.5rem 15rem' : '7rem 3rem 6.5rem 6rem'};
  width: 100%;
  @media ${styleSet.breakPoints.tablet} {
    margin: ${({ isAdminSidebar }: IAdminLayoutProps) =>
      isAdminSidebar ? '7rem 3rem 6.5rem 6rem' : '7rem 3rem 6.5rem 15rem'};
  }
`;
