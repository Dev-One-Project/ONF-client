import dayToString from './dayToString';

export const getDate = (createdAt: string) => {
  const date = new Date(createdAt);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}.${mm}.${dd}`;
};

export const getStaticDateStr = (rawDate: Date) => {
  const date = new Date(rawDate);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

export const getDateKoreanStr = (date: Date) => {
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const day = dayToString(date.getDay());
  return `${mm}월 ${dd}일, ${day}`;
};

export const getTimeStr = (start: string, end: string) => {
  const getTimeStr = (date: Date) => {
    const hour = date.getHours().toString();
    const minute = date.getMinutes().toString();
    let timeStr = '';
    if (hour.length !== 2) timeStr += '0';
    timeStr += hour + ':';
    if (minute.length !== 2) timeStr += '0';
    timeStr += minute;
    return timeStr;
  };
  const startStr = getTimeStr(new Date(start));
  const endStr = getTimeStr(new Date(end));
  return startStr + ' - ' + endStr;
};
