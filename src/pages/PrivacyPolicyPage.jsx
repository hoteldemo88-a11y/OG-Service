import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';

const sections = [
  { title: 'Information We Collect', content: 'We collect information you provide directly to us, such as when you fill out a contact form, request a service, or contact us for support. This may include your name, email address, phone number, and address.' },
  { title: 'How We Use Your Information', content: 'We use the information we collect to provide, maintain, and improve our services, to process and fulfill your service requests, to send you technical notices and support messages, and to respond to your comments and questions.' },
  { title: 'Information Sharing', content: 'We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, as long as they agree to keep this information confidential.' },
  { title: 'Data Security', content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.' },
  { title: 'Cookies', content: 'Our website may use cookies to enhance your experience. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies through your browser settings.' },
  { title: 'Your Rights', content: 'You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications from us at any time.' },
  { title: 'Changes to This Policy', content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.' },
  { title: 'Contact Us', content: 'If you have any questions about this Privacy Policy, please contact us at info@roservicecenter.in or call us at +91 98765 43210.' },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO title="Privacy Policy" description="Privacy Policy for RO Service Center. Learn how we collect, use, and protect your personal information." url="/privacy-policy" />

      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 bg-[#f8fafc]">
        <Container>
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mt-6">Privacy Policy</h1>
          <p className="text-[#64748b] mt-2 text-sm sm:text-base">Last Updated: January 2024</p>
        </Container>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <p className="text-[#64748b] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">At RO Service Center, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.</p>
            {sections.map((section, i) => (
              <div key={i} className="mb-6 sm:mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-[#0f172a] mb-2 sm:mb-3">{section.title}</h2>
                <p className="text-[#64748b] text-sm sm:text-base leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
