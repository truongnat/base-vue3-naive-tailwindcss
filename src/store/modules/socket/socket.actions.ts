import { AppState, SocketState, TypeSocketActions } from '@/@types';
import { AUTH_STORE } from '@/constants';
import { ActionTree } from 'vuex';

// @ts-ignore
export const actions: ActionTree<SocketState, AppState> & TypeSocketActions =
  {};
