import { getDateSlash, getTimeStr } from '../../../../commons/utils/getDate';
import * as S from './attendances.styles';

const AttendancesPresenter = () => {
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
        </S.Notice>
        {props.data?.fetchMemberWorkChecks.map((list) => (
          <S.NoticeList key={list.id}>
            <li>{getDateSlash(new Date(list.workDay))}</li>
            <li>{getTimeStr(list.workingTime, list.quittingTime)}</li>
            <li>
              {list.schedule
                ? getTimeStr(
                    list.schedule?.startWorkTime ?? '',
                    list.schedule?.endWorkTime ?? '',
                  )
                : '무일정 근무'}
            </li>
            <li>{list?.organization?.name}</li>
            <li>{list?.roleCategory?.name}</li>
            <li>{list?.workCheckMemo}</li>
            <li>{'60분'}</li>
            <li>
              {new Date(list?.quittingTime).getHours() -
                new Date(list?.workingTime).getHours()}
              시간
            </li>
            <li>{list.schedule ? '근무오차' : ''}</li>
            <li>{list.schedule ? '출근오차' : ''}</li>
            <li>{list.schedule ? '퇴근오차' : ''}</li>
          </S.NoticeList>
        ))}
      </S.Container>
    </>
  );
};
export default AttendancesPresenter;
