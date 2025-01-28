import { atom } from 'recoil';

export const recoilTestAtom = atom({
  key: 'recoilTest',
  default: 'hello world!',
});
