import { AUTH_STORE, ROOT_STORE, SOCKET_STORE } from '@/constants';
import { UserCredential } from 'firebase/auth';
import { InjectionKey } from 'vue';
import {
  ActionContext,
  CommitOptions,
  DispatchOptions,
  Store as VuexStore,
} from 'vuex';

export const key: InjectionKey<VuexStore<AppState>> = Symbol();

/*---------- all state ----------*/

export type AppState = {
  rootState: RootState;
  authState: AuthState;
  socket: SocketState;
};

export type Store = AuthStoreModuleTypes<Pick<AppState, 'rootState'>> &
  SocketStoreModuleTypes<Pick<AppState, 'rootState'>> &
  RootStoreModuleTypes<Pick<AppState, 'rootState'>>;

/*---------- root state ----------*/

export type RootState = {
  loading: boolean;
  version: string | number;
};

export type TypeRootMutations<S = RootState> = {
  [ROOT_STORE.MUTATIONS.LOADING](state: S, payload: { loading: boolean }): void;
  [ROOT_STORE.MUTATIONS.VERSION](
    state: S,
    payload: { version: string | number }
  ): void;
};

export type TypeRootGetters = {
  [ROOT_STORE.GETTERS.LOADING](state: RootState): boolean;
  [ROOT_STORE.GETTERS.VERSION](state: RootState): string | number;
};

export type AugmentedRootActionContext = {
  commit<K extends keyof TypeRootMutations>(
    key: K,
    payload: Parameters<TypeRootMutations[K]>[1]
  ): ReturnType<TypeRootMutations[K]>;
} & Omit<ActionContext<RootState, AppState>, 'commit'>;

export interface TypeRootActions {
  [ROOT_STORE.ACTIONS.LOADING](
    { commit }: AugmentedRootActionContext,
    payload: { loading: boolean }
  ): void;
  [ROOT_STORE.ACTIONS.VERSION](
    { commit }: AugmentedRootActionContext,
    payload: {
      version: string | number;
    }
  ): void;
}

