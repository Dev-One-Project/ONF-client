import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import {
  isAdminSidebarState,
  isNarrowWidthState,
} from '../../../commons/store';
import { styleSet } from '../../../commons/styles/styleSet';
import ManageSidebarComponent from '../../units/admin/manage/manageSidebar';
import AdminHeaderPage from './header';
import AdminSidebarPage from './sidebar';

interface IAdminLayoutProps {
  children?: JSX.Element;
  isAdminSidebar?: boolean;
  isManage?: boolean;
  isNarrowWidth?: boolean;
}

const AdminLayout = (props: IAdminLayoutProps) => {
  const router = useRouter();
  const [isAdminSidebar] = useRecoilState(isAdminSidebarState);
  const [isNarrowWidth] = useRecoilState(isNarrowWidthState);

  const isManage = router.asPath.includes('/admin/manage');

  return (
    <>
      <AdminHeaderPage />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SidebarDiv
          isAdminSidebar={isAdminSidebar}
          isNarrowWidth={isNarrowWidth}
        ></SidebarDiv>
        <AdminSidebarPage />
        {isManage && <ManageSidebarComponent />}
        <ChildrenBox
          isAdminSidebar={isAdminSidebar}
          isNarrowWidth={isNarrowWidth}
        >
          {props.children}
        </ChildrenBox>
      </div>
    </>
  );
};
export default AdminLayout;

const ChildrenBox = styled.div`
  width: ${(props: IAdminLayoutProps) =>
    props.isAdminSidebar
      ? props.isNarrowWidth
        ? 'calc(100vw - 9rem)'
        : 'calc(100vw - 18rem)'
      : props.isNarrowWidth
      ? 'calc(100vw - 18rem)'
      : 'calc(100vw - 9rem)'};
  margin: 7rem 3rem 6.5rem 3rem;
  @media ${styleSet.breakPoints.tablet} {
    width: ${(props: IAdminLayoutProps) =>
      props.isAdminSidebar
        ? props.isNarrowWidth
          ? 'calc(100vw - 18rem)'
          : 'calc(100vw - 9rem)'
        : props.isNarrowWidth
        ? 'calc(100vw - 9rem)'
        : 'calc(100vw - 18rem)'};
  }
`;

const SidebarDiv = styled.div`
  min-width: ${(props: IAdminLayoutProps) =>
    props.isAdminSidebar
      ? props.isNarrowWidth
        ? '60px'
        : '200px'
      : props.isNarrowWidth
      ? '200px'
      : '60px'};
  @media ${styleSet.breakPoints.tablet} {
    min-width: ${(props: IAdminLayoutProps) =>
      props.isAdminSidebar
        ? props.isNarrowWidth
          ? '200px'
          : '60px'
        : props.isNarrowWidth
        ? '60px'
        : '200px'};
  }
`;
