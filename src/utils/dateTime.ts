export function getDayStart(dateTime: number | Date) {
  const date = new Date(dateTime);
  date.setHours(0, 0, 0, 0);
  return date;
}

export function getDayStartAt(dateTime: number | Date) {
  return getDayStart(dateTime).getTime();
}

export function toYearMonth(timestamp: number) {
  const date = new Date(timestamp * 1000);
  return `${date.getFullYear()}-${date.getMonth()}`;
}

export function toIsoString(date: Date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function formatTime(dateTime: number | Date) {
  const date = typeof dateTime === 'number' ? new Date(dateTime) : dateTime;
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${hours}:${minutes}`;
}
