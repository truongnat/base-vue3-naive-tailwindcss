import { getPlatform } from '@/utils';

export enum E_MAC_OS {
  MAC_INTO_SH = 'Macintosh',
  MAC_INTEL = 'MacIntel',
  MAC_PPC = 'MacPPC',
  MAC_68K = 'Mac68K',
}

export enum E_WIN_OS {
  WIN_32 = 'Win32',
  WIN_64 = 'Win64',
  WINDOWS = 'Windows',
  WIN_CE = 'WinCE',
}

export enum E_IOS_OS {
  IPHONE = 'iPhone',
  IPAD = 'iPad',
  IPOD = 'iPod',
}

export const macosPlatforms = [
  E_MAC_OS.MAC_INTO_SH,
  E_MAC_OS.MAC_INTEL,
  E_MAC_OS.MAC_PPC,
  E_MAC_OS.MAC_68K,
];
export const windowsPlatforms = [
  E_WIN_OS.WIN_32,
  E_WIN_OS.WIN_64,
  E_WIN_OS.WINDOWS,
  E_WIN_OS.WIN_CE,
];
export const iosPlatforms = [E_IOS_OS.IPHONE, E_IOS_OS.IPAD, E_IOS_OS.IPOD];

export const PLATFORM_ENV = getPlatform();
