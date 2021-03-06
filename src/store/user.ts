import { atom } from 'recoil';

type User = {
  id: string;
  name: string;
  avatar: string;
  contact: string;
};

export const userState = atom({
  key: 'user',
  default: {} as Partial<User>,
});
