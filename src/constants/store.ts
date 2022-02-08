/*---------- root state ----------*/

export enum RootGetters {
  LOADING = 'LOADING',
  VERSION = 'VERSION',
}

export enum RootActions {
  LOADING = 'LOADING',
  VERSION = 'VERSION',
}

export enum RootMutations {
  LOADING = 'LOADING',
  VERSION = 'VERSION',
}

export const ROOT_STORE = {
  GETTERS: RootGetters,
  ACTIONS: RootActions,
  MUTATIONS: RootMutations,
};

/*---------- auth state ----------*/

export enum AuthGetters {
  IS_LOGIN = 'IS_LOGIN',
  USER_INFO = 'USER_INFO',
}

export enum AuthActions {
  IS_LOGIN = 'IS_LOGIN',
  USER_INFO = 'USER_INFO',
}

export enum AuthMutations {
  IS_LOGIN = 'IS_LOGIN',
  USER_INFO = 'USER_INFO',
}

export const AUTH_STORE = {
  GETTERS: AuthGetters,
  ACTIONS: AuthActions,
  MUTATIONS: AuthMutations,
};

/*---------- socket state ----------*/

export enum SocketGetters {
  SOCKET_ONOPEN = 'SOCKET_ONOPEN',
  SOCKET_ONCLOSE = 'SOCKET_ONCLOSE',
  SOCKET_ONERROR = 'SOCKET_ONERROR',
  SOCKET_ONMESSAGE = 'SOCKET_ONMESSAGE',
  SOCKET_RECONNECT = 'SOCKET_RECONNECT',
  SOCKET_RECONNECT_ERROR = 'SOCKET_RECONNECT_ERROR',
}

export enum SocketActions {
  SOCKET_ONOPEN = 'SOCKET_ONOPEN',
  SOCKET_ONCLOSE = 'SOCKET_ONCLOSE',
  SOCKET_ONERROR = 'SOCKET_ONERROR',
  SOCKET_ONMESSAGE = 'SOCKET_ONMESSAGE',
  SOCKET_RECONNECT = 'SOCKET_RECONNECT',
  SOCKET_RECONNECT_ERROR = 'SOCKET_RECONNECT_ERROR',
}

export enum SocketMutations {
  SOCKET_ONOPEN = 'SOCKET_ONOPEN',
  SOCKET_ONCLOSE = 'SOCKET_ONCLOSE',
  SOCKET_ONERROR = 'SOCKET_ONERROR',
  SOCKET_ONMESSAGE = 'SOCKET_ONMESSAGE',
  SOCKET_RECONNECT = 'SOCKET_RECONNECT',
  SOCKET_RECONNECT_ERROR = 'SOCKET_RECONNECT_ERROR',
}

export const SOCKET_STORE = {
  GETTERS: SocketGetters,
  ACTIONS: SocketGetters,
  MUTATIONS: SocketMutations,
};
