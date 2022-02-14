import { AppState, SocketState, TypeSocketGetters } from '@/@types';
import { SOCKET_STORE } from '@/constants';
import { GetterTree } from 'vuex';

//@ts-ignore
export const getters: GetterTree<SocketState, AppState> & TypeSocketGetters =
  {};
