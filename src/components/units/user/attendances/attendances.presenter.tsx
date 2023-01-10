import { ExclamationCircleOutlined } from '@ant-design/icons';
import * as S from './attendances.styles';
import { IUserAttenancesProps } from './attendances.types';

const AttendancesPresenter = (props: IUserAttenancesProps) => {
  return (
    <>
      <S.Container>
        <S.Notice>
          <li>날짜</li>
          <li>근무시간</li>
          <li>근무일정</li>
          <li>조직</li>
          <li>직무</li>
          <li>근무노트</li>
          <li>휴게시간</li>
          <li>총 시간</li>
          <li>근무일정 오차범위</li>
          <li>출근시간 오차범위</li>
          <li>퇴근시간 오차범위</li>
          <li>확정됨</li>
        </S.Notice>

        <S.NoticeList>
          <li>12/29 (목)</li>
          <li>09:20 -</li>
          <li>
            10:00 -<span></span>19:00
          </li>
          <li>Dev.One</li>
          <li>팀원</li>
          <li></li>
          <li></li>
          <li>9시간 9분</li>
          <li>+ 9분</li>
          <li>+ 39분</li>
          <li>- 39분</li>
          <li>X</li>
          {/* {props.modal && <RequestModal />} */}
          {/* 회원가입 스타일 수정 , 헤더 fetchAccount 추가 ,사이드바 체크박스 추가 */}
        </S.NoticeList>

        <S.NoticeList>
          <li>12/29 (목)</li>
          <li>
            09:20 -<span></span>19:00
          </li>
          <li>
            10:00 -<span></span>19:00
          </li>
          <li>Dev.One</li>
          <li>팀원</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li>X</li>
        </S.NoticeList>

        <S.NoticeList>
          <li>12/29 (목)</li>
          <li>
            09:20 - <ExclamationCircleOutlined />
          </li>
          <li>결근</li>
          <li>Dev.One</li>
          <li>팀원</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li>X</li>
        </S.NoticeList>

        <S.NoticeList>
          <li>12/29 (목)</li>
          <li>
            09:20 - <ExclamationCircleOutlined />
          </li>
          <li>결근</li>
          <li>Dev.One</li>
          <li>팀원</li>
          <li></li>
          <li></li>
          <li>128시간 51분</li>
          <li>+ 119시간 51분</li>
          <li>- 4시간 3분</li>
          <li>+ 75시간 54분</li>
          <li>X</li>
        </S.NoticeList>
      </S.Container>
    </>
  );
};
export default AttendancesPresenter;
