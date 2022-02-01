export enum SUPPORT_ENV {
  DEV = 'development',
  PROD = 'production',
  STG = 'staging',
  TEST = 'testing',
}

export const isDev = import.meta.env.VITE_NODE_ENV === SUPPORT_ENV.DEV;
export const isProd = import.meta.env.VITE_NODE_ENV === SUPPORT_ENV.PROD;
export const isStg = import.meta.env.VITE_NODE_ENV === SUPPORT_ENV.STG;
export const isTest = import.meta.env.VITE_NODE_ENV === SUPPORT_ENV.TEST;
