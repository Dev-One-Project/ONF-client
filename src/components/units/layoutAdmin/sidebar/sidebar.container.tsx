import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import AttendanceSvg from '../../../commons/svg/attendances';
import CompanySvg from '../../../commons/svg/company';
import HomeSvg from '../../../commons/svg/home';
import LeaveSvg from '../../../commons/svg/leaves';
import ManageSvg from '../../../commons/svg/manage';
import ProfileSvg from '../../../commons/svg/profile';
import RequestSvg from '../../../commons/svg/requests';
import SchedulerSvg from '../../../commons/svg/scheduler';
import AdminSidebarPresenter from './sidebar.presenter';

const sidebarLink = [
  { id: 1, address: '/admin/home', name: '홈', svg: <HomeSvg /> },
  {
    id: 2,
    address: '/admin/scheduler/calendar',
    name: '근무일정',
    svg: <SchedulerSvg />,
  },
  { id: 3, address: '/admin/scheduler/calendar', name: '달력형' },
  { id: 4, address: '/admin/scheduler/list', name: '목록형' },
  {
    id: 5,
    address: '/admin/attendances/calendar',
    name: '출퇴근기록',
    svg: <AttendanceSvg />,
  },
  { id: 6, address: '/admin/attendances/calendar', name: '달력형' },
  { id: 7, address: '/admin/attendances/list', name: '목록형' },
  { id: 8, address: '/admin/leaves', name: '휴가', svg: <LeaveSvg /> },
  { id: 9, address: '/admin/leaves', name: '휴가 목록' },
  { id: 10, address: '/admin/leaveAccruals', name: '휴가 발생' },
  {
    id: 11,
    address: '/admin/requests',
    name: '요청 내역',
    svg: <RequestSvg />,
  },
  { id: 12, address: '/admin/manage', name: '관리', svg: <ManageSvg /> },
  { id: 13, address: '/admin/company', name: '회사 설정', svg: <CompanySvg /> },
  { id: 14, address: '/admin/profile', name: '프로필', svg: <ProfileSvg /> },
];

const AdminSidebarContainer = () => {
  const router = useRouter();

  const onClickList = (event: MouseEvent<HTMLLIElement>) => {
    router.push(event?.currentTarget.id);
  };

  return (
    <AdminSidebarPresenter
      sidebarLink={sidebarLink}
      onClickList={onClickList}
    />
  );
};

export default AdminSidebarContainer;
