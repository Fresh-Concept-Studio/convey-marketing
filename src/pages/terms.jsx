import Head from 'next/head';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const PrivacyPolicyContent = `
  <h1 className="text-3xl font-bold mb-6">Convey Privacy Policy</h1>

  <p className="mb-4"><strong>Last updated:</strong> 12/13/2023</p>

  <h2 className="text-xl font-bold mt-6 mb-2">1. Introduction</h2>
  <p className="mb-4">Welcome to Convey! This Privacy Policy is meant to help you understand how we collect, use, and safeguard your information.</p>

  <h2 className="text-xl font-bold mt-6 mb-2">2. Information We Collect</h2>
  <p className="mb-4">We gather personal information directly from you while using our app. This includes, but is not limited to, essential details like names and phone numbers. Additionally, for enhanced user experiences, we may collect specific health information and event updates provided by you.</p>

  <h2 className="text-xl font-bold mt-6 mb-2">3. Automatically Collected Information</h2>
  <p className="mb-4">As part of our commitment to providing a seamless and personalized experience, we automatically gather various types of information when you interact with our app. This encompasses essential data such as device information, enabling us to optimize our services for your specific device and enhance compatibility.</p>

  <p className="mb-4">Furthermore, we collect IP addresses to analyze regional usage patterns and improve the overall performance and security of our app. This information is instrumental in ensuring a reliable and efficient service for all users.</p>

  <p className="mb-4">In addition to the above, we leverage usage statistics to gain insights into how our app is utilized. This helps us make informed decisions for enhancements and updates, ultimately tailoring our app to better meet the needs and preferences of our user community.</p>

  <h2 className="text-xl font-bold mt-6 mb-2">4. How We Use Your Information</h2>
  <p className="mb-4">At Convey, we utilize the information we collect to create a personalized and tailored experience for you within the app. This includes, but is not limited to, customizing content, features, and recommendations based on your preferences, usage patterns, and provided details.</p>
  <p className="mb-4">Moreover, your information is instrumental in facilitating seamless communication. We enable you to share timely updates and event-related information with others through the app. This feature enhances the collaborative and interactive nature of our platform, allowing users to stay connected and informed in real-time.</p>
  <p className="mb-4">By harnessing the power of the data you entrust to us, we aim to not only enhance your individual experience but also foster a sense of community and engagement among our users. Rest assured, we prioritize the security and privacy of your information in every aspect of our service.</p>

  <h2 className="text-xl font-bold mt-6 mb-2">5. Sharing of Your Information</h2>
  <p className="mb-4">At Convey, transparency and trust are paramount, and we want to ensure you have a clear understanding of how we handle your information. In certain instances, we may share your information with trusted service providers who play a crucial role in delivering and enhancing our services.</p>

  <p className="mb-4">These service providers are carefully selected partners that assist us in various aspects such as hosting, analytics, customer support, and other essential functionalities. By collaborating with these entities, we can maintain the reliability, efficiency, and security of the Convey app, ensuring a seamless and robust user experience.</p>

  <p className="mb-4">Rest assured that our partnerships with service providers are established under strict agreements that prioritize the protection and confidentiality of your information. We hold our partners to the same high standards of security and privacy that you expect from Convey.</p>

  <p className="mb-4">If you have any specific questions about the service providers we collaborate with or would like more details on how your information is shared, please refer to our detailed Privacy Policy or feel free to reach out to our support team for clarification.</p>

  <h2 className="text-xl font-bold mt-6 mb-2">6. Security</h2>
  <p className="mb-4">At Convey, the security of your information is of utmost importance to us. We employ a comprehensive range of robust security measures, each meticulously designed to safeguard your data from unauthorized access, disclosure, or any form of compromise.</p>

  <h2 className="text-xl font-bold mt-6 mb-2">7. Your Choices</h2>
  <p className="mb-4">At Convey, we believe in empowering our users with choices and control over their experience. You have the ability to tailor your interactions and preferences within the app to suit your needs. If you ever want to stop updates, simply text "STOP".</p>

  <h2 className="text-xl font-bold mt-6 mb-2">8. Children’s Privacy</h2>
  <p className="mb-4">Our app is not intended for individuals under the age of 17 and we do not knowingly collect personal information from children.</p>

  <h2 className="text-xl font-bold mt-6 mb-2">9. Changes to This Privacy Policy</h2>
  <p className="mb-4">We may update our Privacy Policy from time to time. The latest policy will be found at this url.</p>

  <h2 className="text-xl font-bold mt-6 mb-2">10. Contact Us</h2>
  <p className="mb-4">If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@conveystatus.com" className="text-blue-500">support@conveystatus.com</a>.</p>

  <p className="mt-6">By using our app, you agree to the terms outlined in this Privacy Policy.</p>

`;

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
          <div dangerouslySetInnerHTML={{ __html: PrivacyPolicyContent }} />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
