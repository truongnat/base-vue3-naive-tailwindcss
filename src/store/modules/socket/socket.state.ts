import { SocketState } from '@/@types';

export const state: SocketState = {
  message: '',
  isConnected: false,
  reconnectError: false,
  heartBeatInterval: 50000,
  heartBeatTimer: 0,
};
