import { useParams, Link } from 'react-router-dom';
import { Phone, ArrowRight, Shield, Wrench, Calendar, Clock, CheckCircle } from 'lucide-react';
import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import FAQAccordion from '@/components/common/FAQAccordion';
import Breadcrumb from '@/components/common/Breadcrumb';
import BrandLogos from '@/components/icons/BrandLogos';
import { BRANDS, SITE } from '@/constants';

const brandFaqs = {
  kent: [
    { id: 1, question: 'How often should I service my Kent RO?', answer: 'We recommend servicing your Kent RO every 6-12 months, depending on your water quality and usage.' },
    { id: 2, question: 'Do you use genuine Kent spare parts?', answer: 'Yes, we use 100% genuine Kent spare parts for all repairs and replacements.' },
    { id: 3, question: 'What is the warranty on Kent RO repair?', answer: 'We provide a 30-day service warranty on all Kent RO repairs. Part warranty varies by component.' },
  ],
  aquaguard: [
    { id: 1, question: 'How often should I service my Aquaguard?', answer: 'Regular service every 6-12 months is recommended for optimal performance of your Aquaguard purifier.' },
    { id: 2, question: 'Do you provide Aquaguard filter replacement?', answer: 'Yes, we replace all types of Aquaguard filters with genuine parts.' },
    { id: 3, question: 'What areas do you cover for Aquaguard service?', answer: 'We cover all major areas in Bangalore for Aquaguard service.' },
  ],
  pureit: [
    { id: 1, question: 'How do I know when to service my Pureit RO?', answer: 'If you notice reduced water flow, bad taste, or unusual noise, it\'s time to service your Pureit RO.' },
    { id: 2, question: 'Do you provide AMC for Pureit?', answer: 'Yes, we offer comprehensive AMC plans for Pureit water purifiers.' },
    { id: 3, question: 'How long does a Pureit service take?', answer: 'Most Pureit service visits are completed within 30-45 minutes.' },
  ],
  'ao-smith': [
    { id: 1, question: 'Do you service all AO Smith models?', answer: 'Yes, we service all AO Smith water purifier models including hot and cold water dispensers.' },
    { id: 2, question: 'What is the cost of AO Smith filter change?', answer: 'AO Smith filter replacement starts from ₹1,500 depending on the model and filter type.' },
    { id: 3, question: 'Do you provide AO Smith AMC?', answer: 'Yes, we offer annual maintenance contracts for AO Smith water purifiers.' },
  ],
  lg: [
    { id: 1, question: 'Do you service LG water purifiers?', answer: 'Yes, we provide complete service for all LG water purifier models including mineral enhancer models.' },
    { id: 2, question: 'How often should I service my LG RO?', answer: 'We recommend servicing your LG RO every 6-12 months for best performance.' },
    { id: 3, question: 'Do you use genuine LG parts?', answer: 'Yes, we use only genuine LG spare parts for all repairs and replacements.' },
  ],
};

const brandServices = {
  kent: [
    { title: 'Kent RO Repair', description: 'Expert repair for all Kent RO models including Kent Pearl, Kent Prime, and Kent Elite.' },
    { title: 'Kent Filter Change', description: 'Genuine Kent filter replacement with PP, sediment, carbon, and post-carbon filters.' },
    { title: 'Kent Membrane Replacement', description: 'RO membrane replacement for optimal TDS reduction and water purification.' },
    { title: 'Kent AMC', description: 'Annual maintenance contracts for hassle-free Kent RO maintenance.' },
  ],
  aquaguard: [
    { title: 'Aquaguard Repair', description: 'Professional repair for all Aquaguard models including Aquaguard Marvel and Aquaguard Amrit.' },
    { title: 'Aquaguard Filter Change', description: 'Genuine Aquaguard filter replacement with sediment and carbon filters.' },
    { title: 'Aquaguard UV Lamp Replacement', description: 'UV lamp replacement for effective bacterial disinfection.' },
    { title: 'Aquaguard AMC', description: 'Comprehensive annual maintenance for your Aquaguard purifier.' },
  ],
  pureit: [
    { title: 'Pureit Repair', description: 'Expert repair for all Pureit models including Pureit Classic and Pureit Ultima.' },
    { title: 'Pureit Filter Change', description: 'Genuine Pureit filter replacement for clean and safe water.' },
    { title: 'Pureit Membrane Change', description: 'RO membrane replacement for optimal water purification.' },
    { title: 'Pureit AMC', description: 'Annual maintenance contracts for Pureit water purifiers.' },
  ],
  'ao-smith': [
    { title: 'AO Smith Repair', description: 'Professional repair for all AO Smith water purifier models.' },
    { title: 'AO Smith Filter Change', description: 'Genuine AO Smith filter replacement with SCMT and sediment filters.' },
    { title: 'AO Smith Hot Water Service', description: 'Service and repair for AO Smith hot and cold water dispensers.' },
    { title: 'AO Smith AMC', description: 'Annual maintenance contracts for AO Smith purifiers.' },
  ],
  lg: [
    { title: 'LG RO Repair', description: 'Expert repair for all LG water purifier models including mineral enhancer models.' },
    { title: 'LG Filter Change', description: 'Genuine LG filter replacement for clean and mineral-rich water.' },
    { title: 'LG Mineralizer Service', description: 'Service and maintenance of LG mineral enhancer technology.' },
    { title: 'LG AMC', description: 'Annual maintenance contracts for LG water purifiers.' },
  ],
};

