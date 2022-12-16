import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { isAdminSidebarState } from '../../../../commons/store';
import { styleSet } from '../../../../commons/styles/styleSet';

interface ITabProps {
  isActive: boolean;
}

interface IStyle {
  isAdminSidebar?: boolean;
}

const ManageSidebarComponent = () => {
  const router = useRouter();
  const [isAdminSidebar] = useRecoilState(isAdminSidebarState);
  const ManageList = [
    { label: '직원', path: 'members' },
    { label: '팀', path: 'organization' },
    { label: '직무', path: 'duty' },
    { label: '근로정보', path: 'wages' },
    { label: '근무일정 유형', path: 'shift-types' },
    { label: '근무일정 템플릿', path: 'shift-template' },
    { label: '휴가 유형', path: 'leave-types' },
    { label: '휴가 발생 규칙', path: 'leave-accural-rule' },
    { label: '스케쥴 패턴', path: 'schedule-patterns' },
    { label: '커스텀 요청 유형', path: 'custom-request-types' },
    { label: '승인 규칙', path: 'request-approval-rules' },
  ];

  const onClickChangeTab = (path: string) => async () => {
    await router.push(`/admin/manage/${path}`);
  };
  return (
    <ManageSidebar isAdminSidebar={isAdminSidebar}>
      <TabContainer>
        {ManageList.map((el, i) => (
          <Tab
            isActive={router.asPath.includes(el.path)}
            onClick={onClickChangeTab(el.path)}
            key={i}
          >
            {el.label}
          </Tab>
        ))}
      </TabContainer>
    </ManageSidebar>
  );
};

export default ManageSidebarComponent;

const ManageSidebar = styled.div`
  width: 180px;
  height: 100%;
  background: ${styleSet.colors.lightGray};
  position: fixed;
  left: ${({ isAdminSidebar }: IStyle) => (isAdminSidebar ? '200px' : '60px')};

  z-index: 0;
  padding-top: 4.5rem;
  @media ${styleSet.breakPoints.tablet} {
    left: ${({ isAdminSidebar }: IStyle) =>
      isAdminSidebar ? '60px' : '200px'};
  }
`;

const TabContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
`;

const Tab = styled.li`
  display: block;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    text-decoration: underline;
    font-family: ${styleSet.fonts.B};
    background-color: ${styleSet.colors.gray};
  }

  ${(props: ITabProps) =>
    props.isActive
      ? {
          backgroundColor: `${styleSet.colors.gray}`,
          fontFamily: `${styleSet.fonts.B}`,
        }
      : null}
`;
