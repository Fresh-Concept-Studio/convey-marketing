// pages/terms.js
import Head from 'next/head';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import PrivacyPolicyContent from '@/components/PrivacyPolicyContent';  // Correct import

import { Container } from '@/components/Container';

const Terms = () => {
  return (
    <>
      <Head>
        <title>Convey - Terms of Service</title>
      </Head>
      <Header />
      <main>
        <Container className="relative">
          <PrivacyPolicyContent />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
