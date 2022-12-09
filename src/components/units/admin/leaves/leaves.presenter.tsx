import { DatePicker, Space } from 'antd';
import { styleSet } from '../../../../commons/styles/styleSet';
import Btn01 from '../../../commons/button/btn01';
import Check01 from '../../../commons/input/check01';
import * as S from './leaves.styles';
import { ILeavesPresenterProps } from './leaves.types';

const LeavesPresenter = (props: ILeavesPresenterProps) => {
  return (
    <S.Container>
      <S.TopWrapper>
        <S.H1>휴가 관리</S.H1>
        <Btn01
          text={'휴가 관리'}
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
            <Btn01 text={'휴가 유형 변경'} bdC={styleSet.colors.gray} />
            <Btn01
              text={'모두 삭제'}
              bdC={styleSet.colors.gray}
              color={styleSet.colors.fail}
            />
          </S.OptSelect>
          <S.SelectBox>목록</S.SelectBox>
        </S.OptBox>
      </S.OptWrapper>

      <S.UlWrapper>
        <S.Ul>
          <li>
            <Check01 register={props.register} />
          </li>
          <li>직원</li>
          <li>휴가 기간</li>
          <li>휴가 그룹</li>
          <li>휴가 유형</li>
          <li>유급 시간</li>
          <li>차감 일수</li>
          <li>사유</li>
        </S.Ul>
        <S.Ul>
          <li>
            <Check01 register={props.register} />
          </li>
          <li>에스쿱스</li>
          <li>12월 5일 (월) 10:00 - 14:00</li>
          <li>연차휴가</li>
          <li>반차</li>
          <li>4h</li>
          <li>0.5일</li>
          <li>매롱</li>
        </S.Ul>
      </S.UlWrapper>
    </S.Container>
  );
};

export default LeavesPresenter;
