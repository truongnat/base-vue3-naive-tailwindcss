import { AuthState } from '@/@types';
import { UserCredential } from 'firebase/auth';

export const state: AuthState = {
  isLogin: false,
  userInfo: {} as UserCredential,
};
