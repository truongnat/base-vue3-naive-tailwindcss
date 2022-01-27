// declare env for vue 3 typescript + vite
declare global {
  interface ImportMeta {
    env: {
      VITE_BASE_URL?: string;
      VITE_VERSION?: string;
    };
  }
}
