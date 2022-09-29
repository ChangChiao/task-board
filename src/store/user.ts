import { atom, selector } from 'recoil';

import { getUser } from '../utils/http/user';

type User = {
  id: string;
  name: string;
  avatar: string;
  contact: string;
  isVip: boolean;
};

export const userState = atom({
  key: 'user',
  default: {} as Partial<User>,
});

export const userInfoQuery = selector({
  key: 'userInfo',
  get: async () => {
    const response = await getUser();
    if (response.status === 'success') {
      return response.data;
    }
    return {};
  },
});
