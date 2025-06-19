import Layout from '@/layouts/Layout';
import ModalInfo from './(container)/ModalInfo';
import Hero from './(container)/landing/Hero';

export default function page() {
  return (
    <Layout withFooter withNavbar>
      <Hero />

      <ModalInfo />
    </Layout>
  );
}
