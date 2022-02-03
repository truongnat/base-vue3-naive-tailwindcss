import { SUPPORT_METHOD, SP_STORAGE, STORAGE_KEYS } from '@constants';
export interface ISpStorage {
  [SP_STORAGE.LOCAL_STORAGE]: string;
  [SP_STORAGE.SESSION_STORAGE]: string;
  // [SP_STORAGE.COOKIE_STORAGE]: string;
}
export interface ISpStorageMethod {
  [SUPPORT_METHOD.GET]: (key: keyof IStorageKeys) => string;
  [SUPPORT_METHOD.SET]: (key: keyof IStorageKeys, value: string) => void;
  [SUPPORT_METHOD.DELETE]: (key: keyof IStorageKeys) => void;
  [SUPPORT_METHOD.UPDATE]: (key: keyof IStorageKeys, value: string) => void;
  [SUPPORT_METHOD.SELECT_MUL]: (keys: (keyof IStorageKeys)[]) => argsMul[];
  [SUPPORT_METHOD.SET_MUL]: (args: argsMul[]) => void;
  [SUPPORT_METHOD.UPDATE_MUL]: (args: argsMul[]) => void;
  [SUPPORT_METHOD.DELETE_MUl]: (keys: (keyof IStorageKeys)[]) => void;
  [SUPPORT_METHOD.DELETE_ALL]: () => void;
}

export type ConfigStorage = {
  [Key in keyof ISpStorage]: ISpStorageMethod;
};

export type argsMul = {
  [Key in keyof IStorageKeys]: any;
};
export interface IStorageKeys {
  [STORAGE_KEYS.TK]?: string;
  [STORAGE_KEYS.LANG]?: string;
  [STORAGE_KEYS.ACCESS_TOKEN]?: string;
  [STORAGE_KEYS.REFRESH_TOKEN]?: string;
}
