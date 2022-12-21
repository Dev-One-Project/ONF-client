import { styleSet } from '../../../../../commons/styles/styleSet';
import Btn01 from '../../../../commons/button/btn01';
import Switch01 from '../../../../commons/switch/switch01';
import * as S from './attendancesCalendar.styles';
import { IAttendancesCalendarPresenterProps } from './attendancesCalendar.types';
import { v4 as uuidV4 } from 'uuid';
import Select01 from '../../../../commons/input/select01';

const AttendancesCalendarPresenter = (
  props: IAttendancesCalendarPresenterProps,
) => {
  return (
    <S.Container>
      <S.TopWrapper>
        <S.H1>출퇴근기록 관리</S.H1>
        <Btn01
          text={'출퇴근기록 생성'}
          color={styleSet.colors.white}
          bgC={styleSet.colors.primary}
        />
      </S.TopWrapper>

      <S.OptWrapper>
        <S.OptBox>
          <S.OptSelect>
            <S.Input placeholder={props.month} />
            <S.Input placeholder="필터" />
          </S.OptSelect>
          <Select01
            data={['이다은', '바보', '멍충이']}
            role="organization"
            left
          />
        </S.OptBox>
        <S.OptBox>
          <S.OptSelect>
            <Switch01 text={'휴가 관리'} />
          </S.OptSelect>
          <S.OptSelect>
            <S.Block></S.Block>
            <S.Span>휴가</S.Span>
          </S.OptSelect>
        </S.OptBox>
      </S.OptWrapper>

      <S.UlWrapper>
        <S.DateUl>
          <div>공백</div>
          {props.monthArr.map((el) => (
            <li key={uuidV4()}>{el}</li>
          ))}
          <div>합계</div>
        </S.DateUl>
        <S.DateUl>
          <div>이다은</div>
          {props.monthArr.map((el) => (
            <li key={uuidV4()}>{el}</li>
          ))}
          <div>{props.monthArr.length}</div>
        </S.DateUl>
      </S.UlWrapper>
    </S.Container>
  );
};

export default AttendancesCalendarPresenter;
