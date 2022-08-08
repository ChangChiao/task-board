import { atom } from 'recoil';

type User = {
  _id: string;
  name: string;
  avatar: string;
  contact: string;
  isVip: boolean;
};

export const userState = atom({
  key: 'user',
  default: {} as Partial<User>,
});
