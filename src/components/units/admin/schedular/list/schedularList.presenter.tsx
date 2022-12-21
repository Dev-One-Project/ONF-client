import * as S from './schedularList.styles';
import { styleSet } from '../../../../../commons/styles/styleSet';
import Btn01 from '../../../../commons/button/btn01';
import Select01 from '../../../../commons/input/select01';
import { DatePicker, Space } from 'antd';
import { ISchedularListProps } from './schedularList.types';
import Check01 from '../../../../commons/input/check01';

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

      <S.UlWrapper>
        <S.ListHeaderWrapper>
          <S.List>
            <Check01 />
            <S.ListHeaderContent>직원</S.ListHeaderContent>
            <S.ListHeaderContent>날짜</S.ListHeaderContent>
            <S.ListHeaderContent>일정시간</S.ListHeaderContent>
            <S.ListHeaderContent>근무일정 유형</S.ListHeaderContent>
            <S.ListHeaderContent>조직</S.ListHeaderContent>
            <S.ListHeaderContent>직무</S.ListHeaderContent>
            <S.ListHeaderContent>근무일정 템플릿</S.ListHeaderContent>
            <S.ListHeaderContent>일정노트</S.ListHeaderContent>
            <S.ListHeaderContent>휴게시간</S.ListHeaderContent>
            <S.ListHeaderContent>총시간</S.ListHeaderContent>
          </S.List>
        </S.ListHeaderWrapper>
        {/* TOOD: need type declaration */}
        {props.data?.map((el: any) => (
          <S.ListBodyWrapper key={el.index}>
            <S.List>
              <Check01 />
              <S.ListBodyContent>{el.name}</S.ListBodyContent>
              <S.ListBodyContent>{el.date}</S.ListBodyContent>
              <S.ListBodyContent>{el.time}</S.ListBodyContent>
              <S.ListBodyContent>{el.type}</S.ListBodyContent>
              <S.ListBodyContent>{el.organization}</S.ListBodyContent>
              <S.ListBodyContent>{el.job}</S.ListBodyContent>
              <S.ListBodyContent>{el.template}</S.ListBodyContent>
              <S.ListBodyContent>{el.note}</S.ListBodyContent>
              <S.ListBodyContent>{el.restTime}</S.ListBodyContent>
              <S.ListBodyContent>{el.totalTime}</S.ListBodyContent>
            </S.List>
          </S.ListBodyWrapper>
        ))}
      </S.UlWrapper>
    </S.Container>
  );
};

export default SchedularListPresenter;
