import Layout from '@/layouts/Layout';
import About from './About';
import Gallery from './Gallery';
import Gift from './Gift';
import Hero from './Hero';
import Region from './Region';

type CompetitionConfig = {
  colorPrime: string;
  colorSecond: string;
  colorThird: string;
  colorAbout: string;
  colorFifth: string;
  colorSixth: string;
  colorGift: string;
  heroTitle: string;
  aboutTitle: string;
  aboutDesc: string;
  giftDescription: string;
  giftAssetDesktop: string;
  giftAssetMobile: string;
  giftTiangMobile: string;
  regionAssetDesktop: string;
  regionAssetMobile: string;
  regionPasirDesktop: string;
  regionPasirMobile: string;
  galleryAssetDesktop: string;
  galleryAssetMobile: string;
};

export default function CompetitionContent({
  config,
}: {
  config: CompetitionConfig;
}) {
  return (
    <Layout withFooter withNavbar>
      <div className="relative w-full overflow-hidden">
        <Hero
          heroTitle={config.heroTitle}
          colorPrime={config.colorPrime}
          colorSecond={config.colorSecond}
          colorThird={config.colorThird}
        />
        <About
          aboutTitle={config.aboutTitle}
          aboutDesc={config.aboutDesc}
          colorAbout={config.colorAbout}
          colorPrime={config.colorPrime}
          colorSecond={config.colorSecond}
          colorSixth={config.colorSixth}
        />
        <Region
          regionAssetDesktop={config.regionAssetDesktop}
          regionAssetMobile={config.regionAssetMobile}
          regionPasirDesktop={config.regionPasirDesktop}
          regionPasirMobile={config.regionPasirMobile}
          colorPrime={config.colorPrime}
          colorSecond={config.colorSecond}
          colorAbout={config.colorAbout}
        />
        <Gift
          giftDescription={config.giftDescription}
          giftAssetDesktop={config.giftAssetDesktop}
          giftAssetMobile={config.giftAssetMobile}
          giftTiangMobile={config.giftTiangMobile}
          colorPrime={config.colorPrime}
          colorSecond={config.colorSecond}
          colorFifth={config.colorFifth}
          colorGift={config.colorGift}
        />
        <Gallery
          colorPrime={config.colorPrime}
          colorSecond={config.colorSecond}
          colorThird={config.colorThird}
          galleryAssetDesktop={config.galleryAssetDesktop}
          galleryAssetMobile={config.galleryAssetMobile}
        />
      </div>
    </Layout>
  );
}
