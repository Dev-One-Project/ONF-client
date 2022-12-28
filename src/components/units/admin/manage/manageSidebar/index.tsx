import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { styleSet } from '../../../../../commons/styles/styleSet';

interface ITabProps {
  isActive: boolean;
}

// interface IStyle {
//   isAdminSidebar?: boolean;
// }

const ManageSidebarComponent = () => {
  const router = useRouter();

  const ManageList = [
    { label: '직원', path: 'members' },
    { label: '지점', path: 'organization' },
    { label: '직무', path: 'duty' },
    { label: '근로정보', path: 'wages' },
    { label: '근무일정 유형', path: 'shift-types' },
    { label: '근무일정 템플릿', path: 'shift-template' },
    { label: '휴가 유형', path: 'leave-types' },
  ];

  const onClickChangeTab = (path: string) => async () => {
    await router.push(`/admin/manage/${path}`);
  };
  return (
    <ManageSidebar>
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
  min-width: 11.5rem;
  height: 100vh;
  background: ${styleSet.colors.lightGray};
  position: relative;
  z-index: 0;
  padding-top: 4.5rem;
`;

const TabContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
`;

const Tab = styled.li`
  display: block;
  padding: 0.75rem 1.5rem 0.5rem 1.5rem;
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
