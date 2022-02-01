import { ROOT_STORE } from '@/constants';
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
};

export type Store = RootStoreModuleTypes<Pick<AppState, 'rootState'>>;

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
