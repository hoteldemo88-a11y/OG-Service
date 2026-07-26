import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';

const sections = [
  {
    title: 'Information We Collect',
    content: 'When you interact with our website, submit a service request, or contact us, we may collect the following types of personal information:\n\n• Full name and contact details (phone number, email address)\n• Residential address and pincode for service delivery\n• Water purifier brand and model information\n• Service history and preferences\n• Device information (browser type, operating system, IP address)\n• Usage data (pages visited, time spent, navigation patterns)\n\nWe collect this information only when you voluntarily provide it to us through forms, phone calls, or direct communication.',
  },
  {
    title: 'How We Use Your Information',
    content: 'Your personal information is used for the following purposes:\n\n• Processing and fulfilling your service requests efficiently\n• Assigning the nearest qualified technician to your location\n• Sending appointment confirmations and service updates via SMS, WhatsApp, or email\n• Providing post-service follow-up and support\n• Improving our website experience and service quality\n• Sending promotional offers and service reminders (only with your consent)\n• Maintaining internal records for quality assurance\n• Responding to your inquiries and resolving complaints',
  },
  {
    title: 'Information Sharing & Disclosure',
    content: 'We take your privacy seriously and follow strict data sharing practices:\n\n• We do NOT sell, rent, or trade your personal information to any third party for marketing purposes.\n• We may share your information with our authorized technicians solely for the purpose of fulfilling your service request.\n• We may use trusted third-party services (payment processors, analytics tools) that operate under strict confidentiality agreements.\n• We may disclose information if required by law, court order, or government regulations.\n• In the event of a business merger or acquisition, user information may be transferred as part of the business assets.',
  },
  {
    title: 'Data Security',
    content: 'We implement industry-standard security measures to protect your personal data:\n\n• SSL encryption for all data transmitted between your browser and our servers\n• Secure servers with restricted access controls\n• Regular security audits and vulnerability assessments\n• Limited access to personal data on a need-to-know basis\n• Encrypted storage of sensitive information\n\nWhile we strive to protect your personal information, no method of electronic storage or internet transmission is 100% secure. We cannot guarantee absolute security but are committed to taking all reasonable precautions.',
  },
  {
    title: 'Cookies & Tracking Technologies',
    content: 'Our website uses cookies and similar technologies to enhance your browsing experience:\n\n• Essential cookies required for website functionality\n• Analytics cookies to understand how visitors interact with our site\n• Preference cookies to remember your settings and choices\n\nYou can control cookies through your browser settings. Disabling certain cookies may affect website functionality. We do not use cookies to collect personally identifiable information without your explicit consent.',
  },
  {
    title: 'Third-Party Services',
    content: 'Our website may integrate with third-party services including:\n\n• Google Analytics for website traffic analysis\n• Google Maps for location services\n• Social media platforms for sharing features\n\nThese third-party services have their own privacy policies governing the use of your information. We encourage you to review their respective privacy policies. We are not responsible for the privacy practices of external websites or services.',
  },
  {
    title: 'Your Rights',
    content: 'Under applicable data protection laws, you have the following rights:\n\n• Right to Access — Request a copy of all personal data we hold about you\n• Right to Correction — Request correction of inaccurate or incomplete data\n• Right to Deletion — Request deletion of your personal data from our records\n• Right to Opt-Out — Unsubscribe from marketing communications at any time\n• Right to Restrict Processing — Limit how we use your data\n• Right to Data Portability — Request your data in a structured, machine-readable format\n\nTo exercise any of these rights, please contact us at info@roservicenow.in or call 080502 91180.',
  },
  {
    title: 'Data Retention',
    content: 'We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected:\n\n• Service records are retained for 24 months for quality assurance and warranty purposes\n• Marketing preferences are retained until you opt out\n• Website analytics data is aggregated and anonymized after 26 months\n• Financial records are maintained as required by applicable tax laws\n\nWhen your data is no longer needed, it is securely deleted or anonymized.',
  },
  {
    title: 'Children\'s Privacy',
    content: 'Our services are intended for individuals aged 18 and above. We do not knowingly collect personal information from children under 18 years of age. If we become aware that we have collected personal data from a minor without parental consent, we will take immediate steps to delete that information from our servers.',
  },
  {
    title: 'Changes to This Policy',
    content: 'We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting on this page with an updated "Last Revised" date. We encourage you to review this page periodically to stay informed about how we protect your data. Your continued use of our website and services after any changes constitutes acceptance of the updated policy.',
  },
  {
    title: 'Contact Us',
    content: 'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out to us:\n\nEmail: info@roservicenow.in\nPhone: 080502 91180\nAddress: Bangalore, Karnataka, India\n\nWe aim to respond to all privacy-related inquiries within 48 business hours.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO title="Privacy Policy" description="Privacy Policy for RO Service Now. Learn how we collect, use, protect, and handle your personal information when you use our website and services." url="/privacy-policy" />

      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 bg-[#f8fafc]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mt-6 mb-2">Privacy Policy</h1>
            <div className="flex items-center gap-2 text-[#94a3b8] text-sm sm:text-base mb-4">
              <span>Last Revised: January 1, 2024</span>
              <span className="w-1 h-1 rounded-full bg-[#cbd5e1]" />
              <span>RO Service Now</span>
            </div>
            <div className="w-12 h-1 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] rounded-full mb-6" />
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#f8fafc] rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] mb-8 sm:mb-10">
              <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
                At RO Service Now, your privacy is our top priority. This Privacy Policy outlines how we collect, use, store, and protect your personal information when you visit our website, book a service, or interact with us in any capacity. By using our website and services, you consent to the practices described in this policy.
              </p>
            </div>

            {sections.map((section, i) => (
              <div key={i} className="mb-8 sm:mb-10 last:mb-0">
                <div className="flex items-start gap-3 mb-3 sm:mb-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#eff6ff] border border-[#bfdbfe] flex items-center justify-center text-[11px] font-bold text-[#2563eb]">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0f172a] pt-0.5">{section.title}</h2>
                </div>
                <div className="pl-10">
                  {section.content.split('\n').map((line, j) => (
                    <p key={j} className={`text-[#64748b] text-sm sm:text-base leading-[1.8] ${line.startsWith('•') ? 'ml-4 mb-0.5' : 'mb-3 last:mb-0'}`}>{line}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-10 sm:mt-12 bg-[#f8fafc] rounded-2xl p-6 sm:p-8 border border-[#e2e8f0]">
              <h3 className="font-bold text-[#0f172a] mb-2">Questions About Your Privacy?</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">We are committed to protecting your data. If you have any questions about this policy, please contact us at <a href="mailto:info@roservicenow.in" className="text-[#2563eb] hover:underline font-medium">info@roservicenow.in</a> or call us at <a href="tel:918050291180" className="text-[#2563eb] hover:underline font-medium">080502 91180</a>.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
