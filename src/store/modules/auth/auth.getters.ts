import { AppState, AuthState, TypeAuthGetters } from '@/@types';
import { AUTH_STORE } from '@/constants';
import { GetterTree } from 'vuex';

export const getters: GetterTree<AuthState, AppState> & TypeAuthGetters = {
  [AUTH_STORE.GETTERS.IS_LOGIN](state: AuthState) {
    return state.isLogin;
  },
  [AUTH_STORE.GETTERS.USER_INFO](state: AuthState) {
    return state.userInfo;
  },
};
