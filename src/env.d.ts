/// <reference types="vite/client" />

declare module '*.vue' {
  // @ts-ignore
  import { DefineComponent } from 'vue';
  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    unknown
  >;
  export default component;
}
