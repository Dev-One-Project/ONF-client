import * as S from './calendar.styles';
import { ICalendarContainerProps, IWeekData } from './calendar.types';
import { v4 } from 'uuid';
import ArrowSvg from '../../svg/arrows';
import { styleSet } from '../../../../commons/styles/styleSet';

const Calendar = (props: ICalendarContainerProps) => {
  return (
    <>
      <S.FirstWrapper>
        <S.FirstLine daySize={props.daySize}>일</S.FirstLine>
        <S.FirstLine daySize={props.daySize}>월</S.FirstLine>
        <S.FirstLine daySize={props.daySize}>화</S.FirstLine>
        <S.FirstLine daySize={props.daySize}>수</S.FirstLine>
        <S.FirstLine daySize={props.daySize}>목</S.FirstLine>
        <S.FirstLine daySize={props.daySize}>금</S.FirstLine>
        <S.FirstLine daySize={props.daySize}>토</S.FirstLine>
      </S.FirstWrapper>
      {props.dateArr?.map((week: IWeekData[], i: number) => (
        <S.WeekWrapper key={v4()} elementHeight={props.elementHeight}>
          <br />
          {week.map((day: IWeekData, j: number) => {
            let bgC = day.option
              ? styleSet.colors.white
              : styleSet.colors.lightGray;
            if (props.selected.includes(day.day))
              bgC = props.selectedColor || styleSet.colors.subColor05;
            return (
              <S.DayWrapper
                key={v4()}
                id={String(day.day)}
                selectedColor={bgC}
                onClick={props.onClickElement}
              >
                <label style={{ paddingTop: '10px', height: '100%' }}>
                  {day.day.split('-')[2] === '01'
                    ? `${day.day.split('-')[1]}/${day.day.split('-')[2]}`
                    : day.day.split('-')[2]}
                </label>
              </S.DayWrapper>
            );
          })}
        </S.WeekWrapper>
      ))}
    </>
  );
};

const CalendarPresenter = (props: ICalendarContainerProps) => {
  console.log(props.today);
  return (
    <>
      <section style={{ width: props.width || '100%' }}>
        <S.BtnWrapper>
          <S.ArrowButton type="button" onClick={props.MovePrevMonth}>
            <ArrowSvg
              direction={'left'}
              size={'big'}
              color={styleSet.colors.primary}
            />
          </S.ArrowButton>
          <S.YearStyle titleSize={props.titleSize}>
            {props.today?.format('YYYY년')}
          </S.YearStyle>
          <S.DateStyle titleSize={props.titleSize}>
            {props.today?.format('MM월')}
          </S.DateStyle>
          <S.ArrowButton type="button" onClick={props.MoveNextMonth}>
            <ArrowSvg
              direction={'right'}
              size={'big'}
              color={styleSet.colors.primary}
            />
          </S.ArrowButton>
        </S.BtnWrapper>
        <Calendar
          dateArr={props.dateArr}
          selected={props.selected}
          onClickElement={props.onClickElement}
          elementHeight={props.elementHeight}
          selectedColor={props.selectedColor}
          daySize={props.daySize}
        />
      </section>
    </>
  );
};

export default CalendarPresenter;
