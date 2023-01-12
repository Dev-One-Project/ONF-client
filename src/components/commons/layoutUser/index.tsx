import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import UserHeaderPage from '../layoutUser/header/index';
import UserScheduleSideBar from '../layoutUser/sidebar/schedule';
import { IUserLayout } from './layout.types';
import UserAttendancesSideBar from './sidebar/attendances';

import UserRequestSideBar from './sidebar/requests';

const HIDDEN = ['/login'];
const SCHEDULE = ['/user/schedule'];
const ATTENDANCES = ['/user/attendances'];
const REQUEST = ['/user/requests'];

const UserLayout = (props: IUserLayout) => {
  const router = useRouter();
  const hidden = HIDDEN.includes(router.asPath);
  const schedule = SCHEDULE.includes(router.asPath);
  const attendances = ATTENDANCES.includes(router.asPath);
  const request = REQUEST.includes(router.asPath);

  return (
    <>
      {!hidden && <UserHeaderPage />}
      <FlexBox>
        {schedule && <UserScheduleSideBar />}
        {attendances && <UserAttendancesSideBar />}
        {request && <UserRequestSideBar />}
        <ChildrenBox>{props.children}</ChildrenBox>
      </FlexBox>
    </>
  );
};
export default UserLayout;

const ChildrenBox = styled.div`
  padding: 1rem;
  width: 100%;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
`;
