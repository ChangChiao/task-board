import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'recoil-persist', // configuration stay the same too
  storage: localStorage,
});

export const chatState = atom({
  key: 'chatState',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
