import { DateTime } from 'luxon';

export function toHHMMSS(time: string | number) {
  const secs = parseFloat(String(time));
  const hours: number = Math.floor(secs / (60 * 60));
  let minutes: number | string = Math.floor((secs - hours * 60 * 60) / 60);
  let seconds: number | string = Math.floor(secs - minutes * 60 - hours * 60 * 60);

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (hours && minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours ? `${hours}:` : ''}${minutes}:${seconds}`;
}

export function toLocalDateTime(iso: string, timezone: string, compact: boolean = false) {
  const date = DateTime.fromISO(iso).setZone(timezone);
  const currentDate = DateTime.local().setZone(timezone);

  if (currentDate.startOf('day').toSeconds() === date.startOf('day').toSeconds()) {
    if (compact) return date.setLocale('ru').toFormat('HH:mm');
    return date.setLocale('ru').toFormat('Сегодня, в HH:mm');
  }

  if (currentDate.minus({ days: 1 }).startOf('day').toSeconds() === date.startOf('day').toSeconds()) {
    if (compact) return date.setLocale('ru').toFormat('HH:mm');
    return date.setLocale('ru').toFormat('Вчера, в HH:mm');
  }

  if (compact) return date.setLocale('ru').toFormat('HH:mm');
  return date.setLocale('ru').toFormat('dd.LL.yyyy HH:mm');
}
