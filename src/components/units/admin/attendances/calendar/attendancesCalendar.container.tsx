import AttendancesCalendarPresenter from './attendancesCalendar.presenter';

const AttendancesCalendarContainer = () => {
  const monthArr = [];
  const date = new Date();
  console.log(Intl.DateTimeFormat('ko-KR', { dateStyle: 'full' }).format(date));
  const days = new Date(date.getFullYear(), date.getMonth() + 3, 0).getDate();

  const month = `${date.getFullYear()}-${date.getMonth() + 1}`;

  for (let i = 1; i <= days; i++) {
    monthArr.push(i);
  }

  return <AttendancesCalendarPresenter monthArr={monthArr} month={month} />;
};

export default AttendancesCalendarContainer;
