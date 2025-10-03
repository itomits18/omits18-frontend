import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cekJenjang(nomor: string) {
  const cleanString = nomor.slice(4);

  let jenjang = '';

  if (cleanString.startsWith('01')) jenjang = 'SD';
  else if (cleanString.startsWith('02')) jenjang = 'SMP';
  else if (cleanString.startsWith('03')) jenjang = 'SMA';
  else if (cleanString.startsWith('04')) jenjang = 'MISSION';

  return jenjang;
}

export function secondsToTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  // Format biar selalu 2 digit
  const hh = String(hours).padStart(2, '0');
  const mm = String(minutes).padStart(2, '0');
  const ss = String(secs).padStart(2, '0');

  return { hh, mm, ss };
}
