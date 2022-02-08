import { AppState, SocketState, TypeSocketGetters } from '@/@types';
import { SOCKET_STORE } from '@/constants';
import { GetterTree } from 'vuex';

export const getters: GetterTree<SocketState, AppState> & TypeSocketGetters =
  {};
