import { IGNORED_KEYS, inputTypes } from '@/constants';

export function isTextBox(target: EventTarget | null) {
  if (!target || !(target instanceof HTMLElement)) return false;
  const element = target;
  const tagName = element.tagName.toLowerCase();
  if (tagName === 'textarea') return true;
  if (tagName !== 'input') return false;
  const type = element.getAttribute('type');
  if (!type) return false;

  return inputTypes.indexOf(type.toLowerCase()) > -1;
}

export const preventDefault = (e: Event) => {
  e.preventDefault();
};

export function preventDefaultForScrollKeys(e: KeyboardEvent) {
  if (IGNORED_KEYS[e.key] && !isTextBox(e.target)) {
    preventDefault(e);
  }
}

export function disableScrolling() {
  // Disable scrolling in Chrome
  document.addEventListener('wheel', preventDefault, { passive: false });
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}

export function enableScrolling() {
  document.removeEventListener('wheel', preventDefault); // Enable scrolling in Chrome
  window.ontouchmove = null;
  document.onkeydown = null;
}
