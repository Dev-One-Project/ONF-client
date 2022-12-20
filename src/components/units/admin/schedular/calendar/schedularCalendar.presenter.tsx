import { styleSet } from '../../../../../commons/styles/styleSet';
import Btn01 from '../../../../commons/button/btn01';
import Select01 from '../../../../commons/input/select01';
import ArrowSvg from '../../../../commons/svg/arrows';
import Switch01 from '../../../../commons/switch/switch01';
import * as S from './schedularCalendar.styles';
// import { v4 as uuidV4 } from 'uuid';

const SchedularCalendarPresenter = (props: any) => {
  return (
    <S.Container>
      <S.TopWrapper>
        <S.TopTitleBox>
          <S.H1>근무일정</S.H1>
          <Switch01 text={'휴가 관리'} />
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
            <S.ArrowButton>
              <ArrowSvg
                direction={'left'}
                size={'big'}
                color={styleSet.colors.primary}
              />
            </S.ArrowButton>
            <S.ArrowButton>
              <ArrowSvg
                direction={'right'}
                size={'big'}
                color={styleSet.colors.primary}
              />
            </S.ArrowButton>
            <S.FuncButton>오늘</S.FuncButton>
            <S.DateLabel>2022년 12월</S.DateLabel>
          </S.OptSectionWrapper>
          <S.OptSectionWrapper>
            <Select01 data={['이다은', '바보', '멍충이']} role="organization" />
          </S.OptSectionWrapper>
        </S.OptBox>
        <S.OptBox>
          <S.OptSectionWrapper>
            <Select01 data={['이다은', '바보', '멍충이']} role="duty" />
            <S.FuncButton>모두 펼치기</S.FuncButton>
          </S.OptSectionWrapper>
        </S.OptBox>
      </S.OptWrapper>

      <S.UlWrapper></S.UlWrapper>
    </S.Container>
  );
};

export default SchedularCalendarPresenter;
