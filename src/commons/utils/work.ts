import moment from 'moment';

export const getRestStr = (start: string, end: string) => {
  const startMoment = moment(start);
  const endMoment = moment(end);
  const workHour = endMoment.diff(startMoment, 'hours');
  const rest = `${Math.floor(workHour / 4.5) * 0.5}h`;
  return rest;
};

export const getWorkHourStr = (start: string, end: string) => {
  const startMoment = moment(start);
  const endMoment = moment(end);
  const workHour = `${endMoment.diff(startMoment, 'hours')}h`;
  return workHour;
};

export const getRest = (start: string, end: string) => {
  const startMoment = moment(start);
  const endMoment = moment(end);
  const workHour = endMoment.diff(startMoment, 'hours');
  const rest = Math.floor(workHour / 4.5) * 0.5;
  return rest;
};

export const getWorkHour = (start: string, end: string) => {
  const startMoment = moment(start);
  const endMoment = moment(end);
  const workHour = endMoment.diff(startMoment, 'hours');
  return workHour;
};
