import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { styleSet } from '../../../commons/styles/styleSet';
import UserHeaderPage from '../layoutuser/header';
import { IUserLayoutProps } from '../layoutuser/layout.types';
import UserScheduleSideBar from '../layoutuser/sidebar/schedule';
import UserAttendancesSideBar from './sidebar/attendances';

import UserRequestSideBar from './sidebar/requests';

const HIDDEN = ['/login'];
const SCHEDULE = ['/user/schedule'];
const ATTENDANCES = ['/user/attendances'];
const REQUEST = ['/user/requests'];

const UserLayout = (props: IUserLayoutProps) => {
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
  @media ${styleSet.breakPoints.tablet} {
    margin-left: 6rem;
  }
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
`;