export type RootStoreModuleTypes<S = RootState> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<
    K extends keyof TypeRootMutations,
    P extends Parameters<TypeRootMutations[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<TypeRootMutations[K]>;
} & {
  getters: {
    [K in keyof TypeRootGetters]: ReturnType<TypeRootGetters[K]>;
  };
} & {
  dispatch<K extends keyof TypeRootActions>(
    key: K,
    payload?: Parameters<TypeRootActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<TypeRootActions[K]>;
};

/*---------- auth state ----------*/

export type AuthState = {
  isLogin: boolean;
  userInfo: UserCredential;
};

export type TypeAuthMutations<S = AuthState> = {
  [AUTH_STORE.MUTATIONS.IS_LOGIN](
    state: S,
    payload: { isLogin: boolean }
  ): void;
  [AUTH_STORE.MUTATIONS.USER_INFO](
    state: S,
    payload: { userInfo: UserCredential }
  ): void;
};

export type TypeAuthGetters = {
  [AUTH_STORE.GETTERS.IS_LOGIN](state: AuthState): boolean;
  [AUTH_STORE.GETTERS.USER_INFO](state: AuthState): UserCredential;
};

export type AugmentedAuthActionContext = {
  commit<K extends keyof TypeAuthMutations>(
    key: K,
    payload: Parameters<TypeAuthMutations[K]>[1]
  ): ReturnType<TypeAuthMutations[K]>;
} & Omit<ActionContext<AuthState, AppState>, 'commit'>;

export interface TypeAuthActions {
  [AUTH_STORE.ACTIONS.IS_LOGIN](
    { commit }: AugmentedAuthActionContext,
    payload: { isLogin: boolean }
  ): void;
  [AUTH_STORE.ACTIONS.USER_INFO](
    { commit }: AugmentedAuthActionContext,
    payload: {
      userInfo: UserCredential;
    }
  ): void;
}

export type AuthStoreModuleTypes<S = AuthState> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<
    K extends keyof TypeAuthMutations,
    P extends Parameters<TypeAuthMutations[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<TypeAuthMutations[K]>;
} & {
  getters: {
    [K in keyof TypeAuthGetters]: ReturnType<TypeAuthGetters[K]>;
  };
} & {
  dispatch<K extends keyof TypeAuthActions>(
    key: K,
    payload?: Parameters<TypeAuthActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<TypeAuthActions[K]>;
};

/*---------- socket state ----------*/

export type SocketState = {
  isConnected: boolean;
  message: string;
  reconnectError: boolean;
  heartBeatInterval: number;
  heartBeatTimer: number;
};

export type TypeSocketMutations<S = SocketState> = {
  [SOCKET_STORE.MUTATIONS.SOCKET_ONOPEN](state: S, payload: any): void;
  [SOCKET_STORE.MUTATIONS.SOCKET_ONCLOSE](state: S, payload: any): void;
  [SOCKET_STORE.MUTATIONS.SOCKET_ONERROR](state: S, payload: any): void;
  [SOCKET_STORE.MUTATIONS.SOCKET_ONMESSAGE](state: S, payload: any): void;
  [SOCKET_STORE.MUTATIONS.SOCKET_RECONNECT](state: S, payload: any): void;
  [SOCKET_STORE.MUTATIONS.SOCKET_RECONNECT_ERROR](state: S, payload: any): void;
};

export type TypeSocketGetters = {
  [SOCKET_STORE.GETTERS.SOCKET_ONOPEN](state: SocketState): any;
  [SOCKET_STORE.GETTERS.SOCKET_ONCLOSE](state: SocketState): any;
  [SOCKET_STORE.GETTERS.SOCKET_ONERROR](state: SocketState): any;
  [SOCKET_STORE.GETTERS.SOCKET_ONMESSAGE](state: SocketState): any;
  [SOCKET_STORE.GETTERS.SOCKET_RECONNECT](state: SocketState): any;
  [SOCKET_STORE.GETTERS.SOCKET_RECONNECT_ERROR](state: SocketState): any;
};

export type AugmentedSocketActionContext = {
  commit<K extends keyof TypeSocketGetters>(
    key: K,
    payload: Parameters<TypeSocketGetters[K]>[1]
  ): ReturnType<TypeSocketGetters[K]>;
} & Omit<ActionContext<SocketState, AppState>, 'commit'>;

export interface TypeSocketActions {
  [SOCKET_STORE.ACTIONS.SOCKET_ONOPEN](
    { commit }: AugmentedSocketActionContext,
    payload: any
  ): void;
  [SOCKET_STORE.ACTIONS.SOCKET_ONCLOSE](
    { commit }: AugmentedSocketActionContext,
    payload: any
  ): void;
  [SOCKET_STORE.ACTIONS.SOCKET_ONERROR](
    { commit }: AugmentedSocketActionContext,
    payload: any
  ): void;
  [SOCKET_STORE.ACTIONS.SOCKET_ONMESSAGE](
    { commit }: AugmentedSocketActionContext,
    payload: any
  ): void;
  [SOCKET_STORE.ACTIONS.SOCKET_RECONNECT](
    { commit }: AugmentedSocketActionContext,
    payload: any
  ): void;
  [SOCKET_STORE.ACTIONS.SOCKET_RECONNECT_ERROR](
    { commit }: AugmentedSocketActionContext,
    payload: any
  ): void;
}

export type SocketStoreModuleTypes<S = SocketState> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<
    K extends keyof TypeSocketMutations,
    P extends Parameters<TypeSocketMutations[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<TypeSocketMutations[K]>;
} & {
  getters: {
    [K in keyof TypeSocketGetters]: ReturnType<TypeSocketGetters[K]>;
  };
} & {
  dispatch<K extends keyof TypeSocketActions>(
    key: K,
    payload?: Parameters<TypeSocketActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<TypeSocketActions[K]>;
};
