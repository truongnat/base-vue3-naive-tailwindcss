import { LANG_LIST, SUPPORT_LANG } from '@/constants';
import { StorageUtils } from '@utils';

export function getLocalLang() {
  const localLang =
    StorageUtils.localStorage.get('lang') ||
    StorageUtils.sessionStorage.get('lang');

  if (!LANG_LIST.includes(localLang as SUPPORT_LANG)) {
    console.warn('language not support! We set default lang!');
  }
  return localLang;
}
