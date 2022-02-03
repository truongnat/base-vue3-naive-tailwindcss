import { AppState, AuthState } from '@/@types';
import { Module } from 'vuex';
import { state } from './auth.state';
import { mutations } from './auth.mutations';
import { getters } from './auth.getters';
import { actions } from './auth.actions';

export const authModule: Module<AuthState, AppState> = {
  state,
  mutations,
  getters,
  actions,
};
