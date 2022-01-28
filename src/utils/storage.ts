/* eslint-disable no-self-assign */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { argsMul, ConfigStorage } from 'src/@types/storage';

export const StorageUtils: ConfigStorage = {
  localStorage: {
    get(key) {
      return localStorage.getItem(key) || '';
    },
    set(key, value) {
      localStorage.setItem(key, value);
    },
    update(key, value) {
      localStorage.setItem(key, value);
    },
    delete(key) {
      localStorage.removeItem(key);
    },
    selectMul(keys) {
      const output: argsMul[] = [];
      keys.forEach((k) => {
        output.push({
          [k]: this.get(k),
        });
      });
      return output;
    },
    setMul(keys) {
      if (!keys.length) {
        return;
      }
      keys.forEach((item: argsMul) => {
        const key = Object.keys(item)[0];
        // @ts-ignore
        this.set(key, item[key]);
      });
    },
    updateMul(keys) {
      if (!keys.length) {
        return;
      }
      this.setMul(keys);
    },
    deleteMul(keys) {
      if (!keys.length) {
        return;
      }
      keys.forEach((k) => {
        this.delete(k);
      });
    },
    deleteAll() {
      localStorage.clear();
    },
  },
  sessionStorage: {
    get(key) {
      return sessionStorage.getItem(key) || '';
    },
    set(key, value) {
      sessionStorage.setItem(key, value);
    },
    update(key, value) {
      this.set(key, value);
    },
    delete(key) {
      sessionStorage.removeItem(key);
    },
    selectMul(keys) {
      const output: argsMul[] = [];
      keys.forEach((k) => {
        output.push({
          [k]: this.get(k),
        });
      });
      return output;
    },
    setMul(keys) {
      if (!keys.length) {
        return;
      }
      keys.forEach((item: argsMul) => {
        const key = Object.keys(item)[0];
        // @ts-ignore
        this.set(key, item[key]);
      });
    },
    updateMul(keys) {
      if (!keys.length) {
        return;
      }
      this.setMul(keys);
    },
    deleteMul(keys) {
      if (!keys.length) {
        return;
      }
      keys.forEach((k) => {
        this.delete(k);
      });
    },
    deleteAll() {
      sessionStorage.clear();
    },
  },
};
