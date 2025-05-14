import { Cinzel, Lora } from 'next/font/google';
import localFont from 'next/font/local';

export const OZWizard = localFont({
  src: [
    {
      path: '../app/fonts/OZWizard/OzsWizard-CowardlyLion.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../app/fonts/OZWizard/OzsWizard-Scarecrow.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../app/fonts/OZWizard/OzsWizard-TinWoodman.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-OZWizard',
  display: 'swap',
});

export const LoraFont = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-Lora',
});

export const CinzelFont = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-Cinzel',
});
