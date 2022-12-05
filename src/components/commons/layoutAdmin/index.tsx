import styled from '@emotion/styled';
import { styleSet } from '../../../commons/styles/styleSet';
import AdminHeaderPage from './header';
import AdminSidebarPage from './sidebar';

interface IAdminLayoutProps {
  children: JSX.Element;
}

const AdminLayout = (props: IAdminLayoutProps) => {
  return (
    <>
      <AdminHeaderPage />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <AdminSidebarPage />
        <ChildrenBox>{props.children}</ChildrenBox>
      </div>
    </>
  );
};
export default AdminLayout;

const ChildrenBox = styled.div`
  margin: 7rem 3rem 6.5rem 15rem;
  width: 100%;
  @media ${styleSet.breakPoints.tablet} {
    margin-left: 6rem;
  }
`;
