import { AuthState, TypeAuthMutations } from '@/@types';
import { AUTH_STORE } from '@/constants';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<AuthState> & TypeAuthMutations = {
  [AUTH_STORE.MUTATIONS.IS_LOGIN](state: AuthState, payload) {
    state.isLogin = payload.isLogin;
  },
  [AUTH_STORE.MUTATIONS.USER_INFO](state: AuthState, payload) {
    state.userInfo = payload.userInfo;
  },
};
