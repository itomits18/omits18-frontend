import crypto from 'crypto';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function decrypt(encrypted: string) {
  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    crypto.randomBytes(32),
    crypto.randomBytes(16),
  );
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
