import Layout from '@/layouts/Layout';
import ModalInfo from './(container)/ModalInfo';
import Hero from './(container)/landing/Hero';
import Kompetisi from './(container)/landing/Kompetisi';
import Sponsor from './(container)/landing/Sponsor';
import Testimonial from './(container)/landing/Testimonial';
import Timeline from './(container)/landing/Timeline';
import Tutorial from './(container)/landing/Tutorial';

export default function page() {
  return (
    <Layout withFooter withNavbar>
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
