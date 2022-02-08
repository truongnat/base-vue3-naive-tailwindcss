import { AppState, SocketState } from '@/@types';
import { Module } from 'vuex';
import { state } from './socket.state';
import { mutations } from './socket.mutations';
import { getters } from './socket.getters';
import { actions } from './socket.actions';

export const socketModule: Module<SocketState, AppState> = {
  state,
  mutations,
  getters,
  actions,
};
