import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: 'By accessing and using the RO Service Now website (roservicenow.in) and our associated services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. These terms constitute a legally binding agreement between you and RO Service Now. If you do not agree with any part of these terms, you must immediately discontinue use of our website and services.',
  },
  {
    title: 'Eligibility',
    content: 'Our services are available to individuals who are at least 18 years of age and possess the legal capacity to enter into a binding agreement. By using our services, you represent and warrant that you meet these eligibility requirements. If you are using our services on behalf of an organization, you represent that you have the authority to bind that organization to these terms.',
  },
  {
    title: 'Scope of Services',
    content: 'RO Service Now provides professional RO water purifier repair, installation, maintenance, filter replacement, and AMC (Annual Maintenance Contract) services in Bangalore. Our services include:\n\n• Diagnostic assessment and troubleshooting of water purifier issues\n• Repair and replacement of faulty components and spare parts\n• Filter and membrane replacement with genuine parts\n• Preventive maintenance and periodic servicing\n• Installation and uninstallation of water purification systems\n• UV lamp replacement and TDS adjustment\n• AMC plans for hassle-free annual maintenance\n\nAll services are performed by trained and certified technicians at the customer\'s doorstep.',
  },
  {
    title: 'Service Booking & Scheduling',
    content: 'Services can be booked through our website, phone call, or WhatsApp. Upon receiving your request:\n\n• A customer support representative will contact you to confirm the appointment\n• The scheduled date and time are subject to technician availability\n• Same-day service is available for most areas in Bangalore, subject to demand and availability\n• You are expected to be present at the scheduled time, or authorize someone on your behalf\n• A valid phone number and address are required for booking\n\nRO Service Now reserves the right to reschedule appointments due to unforeseen circumstances, and will notify you promptly of any changes.',
  },
  {
    title: 'Pricing & Payments',
    content: 'All prices mentioned on our website are indicative and may vary based on:\n\n• The brand and model of your water purifier\n• The type and complexity of the issue\n• Spare parts and materials required\n• The technician\'s on-site assessment\n\nThe final service cost will be communicated and approved by you before any repair work begins. We accept payments via:\n\n• Cash\n• UPI (Google Pay, PhonePe, Paytm, etc.)\n• Online bank transfer\n\nAll quoted prices are inclusive of applicable GST unless stated otherwise. Invoices will be provided upon completion of the service.',
  },
  {
    title: 'Warranty & Guarantees',
    content: 'RO Service Now provides the following warranty coverage:\n\n• Service Warranty: A 30-day service warranty is provided on all repair work performed by our technicians. If the same issue recurs within 30 days of service, we will fix it at no additional charge.\n• Part Warranty: Warranty on replaced spare parts varies depending on the component and manufacturer. The specific warranty period for each part will be communicated at the time of replacement.\n• AMC Warranty: Annual Maintenance Contract customers receive priority service and extended warranty coverage as per the terms of their AMC plan.\n\nWarranty does not cover:\n• Damage caused by misuse, neglect, or accidental damage\n• Issues arising from unauthorized repairs by third parties\n• Normal wear and tear of consumable components\n• Damage due to voltage fluctuations or natural calamities',
  },
  {
    title: 'Cancellation & Rescheduling',
    content: 'You may cancel or reschedule your service appointment under the following conditions:\n\n• Free cancellation up to 2 hours before the scheduled appointment time\n• Cancellations within 2 hours of the scheduled time may incur a nominal visit charge of ₹200\n• No-show without prior cancellation may result in a visit charge\n• To reschedule, please call us at 080502 91180 at least 1 hour before the appointment\n\nRO Service Now reserves the right to cancel or reschedule appointments due to emergencies, technician unavailability, or extreme weather conditions. In such cases, no charges will be applied.',
  },
  {
    title: 'Customer Obligations',
    content: 'By using our services, you agree to:\n\n• Provide accurate and complete information when booking a service\n• Ensure access to the water purifier and a safe working environment for our technicians\n• Be present or have an authorized representative present during the service visit\n• Make payment promptly upon completion of the service\n• Inform our technician of any known issues or previous repairs\n• Keep the service receipt and warranty card for future reference\n\nFailure to meet these obligations may affect the quality of service and warranty coverage.',
  },
  {
    title: 'Limitation of Liability',
    content: 'RO Service Now shall not be held liable for:\n\n• Any indirect, incidental, or consequential damages arising from the use of our services\n• Damage caused by pre-existing conditions in the water purifier\n• Issues resulting from use of non-genuine parts by third parties prior to our service\n• Loss or damage to property not directly caused by our negligence\n• Water quality issues caused by source water contamination beyond the purifier\'s capacity\n\nOur total liability for any service shall not exceed the total amount paid by you for that specific service. We recommend reporting any issues within 24 hours of service completion for timely resolution.',
  },
  {
    title: 'Intellectual Property',
    content: 'All content on this website — including but not limited to text, graphics, logos, images, icons, software, and service descriptions — is the exclusive property of RO Service Now and is protected by applicable intellectual property laws. You may not:\n\n• Reproduce, duplicate, or copy any content from this website without written permission\n• Use our brand name, logo, or trademarks for any commercial purpose\n• Scrape, crawl, or use automated tools to extract content from our website\n• Modify or distribute any materials found on this website\n\nAny unauthorized use of our intellectual property may result in legal action.',
  },
  {
    title: 'Governing Law & Jurisdiction',
    content: 'These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka. Both parties agree to attempt to resolve any dispute through good-faith negotiation before resorting to legal proceedings.',
  },
  {
    title: 'Severability',
    content: 'If any provision of these Terms and Conditions is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving its original intent.',
  },
  {
    title: 'Changes to Terms',
    content: 'RO Service Now reserves the right to modify these Terms and Conditions at any time without prior notice. Changes will be effective immediately upon posting on this page with an updated "Last Revised" date. It is your responsibility to review these terms periodically. Your continued use of our website and services following any changes constitutes acceptance of the modified terms. We recommend bookmarking this page for future reference.',
  },
  {
    title: 'Contact Information',
    content: 'For any questions, concerns, or disputes related to these Terms and Conditions, please contact us:\n\nEmail: customercaresupports22@gmail.com\nPhone: 080502 91180\nAddress: Bangalore, Karnataka, India\nBusiness Hours: Monday to Saturday — 8:00 AM to 8:00 PM | Sunday — 9:00 AM to 5:00 PM',
  },
];

export default function Terms() {
  return (
    <>
      <SEO title="Terms & Conditions" description="Terms and Conditions for RO Service Now. Read our complete terms of service, pricing policy, warranty, cancellation, and liability terms." url="/terms" />

      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 bg-[#f8fafc]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mt-6 mb-2">Terms & Conditions</h1>
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
                Welcome to RO Service Now. These Terms and Conditions govern your use of our website and services. Please read them carefully before booking a service. By engaging our services, you agree to be legally bound by these terms.
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
              <h3 className="font-bold text-[#0f172a] mb-2">Need Help?</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">If you have any questions about these Terms & Conditions, please contact us at <a href="mailto:customercaresupports22@gmail.com" className="text-[#2563eb] hover:underline font-medium">customercaresupports22@gmail.com</a> or call us at <a href="tel:08050291180" className="text-[#2563eb] hover:underline font-medium">080502 91180</a>.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
