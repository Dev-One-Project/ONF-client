import * as S from './request.styles';
import { DatePicker } from 'antd';
import Select01 from '../../../commons/input/select01';
import Check01 from '../../../commons/input/check01';
import Btn01 from '../../../commons/button/btn01';
import { styleSet } from '../../../../commons/styles/styleSet';
const { RangePicker } = DatePicker;
const selectArray = ['승인이 필요한 요청들', '내 요청들', '완료된 요청들'];

const RequestPresenter = () => {
  return (
    <S.Container>
      <S.TopWrapper>
        <S.H1>요청 내역</S.H1>
      </S.TopWrapper>
      <S.TopWrapper>
        <div>
          <RangePicker />
          <Select01 data={selectArray} />
        </div>
        <span>총 요청 수 : 0</span>
      </S.TopWrapper>
      <S.Ul>
        <li>
          <div>
            <Check01 />
          </div>
          <span>요청 종류</span>
          <span>보낸 사람</span>
          <span>팀</span>
          <span>요청사항</span>
          <span>요청 사유</span>
          <span>상태</span>
          <span>승인권자 노트</span>
          <span>신청일자</span>
          <span>관리</span>
        </li>
        <li>
          <div>
            <Check01 />
          </div>
          <span>휴가 생성</span>
          <span>이상현</span>
          <span>프론트엔드</span>
          <span>12월 9일 (금) / 연차(8h, 0일)</span>
          <span>내맘이야~</span>
          <span>승인</span>
          <span>승인했다아~</span>
          <span>12/08 15:43</span>
          <span>
            <Btn01
              text="승인"
              bdC={`${styleSet.colors.primary}`}
              color={`${styleSet.colors.primary}`}
            />
            <Btn01
              text="거절"
              bdC={`${styleSet.colors.fail}`}
              color={`${styleSet.colors.fail}`}
            />
          </span>
        </li>
      </S.Ul>
    </S.Container>
  );
};

export default RequestPresenter;
