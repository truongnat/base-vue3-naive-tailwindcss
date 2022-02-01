import { AppState, Store } from '@/@types';
import { isDev, isProd } from '@/constants';
import { createStore, createLogger } from 'vuex';
import { rootModule } from './modules';

export const store = createStore<AppState>({
  devtools: isDev,
  plugins: !isProd ? [createLogger()] : [],
  modules: {
    rootState: rootModule,
  },
});

export function useStore(): Store {
  return store as Store;
}
