import moment from "moment";
export const second = (num: number) => num * 1000;

export const getDaysFrom = (date) => {
  return moment(date).startOf('day');
};
