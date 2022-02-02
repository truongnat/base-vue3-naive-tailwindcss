import { AnyToVoidFunction, NoneToVoidFunction } from '@/@types';

type Scheduler =
  | typeof requestAnimationFrame
  | typeof onTickEnd
  | typeof runNow;

function onTickEnd(cb: NoneToVoidFunction) {
  Promise.resolve().then(cb);
}

function runNow(fn: NoneToVoidFunction) {
  fn();
}

export const pause = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(true), ms);
  });
