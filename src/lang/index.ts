import { SUPPORT_LANG } from '@/constants';
import { getLocalLang } from '@/utils';
import { createI18n } from 'vue-i18n';

import enUS from './locale/en-US.json';
import viVN from './locale/vi-VN.json';

export type MessageSchema = typeof enUS & typeof viVN;

export const i18n = createI18n<{ message: MessageSchema }, 'en-US' | 'vi-VN'>({
  locale: getLocalLang(), // set lang
  fallbackLocale: SUPPORT_LANG.EN, // set fallback locale
  messages: {
    'en-US': enUS,
    'vi-VN': viVN,
  },
});
