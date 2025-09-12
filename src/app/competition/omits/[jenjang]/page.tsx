import { redirect } from 'next/navigation';
import CompetitionContent from '../container/CompetitionContent';
const pageConfig = {
  sd: {
    colorPrime: '#9C3022',
    colorSecond: '#EA9AB2', //pink-300
    colorThird: '#F9DDD8',
    colorAbout: '#F3BABA', // pink-200
    colorFifth: '#EEE2DF',
    colorSixth: '#FFEFED',
    colorGift: '#EA9AB2',
    heroTitle: 'JENJANG SD',
    aboutTitle: 'TINGKAT SEKOLAH DASAR',
    aboutDesc: 'Sekolah Dasar (SD/sederajat)',
    giftDescription: '',
    giftAssetDesktop:
      '/images/competition/landing/omits/gift/pasir-sd-desktop.png',
    giftAssetMobile:
      '/images/competition/landing/omits/gift/pasir-sd-mobile.png',
    giftTiangMobile:
      '/images/competition/landing/omits/gift/tiang-kanan-sd-mobile.png',
    regionAssetDesktop:
      '/images/competition/landing/omits/region/peta-sd-smp-desktop.png',
    regionAssetMobile:
      '/images/competition/landing/omits/region/peta-sd-smp-mobile.png',
    regionPasirDesktop:
      '/images/competition/landing/omits/region/pasir-sd-desktop.png',
    regionPasirMobile:
      '/images/competition/landing/omits/region/pasir-sd-mobile.png',
    galleryAssetDesktop:
      '/images/competition/landing/omits/gallery/air-sd-desktop.png',
    galleryAssetMobile:
      '/images/competition/landing/omits/gallery/air-sd-mobile.png',
  },
  smp: {
    colorPrime: '#9C3022',
    colorSecond: '#E5B853', //yellow-300
    colorThird: '#E5DBA6',
    colorAbout: '#E0C47D', //yellow-200
    colorFifth: '#EEE2DF',
    colorSixth: '#F4EAB6',
    colorGift: '#E5B853',
    heroTitle: 'JENJANG SMP',
    aboutTitle: 'TINGKAT SEKOLAH MENENGAH PERTAMA',
    aboutDesc: 'Sekolah Menengah Pertama (SMP/sederajat)',
    giftDescription: '',
    giftAssetDesktop:
      '/images/competition/landing/omits/gift/pasir-smp-desktop.png',
    giftAssetMobile:
      '/images/competition/landing/omits/gift/pasir-smp-mobile.png',
    giftTiangMobile:
      '/images/competition/landing/omits/gift/tiang-kanan-smp-mobile.png',
    regionAssetDesktop:
      '/images/competition/landing/omits/region/peta-sd-smp-desktop.png',
    regionAssetMobile:
      '/images/competition/landing/omits/region/peta-sd-smp-mobile.png',
    regionPasirDesktop:
      '/images/competition/landing/omits/region/pasir-smp-desktop.png',
    regionPasirMobile:
      '/images/competition/landing/omits/region/pasir-smp-mobile.png',
    galleryAssetDesktop:
      '/images/competition/landing/omits/gallery/air-smp-desktop.png',
    galleryAssetMobile:
      '/images/competition/landing/omits/gallery/air-smp-mobile.png',
  },
  sma: {
    colorPrime: '#284269',
    colorSecond: '#7EB7D7',
    colorThird: '#8FBFDA', //blue-100
    colorAbout: '#8FBFDA',
    colorFifth: '#E5DBA6',
    colorSixth: '#E4EDF4',
    colorGift: '#8FBFDA',
    heroTitle: 'JENJANG SMA',
    aboutTitle: 'TINGKAT SEKOLAH MENENGAH ATAS',
    aboutDesc: 'Sekolah Menengah Atas (SMA/sederajat)',
    giftDescription: 'Free Pass Matematika ITS, ',
    giftAssetDesktop:
      '/images/competition/landing/omits/gift/pasir-desktop.png',
    giftAssetMobile: '/images/competition/landing/omits/gift/pasir-mobile.png',
    giftTiangMobile:
      '/images/competition/landing/omits/gift/tiang-kanan-mobile.png',
    regionAssetDesktop:
      '/images/competition/landing/omits/region/peta-desktop.png',
    regionAssetMobile:
      '/images/competition/landing/omits/region/peta-mobile.png',
    regionPasirDesktop:
      '/images/competition/landing/omits/region/pasir-desktop.png',
    regionPasirMobile:
      '/images/competition/landing/omits/region/pasir-mobile.png',
    galleryAssetDesktop:
      '/images/competition/landing/omits/gallery/air-desktop.png',
    galleryAssetMobile:
      '/images/competition/landing/omits/gallery/air-mobile.png',
  },
};

export default async function Page({
  params,
}: {
  params: Promise<{ jenjang: keyof typeof pageConfig }>;
}) {
  const { jenjang } = await params;
  const config = pageConfig[jenjang];

  if (!config) {
    redirect('/');
  }

  return <CompetitionContent config={config} />;
}

export function generateStaticParams() {
  return [{ jenjang: 'sd' }, { jenjang: 'smp' }, { jenjang: 'sma' }];
}
