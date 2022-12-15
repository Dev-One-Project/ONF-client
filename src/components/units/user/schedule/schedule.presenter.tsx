import { IScheduleContainerProps, IWeekData } from './schedule.types';
import { v4 } from 'uuid';
import * as S from './schedule.style';

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
                {/* <S.DayBox>{props.dayData[i * 7 + (j + 1) - 1]}</S.DayBox> */}
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
      <div>
        <Calender dateArr={props.dateArr} />
      </div>
    </>
  );
};

export default SchedulePresenter;
