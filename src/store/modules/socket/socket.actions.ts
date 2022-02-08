import { AppState, SocketState, TypeSocketActions } from '@/@types';
import { AUTH_STORE } from '@/constants';
import { ActionTree } from 'vuex';

export const actions: ActionTree<SocketState, AppState> & TypeSocketActions =
  {};
