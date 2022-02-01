import { RootState, TypeRootMutations } from '@/@types';
import { ROOT_STORE } from '@/constants';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<RootState> & TypeRootMutations = {
  [ROOT_STORE.MUTATIONS.LOADING](state: RootState, payload) {
    state.loading = payload.loading;
  },
  [ROOT_STORE.MUTATIONS.VERSION](state: RootState, payload) {
    state.version = payload.version;
  },
};
