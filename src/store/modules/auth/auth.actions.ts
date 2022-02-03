import { AppState, AuthState, TypeAuthActions } from '@/@types';
import { AUTH_STORE } from '@/constants';
import { ActionTree } from 'vuex';

export const actions: ActionTree<AuthState, AppState> & TypeAuthActions = {
  [AUTH_STORE.ACTIONS.IS_LOGIN]({ commit }, payload: { isLogin: boolean }) {
    commit(AUTH_STORE.MUTATIONS.IS_LOGIN, payload);
  },
  [AUTH_STORE.ACTIONS.USER_INFO]({ commit }, payload: { userInfo: any }) {
    commit(AUTH_STORE.MUTATIONS.USER_INFO, payload);
  },
};
