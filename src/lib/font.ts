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

// Cinzel (6 styles)
export const CinzelFont = localFont({
  src: [
    {
      path: '../app/fonts/Cinzel/Cinzel-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../app/fonts/Cinzel/Cinzel-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../app/fonts/Cinzel/Cinzel-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../app/fonts/Cinzel/Cinzel-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../app/fonts/Cinzel/Cinzel-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../app/fonts/Cinzel/Cinzel-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-cinzel',
});

// Lora (12 styles: normal + italic)
export const LoraFont = localFont({
  src: [
    {
      path: '../app/fonts/Lora/Lora-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../app/fonts/Lora/Lora-Italic.ttf',
      weight: '400',
      style: 'italic',
    },

    {
      path: '../app/fonts/Lora/Lora-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../app/fonts/Lora/Lora-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },

    {
      path: '../app/fonts/Lora/Lora-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../app/fonts/Lora/Lora-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },

    {
      path: '../app/fonts/Lora/Lora-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../app/fonts/Lora/Lora-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-lora',
});

// export const LoraFont = Lora({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   display: 'swap',
//   variable: '--font-Lora',
// });

// export const CinzelFont = Cinzel({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700', '800', '900'],
//   display: 'swap',
//   variable: '--font-Cinzel',
// });

// export const CinzelDecoFont = Cinzel({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700', '800', '900'],
//   display: 'swap',
//   variable: '--font-CinzelDecorative',
// });
