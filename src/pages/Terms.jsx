import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';

const sections = [
  { title: 'Acceptance of Terms', content: 'By accessing and using the RO Service Center website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.' },
  { title: 'Services', content: 'RO Service Center provides RO water purifier repair, installation, and maintenance services. All services are subject to availability and our technician\'s assessment of the issue.' },
  { title: 'Pricing', content: 'All prices mentioned on our website are indicative and may vary depending on the actual work required, parts needed, and your RO brand/model. The final price will be communicated before starting any work.' },
  { title: 'Warranty', content: 'We provide a service warranty on all repairs. The warranty period varies depending on the type of service and parts replaced. Warranty does not cover damage caused by misuse, neglect, or unauthorized repairs.' },
  { title: 'Payment', content: 'Payment is due upon completion of the service. We accept cash, UPI, and online bank transfers. All prices are inclusive of applicable taxes unless stated otherwise.' },
  { title: 'Cancellation', content: 'You may cancel a scheduled service appointment up to 2 hours before the scheduled time without any charges. Cancellations within 2 hours may incur a nominal visit charge.' },
  { title: 'Liability', content: 'RO Service Center shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the cost of the service provided.' },
  { title: 'Changes to Terms', content: 'We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this page. Your continued use of our services constitutes acceptance of the modified terms.' },
];

export default function Terms() {
  return (
    <>
      <SEO title="Terms & Conditions" description="Terms and Conditions for RO Service Center. Read our terms of service, pricing, warranty, and cancellation policies." url="/terms" />

      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 bg-[#f8fafc]">
        <Container>
          <Breadcrumb items={[{ label: 'Terms & Conditions' }]} />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mt-6">Terms & Conditions</h1>
          <p className="text-[#64748b] mt-2 text-sm sm:text-base">Last Updated: January 2024</p>
        </Container>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <p className="text-[#64748b] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">Welcome to RO Service Center. These Terms and Conditions outline the rules and regulations for the use of our website and services. Please read them carefully before using our services.</p>
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
