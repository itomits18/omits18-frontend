import { CinzelDecoFont, CinzelFont, LoraFont, OZWizard } from '@/lib/font';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OMITS 18th',
  description:
    'Olimpiade Matematika ITS atau OMITS merupakan olimpiade bergengsi tingkat nasional yang diselenggarakan untuk siswa jenjang SD, SMP, dan SMA sederajat serta untuk mahasiswa.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${OZWizard.variable} ${LoraFont.variable} ${CinzelFont.variable} ${CinzelDecoFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
