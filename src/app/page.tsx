import Layout from '@/layouts/Layout';
import ModalInfo from './(container)/ModalInfo';

export default function page() {
  return (
    <Layout withFooter withNavbar>
      <section className="min-h-screen bg-gradient-to-b from-[#A4CD9C] to-[#F2EAC5]">
        hello
      </section>

      <ModalInfo />
    </Layout>
  );
}
