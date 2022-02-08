import { SocketState, TypeSocketMutations } from '@/@types';
import { SOCKET_STORE } from '@/constants';
import { MutationTree } from 'vuex';

export const mutations: MutationTree<SocketState> & TypeSocketMutations = {
  [SOCKET_STORE.MUTATIONS.SOCKET_ONOPEN](state: SocketState, payload) {
    state.isConnected = true;
  },
  [SOCKET_STORE.MUTATIONS.SOCKET_ONCLOSE](state: SocketState, payload) {
    state.isConnected = false;
  },
  [SOCKET_STORE.MUTATIONS.SOCKET_ONERROR](state: SocketState, payload) {
    console.error(state, event);
  },
  [SOCKET_STORE.MUTATIONS.SOCKET_ONMESSAGE](state: SocketState, payload) {
    state.message = payload;
  },
  [SOCKET_STORE.MUTATIONS.SOCKET_RECONNECT](state: SocketState, payload) {
    console.info(state, payload);
  },
  [SOCKET_STORE.MUTATIONS.SOCKET_RECONNECT_ERROR](state: SocketState, payload) {
    state.reconnectError = true;
  },
};
