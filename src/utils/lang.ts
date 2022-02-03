import { LANG_LIST, STORAGE_KEYS, SUPPORT_LANG } from '@/constants';
import { StorageUtils } from '@utils';

export function getLocalLang() {
  const localLang =
    StorageUtils.localStorage.get(STORAGE_KEYS.LANG) ||
    StorageUtils.sessionStorage.get(STORAGE_KEYS.LANG);

  if (!LANG_LIST.includes(localLang as SUPPORT_LANG)) {
    console.warn('language not support! We set default lang!');
    return SUPPORT_LANG.VI;
  }
  return localLang;
}
