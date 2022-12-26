import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import { isAdminSidebarState } from '../../../commons/store';
import { styleSet } from '../../../commons/styles/styleSet';
import Check01 from '../input/check01';

interface IScrollableTableProps {
  tab: string;
  isLocation?: boolean;
}

interface IStyle {
  isManage: boolean;
  isAdminSidebar?: boolean;
}

let headerData: string[] = [];
let bodyData: Array<string | JSX.Element> = [];

const ScrollableTable = (props: IScrollableTableProps) => {
  const [checkedList, setCheckedList] = useState<Array<string | JSX.Element>>(
    [],
  );
  const router = useRouter();
  const [isAdminSidebar] = useRecoilState(isAdminSidebarState);

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
    ];
  } else if (props.tab === '지점') {
    if (props.isLocation) {
      headerData = ['출퇴근 장소', '근무지 주소', '좌표', 'WiFi', '메모'];
      bodyData = [
        '뭐 이딴 기능이',
        '다있냐 웃기네',
        '허 참 나',
        '아몰라',
        '안할거야~',
      ];
    } else {
      headerData = ['지점명', '출퇴근 장소들', '메모'];
      bodyData = ['패스파인더', '패스트파이브', '아몰랑 출근 안 해'];
    }
  } else if (props.tab === '직무') {
    headerData = ['직무명', '색깔', '메모'];
    bodyData = [
      '데브옵스',
      <div
        key="key"
        style={{
          width: '25px',
          height: '25px',
          borderRadius: '5px',
          backgroundColor: 'blue',
          marginLeft: '2px',
        }}
      ></div>,
      '배포낄낄',
    ];
  } else if (props.tab === '근로 정보') {
    headerData = [
      '근로정보명',
      '시급',
      '소정근로요일',
      '주휴요일',
      '소정근로규칙',
      '최대근로규칙',
      '메모',
    ];
    bodyData = [
      '일반근무',
      '₩ 9,160',
      '월, 화, 수, 목, 금',
      '일',
      '1주 40시간',
      '1주 52시간',
      '최저시급 낄낄',
    ];
  } else if (props.tab === '근무일정 유형') {
    headerData = [
      '근무일정 유형명',
      '색깔',
      '연장근무일정 여부',
      '휴일근무 미적용 여부',
      '메모',
    ];
    bodyData = [
      '외근',
      <div
        key="key"
        style={{
          width: '25px',
          height: '25px',
          borderRadius: '5px',
          backgroundColor: 'tomato',
          marginLeft: '2px',
        }}
      ></div>,
      'X',
      'O',
      '하위하위',
    ];
  } else if (props.tab === '근무일정 템플릿') {
    headerData = [
      '템플릿명',
      '시간',
      '근무일정 유형',
      '지점',
      '직무',
      '휴게시간',
      '색깔',
      '메모',
    ];
    bodyData = [
      '오전근무',
      '09:00 - 13:00',
      '재택근무',
      '패파',
      '프론트엔드',
      '자동 휴게시간',
      <div
        key="key"
        style={{
          width: '25px',
          height: '25px',
          borderRadius: '5px',
          backgroundColor: 'gray',
          marginLeft: '2px',
        }}
      ></div>,
      '히히',
    ];
  }

  const onCheckedAll = useCallback((checked) => {
    if (checked) {
      const checkedListArray: Array<JSX.Element | string> = [];
      bodyData.forEach((el) => checkedListArray.push(el));
      setCheckedList(checkedListArray);
    } else setCheckedList([]);
  }, []); // 외부에서 들어오는 데이터 props.data

  const onCheckedElement = useCallback(
    (checked, list) => {
      if (checked) setCheckedList([...checkedList, list]);
      else setCheckedList(checkedList.filter((el) => el !== list));
    },
    [checkedList],
  );

  return (
    <Wrapper
      isAdminSidebar={isAdminSidebar}
      isManage={router.asPath.includes('/manage')}
    >
      <Table>
        <Header>
          <Row>
            <HeaderContent>
              <Check01
                checked={
                  checkedList.length === 0
                    ? false
                    : checkedList.length === bodyData.length
                }
                onChange={(event) => onCheckedAll(event.target.checked)}
              />
            </HeaderContent>
            {headerData.map((el, i) => (
              <HeaderContent key={i}>
                <a>{el}</a>
              </HeaderContent>
            ))}
          </Row>
        </Header>
        <Body>
          {new Array(3).fill(1).map((el, index) => (
            <Row key={index} className="bodyRow">
              <BodyContent>
                <Check01
                  checked={checkedList.includes(el)}
                  onChange={(event) =>
                    onCheckedElement(event.target.checked, el)
                  }
                />
              </BodyContent>
              {bodyData.map((el, i) => (
                <BodyContent key={i}>
                  <>{el}</>
                </BodyContent>
              ))}
            </Row>
          ))}
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
  th:not(:first-of-type) {
    padding-left: 0.5rem;
  }
`;

const Row = styled.tr`
  width: 100%;
  border-bottom: 1px solid #d8dfeb;

  &.bodyRow:hover {
    background-color: ${styleSet.colors.lightGray};
  }
`;

const HeaderContent = styled.th`
  text-align: left;
  padding: 0.5rem 0.25rem 0.5rem 0;
  min-width: 100px;

  a {
    font-family: ${styleSet.fonts.B};
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
