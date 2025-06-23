import Layout from '@/layouts/Layout';
import ModalInfo from './(container)/ModalInfo';
import Hero from './(container)/landing/Hero';
import Kompetisi from './(container)/landing/Kompetisi';

export default function page() {
  return (
    <Layout withFooter withNavbar>
      <Hero />
      <Kompetisi />

      <ModalInfo />
    </Layout>
  );
}
