import { DateTime } from 'luxon';

export const second = (num: number) => num * 1000;

export const formateTime = (date: string) => {
  const time = DateTime.fromISO(date);
  return time.toLocaleString(DateTime.DATETIME_MED);
};
