import { REGEX_EMAIL } from '@/constants';

export function _isValidEmail(email: string): boolean {
  return REGEX_EMAIL.test(email);
}
