import { AppState, RootState, TypeRootGetters } from '@/@types';
import { ROOT_STORE } from '@/constants';
import { GetterTree } from 'vuex';

export const getters: GetterTree<RootState, AppState> & TypeRootGetters = {
  [ROOT_STORE.GETTERS.LOADING](state: RootState) {
    return state.loading;
  },
  [ROOT_STORE.GETTERS.VERSION](state: RootState) {
    return state.version;
  },
};
