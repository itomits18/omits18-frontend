import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          100: '#E5DBA6',
          200: '#E0C47D',
          300: '#E5B853',
          400: '#DEA72A',
        },
        pink: {
          100: '#F9DDD8',
          200: '#F3BABA',
          300: '#EA9AB2',
          400: '#E27396',
        },
        green: {
          100: '#658E78',
          200: '#4C8168',
          300: '#337357',
          400: '#346341',
          500: '#384731',
        },
        blue: {
          100: '#8FBFDA',
          200: '#6DA0E1',
          300: '#2F80E4',
          400: '#1158AF',
        },
        purple: {
          100: '#EEE2DF',
          200: '#DEC1DB',
          300: '#AC7BD1',
        },
        black: {
          100: '#ADB5BD',
          200: '#343A40',
          300: '#28282B',
        },
        additions: {
          pink: '#E01C8E',
          purple: {
            100: '#5B61B2',
            200: '#662D91',
            300: '#4C1796',
          },
          brown: {
            100: '#A34343',
            200: '#9C3022',
          },
        },
        neutral: {
          main: '#FFFFFF',
        },
      },
      fontFamily: {
        Lora: ['var(--font-Lora)'],
        OZWizard: ['var(--font-OZWizard)'],
        Cinzel: ['var(--font-Cinzel)'],
      },
    },
  },
  plugins: [],
};
export default config;
