import CalendarElementPresenter from './calendarElement.presenter';
import { ICalendarElementProps } from './calendarElement.types';

const CalendarElementContainer = (props: ICalendarElementProps) => {
  return <CalendarElementPresenter {...props} />;
};
export default CalendarElementContainer;
