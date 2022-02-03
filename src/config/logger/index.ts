import { isProd } from '@/constants';

export const logger_opt = {
  isEnabled: !isProd,
  logLevel: isProd ? 'error' : 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '|',
  showConsoleColors: true,
};
