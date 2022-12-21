import { IScheduleContainerProps, IWeekData } from './schedule.types';
import { v4 } from 'uuid';
import * as S from './schedule.style';
import Btn01 from '../../../commons/button/btn01';
import { styleSet } from '../../../../commons/styles/styleSet';
import ArrowSvg from '../../../commons/svg/arrows';

const Calender = (props: IScheduleContainerProps) => {
  return (
    <>
      <S.FirstWrapper>
        <S.FirstLine>일</S.FirstLine>
        <S.FirstLine>월</S.FirstLine>
        <S.FirstLine>화</S.FirstLine>
        <S.FirstLine>수</S.FirstLine>
        <S.FirstLine>목</S.FirstLine>
        <S.FirstLine>금</S.FirstLine>
        <S.FirstLine>토</S.FirstLine>
      </S.FirstWrapper>
      {props.dateArr?.map((week: IWeekData[], i: number) => (
        <S.WeekWrapper key={v4()}>
          <br />
          {week.map((day: IWeekData, j: number) => {
            if (!day.func.onClick) {
              day.css.color = 'gray';
            }
            return (
              <S.DayWrapper key={v4()} id={`${i + 1}-${j + 1}`} style={day.css}>
                <label style={{ paddingTop: '10px' }}>
                  {day.day.split('-')[2] === '01'
                    ? `${day.day.split('-')[1]}/${day.day.split('-')[2]}`
                    : day.day.split('-')[2]}
                </label>
                <S.DayBox>{props.dayData[i * 7 + (j + 1) - 1]}</S.DayBox>
              </S.DayWrapper>
            );
          })}
        </S.WeekWrapper>
      ))}
    </>
  );
};

const SchedulePresenter = (props: IScheduleContainerProps) => {
  return (
    <>
      <section>
        <S.TopWrapper>
          <S.BtnWrapper>
            <S.ArrowButton onClick={props.MovePrevMonth}>
              <ArrowSvg
                direction={'left'}
                size={'big'}
                color={styleSet.colors.primary}
              />
            </S.ArrowButton>
            <S.ArrowButton onClick={props.MoveNextMonth}>
              <ArrowSvg
                direction={'right'}
                size={'big'}
                color={styleSet.colors.primary}
              />
            </S.ArrowButton>
            <S.DateStyle>{props.today?.format('YYYY년')}</S.DateStyle>
            <S.DateStyle>{props.today?.format('MM월')}</S.DateStyle>
          </S.BtnWrapper>
          <S.BtnWrapper>
            <S.BtnBox>
              <Btn01
                text="휴가일정 생성 요청"
                bdC="none"
                color="white"
                bgC={`${styleSet.colors.subColor02}`}
                onClick={props.onClickCreateVacation}
              />
            </S.BtnBox>
            <S.BtnBox>
              <Btn01
                text="근무일정 생성 요청"
                bdC="none"
                color="white"
                bgC={`${styleSet.colors.primary}`}
                onClick={props.onClickCreateWorking}
              />
            </S.BtnBox>
            <S.WorkingBtnBox>
              <Btn01
                text="근무일정 수정 요청"
                bgC={`${styleSet.colors.white}`}
                bdC={`${styleSet.colors.primary}`}
                color={`${styleSet.colors.primary}`}
              />
            </S.WorkingBtnBox>
          </S.BtnWrapper>
        </S.TopWrapper>

        <div>
          <Calender dayData={props.dayData} dateArr={props.dateArr} />
        </div>
      </section>
    </>
  );
};

export default SchedulePresenter;
