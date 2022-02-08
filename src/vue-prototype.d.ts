import { Store } from '@/@types';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $socket: WebSocket;
    $store: Store;
  }
}
