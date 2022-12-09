import * as S from './attendancesList.styles';
import Check01 from '../../../../commons/input/check01';
import { styleSet } from '../../../../../commons/styles/styleSet';
import Btn01 from '../../../../commons/button/btn01';
import { DatePicker, Space } from 'antd';

const AttendancesListPresenter = (props) => {
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
            <Space direction="vertical">
              <DatePicker.RangePicker
                style={{ width: '244px', borderRadius: '2px' }}
              />
            </Space>
            <input placeholder="selectBox111" />
          </S.OptSelect>
          <input placeholder="selectBox222" />
        </S.OptBox>
        <S.OptBox>
          <S.OptSelect>
            <Btn01 text={'출퇴근기록 수정'} bdC={styleSet.colors.gray} />
            <Btn01
              text={'삭제'}
              bdC={styleSet.colors.gray}
              color={styleSet.colors.fail}
            />
          </S.OptSelect>
        </S.OptBox>
      </S.OptWrapper>

      <S.UlWrapper>
        <S.Ul>
          <li>
            <Check01 register={props.register} />
          </li>
          <li>직원</li>
          <li>날짜</li>
          <li>근무시간</li>
          <li>근무일정</li>
          <li>조직</li>
          <li>직무</li>
          <li>출근 장소</li>
          <li>퇴근 장소</li>
          <li>근무노트</li>
          <li>휴게시간</li>
          <li>총 시간</li>
          <li>근무일정 오차범위</li>
          <li>출근시간 오차범위</li>
          <li>퇴근시간 오차범위</li>
        </S.Ul>
        <S.Ul>
          <li>
            <Check01 register={props.register} />
          </li>
          <li>에스쿱스</li>
          <li>12/05 (월)</li>
          <li>10:05 - 18:55</li>
          <li>10:00 - 19:00</li>
          <li>Dev.One</li>
          <li>팀원</li>
          <li>패스트파이브</li>
          <li>패스트파이브</li>
          <li>네모</li>
          <li>1시간 12분</li>
          <li>3시간 56분</li>
          <li>- 5시간 4분</li>
          <li>- 9분</li>
          <li>- 4시간 54분</li>
        </S.Ul>
      </S.UlWrapper>
    </S.Container>
  );
};

export default AttendancesListPresenter;
