import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { styleSet } from '../../../commons/styles/styleSet';
import AdminHeaderPage from './header';
import AdminSidebarPage from './sidebar';

interface IAdminLayoutProps {
  children: JSX.Element;
}

// const HIDDEN = ['/auth/login', '/auth/join'];

const AdminLayout = (props: IAdminLayoutProps) => {
  const router = useRouter();

  const hidden = HIDDEN.includes(router.asPath);

  return (
    <>
      {!hidden && <AdminHeaderPage />}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {!hidden && <AdminSidebarPage />}
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
