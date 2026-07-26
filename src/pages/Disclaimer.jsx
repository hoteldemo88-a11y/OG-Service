import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';

const sections = [
  {
    title: 'General Information',
    content: 'The information displayed on the RO Service Center website (roservicecenter.in) is published in good faith and for general information purposes only. RO Service Center makes no warranty about the completeness, reliability, or accuracy of this information. Any action you take based on the information found on this website is strictly at your own risk. RO Service Center will not be liable for any losses and/or damages in connection with the use of our website.',
  },
  {
    title: 'External Links Disclaimer',
    content: 'Our website may contain links to external websites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility for their privacy policies or content. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them. Users should exercise their own discretion when leaving our site and review the privacy policies of third-party websites.',
  },
  {
    title: 'Professional Advice Disclaimer',
    content: 'The content on this website is not intended to be a substitute for professional technical advice, diagnosis, or service. Always seek the guidance of a qualified technician or service professional with any questions you may have regarding your water purifier. Never disregard professional advice or delay in seeking it because of something you have read on this website. RO Service Center is not responsible for any damage or loss that may result from following information provided on this site.',
  },
  {
    title: 'Service Estimates & Pricing',
    content: 'All pricing information, cost estimates, and service charges displayed on this website are indicative and subject to change without prior notice. Actual service costs may vary depending on multiple factors including but not limited to the brand, model, age of the unit, type of malfunction, spare parts required, and the technician\'s on-site assessment. The final service cost will be communicated to the customer and approved before any repair work begins. RO Service Center reserves the right to modify pricing at any time without prior notice.',
  },
  {
    title: 'Brand Affiliation Disclaimer',
    content: 'RO Service Center is an independent, third-party service provider. We are not affiliated with, endorsed by, sponsored by, or officially connected to any water purifier manufacturer or brand whose products and services are mentioned on this website. All brand names, trademarks, registered trademarks, and product names used on this site are the property of their respective owners. The use of any trade name or trademark is for identification and reference purposes only and does not imply any association with the trademark holder.',
  },
  {
    title: 'Testimonials & Reviews Disclaimer',
    content: 'Testimonials, reviews, and customer feedback displayed on this website represent the personal experiences and opinions of individual customers. Results may vary depending on individual circumstances, water quality, usage patterns, and other factors. RO Service Center does not claim, nor should any visitor assume, that every customer will experience the same or similar results. Testimonials are not intended to guarantee that all customers will achieve the same or similar outcomes.',
  },
  {
    title: 'Service Availability Disclaimer',
    content: 'While we strive to provide same-day service in most areas of Bangalore, service availability depends on multiple factors including technician availability, geographic location, time of request, and current demand. RO Service Center does not guarantee specific service timelines or availability. Estimated response times are approximate and may vary. We will do our best to accommodate your preferred time slot, but cannot guarantee specific appointment times.',
  },
  {
    title: 'Website Availability',
    content: 'RO Service Center strives to ensure that the website is available at all times. However, we shall not be held responsible if, for any reason, the website is unavailable for any period of time. Access to the website may be suspended temporarily and without notice in case of system failure, maintenance, or repair, or for any other reason beyond our control.',
  },
  {
    title: 'Errors & Omissions',
    content: 'While we have made every attempt to ensure that the information contained on this website is accurate and up to date, RO Service Center is not responsible for any errors or omissions, or for the results obtained from the use of this information. All information on this website is provided "as is," with no guarantee of completeness, accuracy, timeliness, or of the results obtained from the use of this information.',
  },
  {
    title: 'Consent',
    content: 'By using our website, you hereby consent to our disclaimer and agree to its terms. If you do not agree with any part of this disclaimer, please do not use our website or services. This disclaimer was last updated on January 1, 2024, and applies to all visitors, users, and others who access or use the service.',
  },
];

export default function Disclaimer() {
  return (
    <>
      <SEO title="Disclaimer" description="Disclaimer for RO Service Center. Read our official disclaimer regarding the information, services, and content provided on this website." url="/disclaimer" />

      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 bg-[#f8fafc]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mt-6 mb-2">Disclaimer</h1>
            <div className="flex items-center gap-2 text-[#94a3b8] text-sm sm:text-base mb-4">
              <span>Last Updated: January 1, 2024</span>
              <span className="w-1 h-1 rounded-full bg-[#cbd5e1]" />
              <span>RO Service Center</span>
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
                The information contained on the RO Service Center website is provided on an &ldquo;as is&rdquo; basis for general informational purposes only. By accessing or using this website and our services, you acknowledge and agree to the terms of this disclaimer. If you do not agree with any part of this disclaimer, please discontinue use of our website immediately.
              </p>
            </div>

            {sections.map((section, i) => (
              <div key={i} className="mb-8 sm:mb-10 last:mb-0">
                <div className="flex items-start gap-3 mb-3 sm:mb-4">
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#eff6ff] border border-[#bfdbfe] flex items-center justify-center text-[11px] font-bold text-[#2563eb]">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0f172a] pt-0.5">{section.title}</h2>
                </div>
                <p className="text-[#64748b] text-sm sm:text-base leading-[1.8] pl-10">{section.content}</p>
              </div>
            ))}

            <div className="mt-10 sm:mt-12 bg-[#f8fafc] rounded-2xl p-6 sm:p-8 border border-[#e2e8f0]">
              <h3 className="font-bold text-[#0f172a] mb-2">Questions About This Disclaimer?</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">If you have any questions about this disclaimer, please contact us at <a href="mailto:info@roservicecenter.in" className="text-[#2563eb] hover:underline font-medium">info@roservicecenter.in</a> or call us at <a href="tel:919876543210" className="text-[#2563eb] hover:underline font-medium">+91 98765 43210</a>.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
