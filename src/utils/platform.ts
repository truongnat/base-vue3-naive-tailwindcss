import { TypeOS } from '@/@types';
import {
  E_IOS_OS,
  E_MAC_OS,
  E_WIN_OS,
  iosPlatforms,
  macosPlatforms,
  windowsPlatforms,
} from '@/constants';

export function getPlatform() {
  const { userAgent, platform } = window.navigator;
  let os: TypeOS;

  if (macosPlatforms.indexOf(platform as E_MAC_OS) !== -1) {
    os = 'macOS';
  } else if (iosPlatforms.indexOf(platform as E_IOS_OS) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform as E_WIN_OS) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (/Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
}