export default function BrandDetail() {
  const { brandId } = useParams();
  const brand = BRANDS.find((b) => b.id === brandId);

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">Brand Not Found</h1>
          <Link to="/brands" className="text-[#2563eb] hover:text-[#1d4ed8] font-semibold">View All Brands</Link>
        </div>
      </div>
    );
  }

  const faqs = brandFaqs[brand.id] || [];
  const services = brandServices[brand.id] || [];
  const Logo = BrandLogos[brand.id];

  return (
    <>
      <SEO title={`${brand.name} RO Service`} description={`Expert ${brand.name} RO water purifier service in Bangalore. Repair, filter replacement, AMC plans, and more. Genuine parts and certified technicians.`} url={`/brands/${brand.id}`} />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 bg-[#f8fafc] overflow-hidden">
        <Container className="relative z-10">
          <Breadcrumb items={[{ label: 'Brands', path: '/brands' }, { label: brand.name }]} />
          <div className="max-w-2xl mt-6">
            <div className="mb-5 sm:mb-6 scale-75 sm:scale-90 lg:scale-100 origin-left">
              {Logo ? <Logo /> : (
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#eff6ff] rounded-3xl flex items-center justify-center text-2xl sm:text-3xl font-bold text-[#2563eb]">{brand.name.charAt(0)}</div>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#0f172a] leading-[1.1] mb-4">{brand.name} Service</h1>
            <p className="text-base sm:text-lg text-[#64748b] mb-8">{brand.description}</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#2563eb] text-white font-semibold btn-ribbon hover:bg-[#1d4ed8] transition-all shadow-lg">
                <Phone className="w-5 h-5" />Call Now: {SITE.phoneFormatted}
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-[#334155] font-semibold btn-ribbon hover:bg-[#f8fafc] transition-all border border-[#e2e8f0]">
                Book Service <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <SectionHeading badge="Services" title={`${brand.name} Services We Offer`} icon={Wrench} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-5 sm:p-6 rounded-2xl border border-[#e2e8f0] hover:shadow-lg hover:border-[#bfdbfe] transition-all">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#eff6ff] rounded-xl flex items-center justify-center mb-3 sm:mb-4"><Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563eb]" /></div>
                <h3 className="font-bold text-[#0f172a] mb-2 text-[15px]">{service.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose */}
      <section className="py-16 sm:py-20 bg-[#f8fafc]">
        <Container>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Shield, title: 'Genuine Parts', description: `We use only genuine ${brand.name} spare parts for all repairs and replacements.` },
              { icon: Clock, title: 'Same Day Service', description: `Get your ${brand.name} RO serviced on the same day. Quick response and expert technicians.` },
              { icon: Calendar, title: 'Service Warranty', description: `We provide service warranty on all ${brand.name} repairs for your peace of mind.` },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e2e8f0] text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#eff6ff] rounded-2xl flex items-center justify-center mx-auto mb-4"><Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#2563eb]" /></div>
                  <h3 className="font-bold text-[#0f172a] mb-2 text-base sm:text-lg">{item.title}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeading badge="FAQ" title={`${brand.name} Service FAQ`} icon={CheckCircle} />
              <FAQAccordion items={faqs} />
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Need {brand.name} Service?</h2>
            <p className="text-white/80 text-sm sm:text-lg mb-8">Call us now for expert {brand.name} RO water purifier service.</p>
            <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-[#2563eb] font-semibold btn-ribbon hover:bg-white/90 transition-all shadow-lg">
              <Phone className="w-5 h-5" />Call Now: {SITE.phoneFormatted}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
