import { AppState, Store } from '@/@types';
import { isDev, isProd } from '@/constants';
import { createStore, createLogger } from 'vuex';
import { authModule, rootModule, socketModule } from './modules';
import createPersistedState from 'vuex-persistedstate';
import _ from 'lodash';

const myPluginWithSnapshot = (store: Store) => {
  let prevState = _.cloneDeep(store.state);
  store.subscribe((mutation, state) => {
    const nextState = _.cloneDeep(state);

    // compare `prevState` and `nextState`...

    // save state for next mutation
    prevState = nextState;
  });
  // @ts-ignore
  window.__temp__prev__state = prevState;
};

const plugins = !isProd ? [createLogger(), myPluginWithSnapshot] : [];
plugins.push(createPersistedState({ storage: window.sessionStorage }));

export const store = createStore<AppState>({
  devtools: isDev,
  plugins,
  modules: {
    rootState: rootModule,
    authState: authModule,
    socket: socketModule,
  },
});

export function useStore(): Store {
  return store as Store;
}
