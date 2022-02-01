import { AppState, RootState, TypeRootActions } from '@/@types';
import { ROOT_STORE } from '@/constants';
import { ActionTree } from 'vuex';

export const actions: ActionTree<RootState, AppState> & TypeRootActions = {
  [ROOT_STORE.ACTIONS.LOADING]({ commit }, payload: { loading: boolean }) {
    commit(ROOT_STORE.MUTATIONS.LOADING, payload);
  },
  [ROOT_STORE.ACTIONS.VERSION](
    { commit },
    payload: { version: string | number }
  ) {
    commit(ROOT_STORE.MUTATIONS.VERSION, payload);
  },
};
