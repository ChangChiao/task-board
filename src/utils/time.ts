import moment from 'moment';

export const second = (num: number) => num * 1000;

export const getDaysFrom = (date: string) => {
  // return moment(date).fromNow(true);
  return moment(date).format('YYYY/MM/DD HH:mm');
};

export const formateTime = (time: string) => {
  return moment(time).format('HH:mm');
};
