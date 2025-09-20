import Layout from '@/layouts/Layout';
import ModalAnn from './(container)/ModalAnnouncement';
import ModalInfo from './(container)/ModalInfo';
import Hero from './(container)/landing/Hero';
import Kompetisi from './(container)/landing/Kompetisi';
import Sponsor from './(container)/landing/Sponsor';
import Timeline from './(container)/landing/Timeline';
import Tutorial from './(container)/landing/Tutorial';

export default function page() {
  return (
    <Layout withFooter withNavbar>
      <ModalAnn />

      <Hero />
      <Kompetisi />
      <Timeline />
      <Tutorial />
      {/* <Testimonial /> */}
      <Sponsor />
      <ModalInfo />
    </Layout>
  );
}
