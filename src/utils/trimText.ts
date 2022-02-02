import { ITrimTextOpt } from '@/@types';

export function trimText(text?: string, opt?: ITrimTextOpt) {
  if (!text || text.length < length) {
    return text;
  }

  return `
  ${opt?.prefix || ''}${text.substring(opt?.start || 0, opt?.length || 30)}${
    opt?.suffix || ''
  }`;
}
