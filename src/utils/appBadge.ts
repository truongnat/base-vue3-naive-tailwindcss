import { isProd } from '@/constants';

export function updateWebBadge(unreadCount: number) {
  // @ts-ignore
  if (typeof window.navigator.setAppBadge !== 'function') {
    return;
  }
  // @ts-ignore
  window.navigator.setAppBadge(unreadCount).catch((e) => {
    if (!isProd) {
      console.error(e);
    }
  });
}
