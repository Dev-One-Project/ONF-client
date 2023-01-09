import * as S from './calendar.styles';
import { ICalendarContainerProps, IWeekData } from './calendar.types';
import { v4 } from 'uuid';
import ArrowSvg from '../../svg/arrows';
import { styleSet } from '../../../../commons/styles/styleSet';

const Calendar = (props: ICalendarContainerProps) => {
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
            // if (!day.func.onClick) {
            //   day.css.color = 'gray';
            // }
            const css = {
              backgroundColor: day.option ? 'white' : 'lightGray',
            };
            if (props.selected.includes(day.day)) css.backgroundColor = 'blue';
            return (
              <S.DayWrapper
                key={v4()}
                id={String(day.day)}
                style={css}
                onClick={props.onClickElement}
              >
                <label style={{ paddingTop: '10px' }}>
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
      <section>
        <S.BtnWrapper>
          <S.ArrowButton onClick={props.MovePrevMonth}>
            <ArrowSvg
              direction={'left'}
              size={'big'}
              color={styleSet.colors.primary}
            />
          </S.ArrowButton>
          <S.YearStyle>{props.today?.format('YYYY년')}</S.YearStyle>
          <S.DateStyle>{props.today?.format('MM월')}</S.DateStyle>
          <S.ArrowButton onClick={props.MoveNextMonth}>
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
        />
      </section>
    </>
  );
};

export default CalendarPresenter;
