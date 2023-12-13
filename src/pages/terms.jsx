import Head from 'next/head';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const PrivacyPolicyContent = `
  <h1>[Your App Name] Privacy Policy</h1>
  <p><strong>Last updated:</strong> [Date]</p>

  <h2>1. Introduction</h2>
  <p>Welcome to [Your App Name]! This Privacy Policy is meant to help you understand how we collect, use, and safeguard your information.</p>

  <h2>2. Information We Collect</h2>
  <p>We may collect personal information that you provide directly when using our app, such as [list specific data like names, email addresses, etc.].</p>

  <h2>3. Automatically Collected Information</h2>
  <p>We may collect certain information automatically, including but not limited to [list specific data like device information, IP addresses, usage statistics, etc.].</p>

  <h2>4. How We Use Your Information</h2>
  <p>We use the collected information for [describe the purposes, e.g., providing and improving the app, personalizing user experience, etc.].</p>

  <h2>5. Sharing of Your Information</h2>
  <p>We may share your information with [list any third parties or categories of third parties, if applicable, e.g., service providers, analytics providers].</p>

  <h2>6. Security</h2>
  <p>We take reasonable measures to protect your information from unauthorized access or disclosure.</p>

  <h2>7. Your Choices</h2>
  <p>You can [describe any user choices, opt-outs, or preferences available].</p>

  <h2>8. Children’s Privacy</h2>
  <p>Our app is not intended for individuals under the age of [specify the age] and we do not knowingly collect personal information from children.</p>

  <h2>9. Changes to This Privacy Policy</h2>
  <p>We may update our Privacy Policy from time to time. You will be notified of any changes by [describe how users will be notified].</p>

  <h2>10. Contact Us</h2>
  <p>If you have any questions or concerns about this Privacy Policy, please contact us at [provide contact information].</p>

  <p>By using our app, you agree to the terms outlined in this Privacy Policy.</p>

  <p>[Your Company/Organization Name]<br>
  [Your Address]<br>
  [Your Email Address]<br>
  [Your Phone Number]</p>
`;

const Terms = () => {
  return (
    <>
      <Head>
        <title>Convey - Terms of Service</title>
      </Head>
      <Header />
      <main>
        <section>
          <h1>Terms of Service</h1>
          <div dangerouslySetInnerHTML={{ __html: PrivacyPolicyContent }} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
