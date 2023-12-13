import Head from 'next/head';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { PrivacyPolicyContent } from '@/components/PrivacyPolicyContent';
import { Container } from '@/components/Container'

const Terms = () => {
  return (
    <>
      <Head>
        <title>Convey - Terms of Service</title>
      </Head>
      <Header />
      <main>
        <Container className="relative">
          <h1>Terms of Service</h1>
          <PrivacyPolicyContent />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Terms;