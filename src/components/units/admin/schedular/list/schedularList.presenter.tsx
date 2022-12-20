import * as S from './schedularList.styles';
import { styleSet } from '../../../../../commons/styles/styleSet';
import Btn01 from '../../../../commons/button/btn01';
import Select01 from '../../../../commons/input/select01';
import { DatePicker, Space } from 'antd';
import { ISchedularListProps } from './schedularList.types';

const SchedularListPresenter = (props: ISchedularListProps) => {
  return (
    <S.Container>
      <S.TopWrapper>
        <S.TopTitleBox>
          <S.H1>근무일정</S.H1>
        </S.TopTitleBox>
        <Btn01
          text={'근무일정 추가하기'}
          bgC={styleSet.colors.primary}
          color={styleSet.colors.white}
        />
      </S.TopWrapper>

      <S.OptWrapper>
        <S.OptBox>
          <S.OptSectionWrapper>
            <Space direction="vertical">
              <DatePicker.RangePicker
                style={{ width: '244px', borderRadius: '2px' }}
              />
            </Space>
            {/* 필터 추가 */}
          </S.OptSectionWrapper>
          <S.OptSectionWrapper>
            <Select01 data={['이다은', '바보', '멍충이']} role="organization" />
          </S.OptSectionWrapper>
        </S.OptBox>
        <S.OptBox>
          <S.OptSectionWrapper>
            <S.Label>총 시간 : 000h</S.Label>
          </S.OptSectionWrapper>
        </S.OptBox>
      </S.OptWrapper>

      <S.UlWrapper>여기에 목록 넣자</S.UlWrapper>
    </S.Container>
  );
};

export default SchedularListPresenter;
