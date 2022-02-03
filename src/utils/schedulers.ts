import { NoneToVoidFunction } from '@/@types';

export type Scheduler =
  | typeof requestAnimationFrame
  | typeof onTickEnd
  | typeof runNow;

export function onTickEnd(cb: NoneToVoidFunction) {
  Promise.resolve().then(cb);
}

export function runNow(fn: NoneToVoidFunction) {
  fn();
}

export const pause = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(true), ms);
  });
