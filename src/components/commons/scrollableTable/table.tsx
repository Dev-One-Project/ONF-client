import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { isAdminSidebarState } from '../../../commons/store';
import { styleSet } from '../../../commons/styles/styleSet';
import Check01 from '../input/check01';

interface IScrollableTableProps {
  tab: string;
}

interface IStyle {
  isManage: boolean;
  isAdminSidebar?: boolean;
}

let headerData: string[] = [];
let bodyData: string[] = [];

const ScrollableTable = (props: IScrollableTableProps) => {
  const router = useRouter();
  const [isAdminSidebar] = useRecoilState(isAdminSidebarState);
  // const exampleData = [
  //   {
  //     name: '김민겸',
  //     isAdmin: true,
  //     joinDate: '2022.12.02',
  //     organization: '1팀',
  //     category: '프론트엔드 개발자',
  //   },
  // ];

  if (props.tab === '직원') {
    headerData = [
      '이름',
      '액세스 권한',
      '입사일',
      '팀',
      '직무',
      '근로정보명',
      '시급',
      '소정근로규칙',
      '최대근로규칙',
      '적용 시점',
      '적용 시점',
      '적용 시점',
    ];
    bodyData = [
      '김민겸',
      '최고 관리자',
      '',
      '',
      '프론트엔드 개발자',
      '일반근무',
      '',
      '1주 40시간',
      '1주 52시간',
      '',
      '',
      '',
    ];
  } else if (props.tab === '지점') {
    headerData = ['지점명', '출퇴근 장소들', '메모'];
    bodyData = ['패스파인더', '패스트파이브', '아몰랑 출근 안 해'];
  }

  return (
    <Wrapper
      isAdminSidebar={isAdminSidebar}
      isManage={router.asPath.includes('/manage')}
    >
      <Table>
        <Header>
          <Row>
            <HeaderContent>
              <Check01 />
            </HeaderContent>
            {headerData.map((el, i) => (
              <HeaderContent key={i}>
                <a>{el}</a>
              </HeaderContent>
            ))}
          </Row>
        </Header>
        <Body>
          <Row className="bodyRow">
            <BodyContent>
              <Check01 />
            </BodyContent>
            {bodyData.map((el, i) => (
              <BodyContent key={i}>
                <span>{el}</span>
              </BodyContent>
            ))}
          </Row>
        </Body>
      </Table>
    </Wrapper>
  );
};

export default ScrollableTable;

const Wrapper = styled.div`
  width: calc(
    100vw - ${(props: IStyle) => (props.isAdminSidebar ? '30rem' : '21.5rem')}
  );
  overflow: scroll auto;
`;

const Table = styled.table`
  margin-bottom: 1rem;
  width: 100%;
`;

const Header = styled.thead`
  width: 100%;
  border-top: 1px solid #d8dfeb;
  border-bottom: 2px solid #d8dfeb;
`;

const Body = styled.tbody`
  border-bottom: 1px solid #d8dfeb;
  th:not(:first-of-type) {
    padding-left: 0.5rem;
  }
`;

const Row = styled.tr`
  width: 100%;

  &.bodyRow:hover {
    background-color: ${styleSet.colors.lightGray};
  }
`;

const HeaderContent = styled.th`
  text-align: left;
  padding: 0.5rem 0.25rem 0.5rem 0;
  min-width: 100px;

  a {
    word-break: keep-all;
    padding: 0.25rem 0.5rem;
    white-space: nowrap;
    cursor: pointer;
    :hover {
      background-color: ${styleSet.colors.lightGray};
    }
  }

  :first-of-type {
    min-width: 65px;
    padding: 1rem 0 1rem 1rem;
  }
`;

const BodyContent = styled.td`
  text-align: left;
  padding: 0.5rem 0.25rem 0.5rem 0.5rem;
  min-width: 100px;

  :first-of-type {
    min-width: 65px;
    padding: 1rem 0 1rem 1rem;
  }
`;
