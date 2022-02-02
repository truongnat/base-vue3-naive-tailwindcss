type Parts = (string | false | undefined)[];

export function buildClassName(...parts: Parts) {
  return parts.filter(Boolean).join(' ');
}
