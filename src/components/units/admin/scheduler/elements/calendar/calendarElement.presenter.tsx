import { ICalendarElementProps } from './calendarElement.types';
import * as S from './calendarElement.styles';

const CalendarElementPresenter = (props: ICalendarElementProps) => {
  return (
    <>
      <S.ElementContent
        id={props.id}
        onClick={props.onClick}
        color={props.color}
      >
        <S.DetailText>
          {props.startTime} - {props.endTime}{' '}
          {props.workType ? `[${props.workType}]` : ''}
        </S.DetailText>
        <S.CompanyInfoText>{props.companyName}</S.CompanyInfoText>
      </S.ElementContent>
    </>
  );
};

export default CalendarElementPresenter;
