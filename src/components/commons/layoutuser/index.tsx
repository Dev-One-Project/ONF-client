import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { styleSet } from '../../../commons/styles/styleSet';
import UserHeaderPage from './header';
import { IUserLayoutProps } from './layout.types';
import UserRecordSideBar from './sidebar/record';
import UserRequestSideBar from './sidebar/request';
import UserScheduleSideBar from './sidebar/schedule';

const HIDDEN = ['/login'];
const SCHEDULE = ['/user/schedule'];
const RECORD = ['/user/record'];
const REQUEST = ['/user/request'];

const UserLayout = (props: IUserLayoutProps) => {
  const router = useRouter();
  const hidden = HIDDEN.includes(router.asPath);
  const schedule = SCHEDULE.includes(router.asPath);
  const record = RECORD.includes(router.asPath);
  const request = REQUEST.includes(router.asPath);

  return (
    <>
      {!hidden && <UserHeaderPage />}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {schedule && <UserScheduleSideBar />}
        {record && <UserRecordSideBar />}
        {request && <UserRequestSideBar />}
        <ChildrenBox>{props.children}</ChildrenBox>
      </div>
    </>
  );
};
export default UserLayout;

const ChildrenBox = styled.div`
  margin: 2rem;
  width: 100%;
  @media ${styleSet.breakPoints.tablet} {
    margin-left: 6rem;
  }
`;
