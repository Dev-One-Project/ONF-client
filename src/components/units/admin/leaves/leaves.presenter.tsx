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
          <span>
            <Check01 register={props.register} />
          </span>
          <span>직원</span>
          <span>휴가 기간</span>
          <span>휴가 그룹</span>
          <span>휴가 유형</span>
          <span>유급 시간</span>
          <span>차감 일수</span>
          <span>사유</span>
        </S.Ul>
        <S.Li>
          <span>
            <Check01 register={props.register} />
          </span>
          <span>에스쿱스</span>
          <span>12월 5일 (월) 10:00 - 14:00</span>
          <span>연차휴가</span>
          <span>반차</span>
          <span>4h</span>
          <span>0.5일</span>
          <span>매롱</span>
        </S.Li>
        {/* 맵돌리기 */}
        <S.Li>
          <span>
            <Check01 register={props.register} />
          </span>
          <span>디에잇</span>
          <span>12월 5일 (월) 10:00 - 14:00</span>
          <span>연차휴가</span>
          <span>반차</span>
          <span>4h</span>
          <span>0.5일</span>
          <span>매롱</span>
        </S.Li>
        <S.Li>
          <span>
            <Check01 register={props.register} />
          </span>
          <span>준</span>
          <span>12월 5일 (월) 10:00 - 14:00</span>
          <span>연차휴가</span>
          <span>반차</span>
          <span>4h</span>
          <span>0.5일</span>
          <span>매롱</span>
        </S.Li>
        <S.Li>
          <span>
            <Check01 register={props.register} />
          </span>
          <span>조슈아</span>
          <span>12월 5일 (월) 10:00 - 14:00</span>
          <span>연차휴가</span>
          <span>반차</span>
          <span>4h</span>
          <span>0.5일</span>
          <span>매롱</span>
        </S.Li>
        <S.Li>
          <span>
            <Check01 register={props.register} />
          </span>
          <span>정한</span>
          <span>12월 5일 (월) 10:00 - 14:00</span>
          <span>연차휴가</span>
          <span>반차</span>
          <span>4h</span>
          <span>0.5일</span>
          <span>매롱</span>
        </S.Li>
        <S.Li>
          <span>
            <Check01 register={props.register} />
          </span>
          <span>호시</span>
          <span>12월 5일 (월) 10:00 - 14:00</span>
          <span>연차휴가</span>
          <span>반차</span>
          <span>4h</span>
          <span>0.5일</span>
          <span>매롱</span>
        </S.Li>
        {/* 여기까지 */}
      </S.UlWrapper>
    </S.Container>
  );
};

export default LeavesPresenter;
