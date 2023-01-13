import moment from 'moment';
import React, { useMemo, useState } from 'react';
import CalendarPresenter from './calendar.presenter';
import { ICalendarProps, IWeekData } from './calendar.types';

const newWeekData = (days: string, i: number, option: boolean): IWeekData => {
  return {
    index: i,
    day: days,
    work: '',
    tardy: '',
    option,
  };
};

const CalendarContainer = (props: ICalendarProps) => {
  const [today, setToday] = useState(moment());
  const [dateArr, setDateArr] = useState<IWeekData[][]>([]);

  const MoveNextMonth = () => {
    setToday(today.clone().add(1, 'month'));
  };

  const MovePrevMonth = () => {
    setToday(today.clone().subtract(1, 'month'));
  };

  const todayFirstWeek = today.clone().startOf('month').week(); // 이번달의 첫째 주
  const todayLastWeek =
    today.clone().endOf('month').week() === 1
      ? 53
      : today.clone().endOf('month').week(); // 이번달의 마지막주

  useMemo(() => {
    let index = 0; // 고유 인덱스 번호
    const result: IWeekData[][] = []; // 이번달 배열
    for (let week = todayFirstWeek; week <= todayLastWeek; week++) {
      const weekArray: IWeekData[] = []; // 주별로 담는 배열
      for (let i = 0; i < 7; i++) {
        // 일주일 계산
        const days = today
          .clone()
          .startOf('year')
          .week(week)
          .startOf('week')
          .add(i, 'day')
          .format('YYYY-MM-DD'); // 그날의 시간 정보
        if (days.split('-')[1] !== today.format('MM')) {
          // 현재 월이 아닌경우
          weekArray.push(newWeekData(days, index, false));
        } else {
          weekArray.push(newWeekData(days, index, true));
        }
        index++;
      }
      result.push(weekArray);
    }
    setDateArr(result);
  }, [today, todayFirstWeek, todayLastWeek]);

  const onClickElement = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (props.selected.includes(e.currentTarget.id)) {
      props.setSelected(
        props.selected.filter((date) => date !== e.currentTarget.id),
      );
    } else {
      props.setSelected(props.selected.concat(e.currentTarget.id));
    }
  };

  console.log(props.selected);

  return (
    <CalendarPresenter
      selectedColor={props.selectedColor}
      width={props.width}
      dateArr={dateArr}
      MoveNextMonth={MoveNextMonth}
      MovePrevMonth={MovePrevMonth}
      today={today}
      selected={props.selected}
      onClickElement={onClickElement}
      elementHeight={props.elementHeight}
      daySize={props.daySize}
      titleSize={props.titleSize}
    />
  );
};

export default CalendarContainer;
