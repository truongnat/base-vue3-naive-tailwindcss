export type AnyToVoidFunction = (...args: any) => void;

export type NoneToVoidFunction = () => void;

export type TypeOS =
  | 'macOS'
  | 'iOS'
  | 'Windows'
  | 'Android'
  | 'Linux'
  | undefined;

export interface ITrimTextOpt {
  length?: number;
  start?: number;
  suffix?: string;
  prefix?: string;
}
