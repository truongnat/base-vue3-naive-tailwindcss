import { SUPPORT_METHOD, SP_STORAGE } from 'src/constants';

export interface ISpStorage {
  [SP_STORAGE.LOCAL_STORAGE]: string;
  [SP_STORAGE.SESSION_STORAGE]: string;
  [SP_STORAGE.COOKIE_STORAGE]: string;
}

export interface ISpStorageMethod {
  [SUPPORT_METHOD.GET]: (key: keyof IStorageKeys) => void;
  [SUPPORT_METHOD.SET]: (key: keyof IStorageKeys, value: any) => void;
  [SUPPORT_METHOD.DELETE]: (key: keyof IStorageKeys) => void;
  [SUPPORT_METHOD.UPDATE]: (key: keyof IStorageKeys, value: any) => void;
  [SUPPORT_METHOD.SELECT_MUL]: (keys: keyof IStorageKeys[]) => any;
  [SUPPORT_METHOD.SET_MUL]: (args: argsMul[]) => void;
  [SUPPORT_METHOD.UPDATE_MUL]: (args: argsMul[]) => void;
  [SUPPORT_METHOD.DELETE_MUl]: (keys: keyof IStorageKeys[]) => void;
}

export type ConfigStorage = {
  [Key in keyof ISpStorage]: ISpStorageMethod;
};

export type argsMul = {
  [Key in keyof IStorageKeys]: any;
};

export interface IStorageKeys {
  tk?: string;
  lang?: string;
}
