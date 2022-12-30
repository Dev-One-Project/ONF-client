export const getDate = (createdAt: string) => {
  const date = new Date(createdAt);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}.${mm}.${dd}`;
};

export const getStaticDateStr = (date: Date) => {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
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
