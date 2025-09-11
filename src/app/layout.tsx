import { CinzelFont, LoraFont, OZWizard } from '@/lib/font';
import type { Metadata } from 'next';
import './globals.css';
import Providers from './Providers';

import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: 'OMITS 18th',
  description:
    'Olimpiade Matematika ITS atau OMITS merupakan olimpiade bergengsi tingkat nasional yang diselenggarakan untuk siswa jenjang SD, SMP, dan SMA sederajat serta untuk mahasiswa',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${OZWizard.variable} ${LoraFont.variable} ${CinzelFont.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <GoogleAnalytics gaId="G-Y7K2ZVJ4C3" />
      </body>
    </html>
  );
}
