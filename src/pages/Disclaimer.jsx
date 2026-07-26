import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';

const sections = [
  { title: 'General Information', content: 'The information provided on the RO Service Center website is for general informational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, or completeness of any information on the site.' },
  { title: 'External Links', content: 'The site may contain links to external websites that are not provided or maintained by or in any way affiliated with RO Service Center. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.' },
  { title: 'Professional Advice', content: 'The site cannot and does not contain professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.' },
  { title: 'Service Estimates', content: 'Any estimates or pricing provided on this website are indicative only. Actual service costs may vary depending on the brand, model, type of issue, and parts required. The final cost will be communicated by our technician before starting any work.' },
  { title: 'Brand Associations', content: 'RO Service Center is an independent service provider. We are not affiliated with, endorsed by, or officially connected to any water purifier brand mentioned on this website. All brand names, trademarks, and logos are the property of their respective owners.' },
  { title: 'Testimonials', content: 'Testimonials and reviews appearing on this site are individual experiences. They represent the opinions of users who have used our services. Results may vary from person to person. We do not claim or guarantee that you will achieve the same results.' },
  { title: 'Availability', content: 'We strive to keep the website running smoothly at all times. However, RO Service Center takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.' },
  { title: 'Consent', content: 'By using our website, you hereby consent to our disclaimer and agree to its terms.' },
];

export default function Disclaimer() {
  return (
    <>
      <SEO title="Disclaimer" description="Disclaimer for RO Service Center. Read our disclaimer regarding the information provided on this website." url="/disclaimer" />

      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 bg-[#f8fafc]">
        <Container>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mt-6">Disclaimer</h1>
          <p className="text-[#64748b] mt-2 text-sm sm:text-base">Last Updated: January 2024</p>
        </Container>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <p className="text-[#64748b] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">The information contained on the RO Service Center website is for general information purposes only. Please read this disclaimer carefully before using our website or services.</p>
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
