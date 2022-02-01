import { AppState, RootState } from '@/@types';
import { Module } from 'vuex';
import { state } from './root.state';
import { mutations } from './root.mutations';
import { getters } from './root.getters';
import { actions } from './root.actions';

export const rootModule: Module<RootState, AppState> = {
  state,
  mutations,
  getters,
  actions,
};
