import { useParams, Link } from 'react-router-dom';
import { Phone, ArrowRight, Shield, Wrench, Calendar, Clock, CheckCircle, Droplets, Gauge, Cog, Zap, Power, Filter, Settings, Star, Users, Quote, Send } from 'lucide-react';
import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import FAQAccordion from '@/components/common/FAQAccordion';
import BrandLogos from '@/components/icons/BrandLogos';
import { BRANDS, SITE, TESTIMONIALS } from '@/constants';

const brandFaqs = {
  kent: [
    { id: 1, question: 'How often should I service my RO?', answer: 'We recommend servicing your RO every 6-12 months, depending on your water quality and usage.' },
    { id: 2, question: 'Do you use genuine spare parts?', answer: 'Yes, we use 100% genuine spare parts for all repairs and replacements.' },
    { id: 3, question: 'What is the warranty on repair?', answer: 'We provide a 30-day service warranty on all repairs. Part warranty varies by component.' },
  ],
  aquaguard: [
    { id: 1, question: 'How often should I service my RO?', answer: 'Regular service every 6-12 months is recommended for optimal performance of your purifier.' },
    { id: 2, question: 'Do you provide filter replacement?', answer: 'Yes, we replace all types of filters with genuine parts.' },
    { id: 3, question: 'What areas do you cover?', answer: 'We cover all major areas in Bangalore for service.' },
  ],
  pureit: [
    { id: 1, question: 'How do I know when to service my RO?', answer: 'If you notice reduced water flow, bad taste, or unusual noise, it\'s time to service your RO.' },
    { id: 2, question: 'Do you provide AMC plans?', answer: 'Yes, we offer comprehensive Annual Maintenance Contracts for all purifiers.' },
    { id: 3, question: 'How long does a service take?', answer: 'Most service visits are completed within 30-45 minutes.' },
  ],
  'ao-smith': [
    { id: 1, question: 'Do you service all models?', answer: 'Yes, we service all water purifier models including hot and cold water dispensers.' },
    { id: 2, question: 'What is the cost of filter change?', answer: 'Filter replacement starts from ₹1,500 depending on the model and filter type.' },
    { id: 3, question: 'Do you provide AMC?', answer: 'Yes, we offer annual maintenance contracts for all purifiers.' },
  ],
  lg: [
    { id: 1, question: 'Do you service all LG purifiers?', answer: 'Yes, we provide complete service for all models including mineral enhancer models.' },
    { id: 2, question: 'How often should I service my RO?', answer: 'We recommend servicing your RO every 6-12 months for best performance.' },
    { id: 3, question: 'Do you use genuine parts?', answer: 'Yes, we use only genuine spare parts for all repairs and replacements.' },
  ],
};

const brandServices = {
  kent: [
    { title: 'RO Repair', description: 'Expert repair for all models including Pearl, Prime, and Elite.' },
    { title: 'Filter Change', description: 'Genuine filter replacement with PP, sediment, carbon, and post-carbon filters.' },
    { title: 'Membrane Replacement', description: 'RO membrane replacement for optimal TDS reduction and water purification.' },
    { title: 'AMC Plans', description: 'Annual maintenance contracts for hassle-free RO maintenance.' },
  ],
  aquaguard: [
    { title: 'RO Repair', description: 'Professional repair for all models including Marvel and Amrit.' },
    { title: 'Filter Change', description: 'Genuine filter replacement with sediment and carbon filters.' },
    { title: 'UV Lamp Replacement', description: 'UV lamp replacement for effective bacterial disinfection.' },
    { title: 'AMC Plans', description: 'Comprehensive annual maintenance for your purifier.' },
  ],
  pureit: [
    { title: 'RO Repair', description: 'Expert repair for all models including Classic and Ultima.' },
    { title: 'Filter Change', description: 'Genuine filter replacement for clean and safe water.' },
    { title: 'Membrane Change', description: 'RO membrane replacement for optimal water purification.' },
    { title: 'AMC Plans', description: 'Annual maintenance contracts for hassle-free service.' },
  ],
  'ao-smith': [
    { title: 'RO Repair', description: 'Professional repair for all water purifier models.' },
    { title: 'Filter Change', description: 'Genuine filter replacement with SCMT and sediment filters.' },
    { title: 'Hot Water Service', description: 'Service and repair for hot and cold water dispensers.' },
    { title: 'AMC Plans', description: 'Annual maintenance contracts for purifiers.' },
  ],
  lg: [
    { title: 'RO Repair', description: 'Expert repair for all models including mineral enhancer technology.' },
    { title: 'Filter Change', description: 'Genuine filter replacement for clean and mineral-rich water.' },
    { title: 'Mineralizer Service', description: 'Service and maintenance of mineral enhancement technology.' },
    { title: 'AMC Plans', description: 'Annual maintenance contracts for hassle-free service.' },
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
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 bg-[#f8fafc] overflow-hidden">
        <Container className="relative z-10">
          
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-start sm:gap-10 lg:gap-14">
            {/* Logo */}
            <div className="flex-shrink-0 mb-6 sm:mb-0 w-full sm:w-auto">
              <div className="w-[calc(100%-20px)] mx-auto sm:mx-0 sm:w-[200px] h-[120px] sm:h-[120px] lg:w-[240px] lg:h-[140px] bg-white rounded-2xl sm:rounded-3xl border border-[#e2e8f0] shadow-sm flex items-center justify-center p-4 sm:p-6">
                {Logo ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <img src={`/images/logos/${brand.id === 'ao-smith' ? 'aosmith_new' : brand.id === 'kent' ? 'brand2' : brand.id === 'aquaguard' ? 'brand5' : brand.id === 'pureit' ? 'brand4' : 'brand1'}.webp`} alt={brand.name} width="240" height="140" decoding="async" className="max-w-full max-h-full object-contain" />
                  </div>
                ) : (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#eff6ff] rounded-3xl flex items-center justify-center text-2xl sm:text-3xl font-bold text-[#2563eb]">{brand.name.charAt(0)}</div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h1 className="text-[28px] sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#0f172a] leading-[1.1] mb-3 sm:mb-4">Expert RO Service</h1>
              <p className="text-[14px] sm:text-lg text-[#64748b] mb-6 sm:mb-8 leading-relaxed">Advanced multi-stage water purification with expert service in Bangalore. Repair, filter replacement, and AMC plans.</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#2563eb] text-white font-semibold btn-ribbon hover:bg-[#1d4ed8] transition-all shadow-lg text-[14px]">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />Call Now: {SITE.phoneFormatted}
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-[#334155] font-semibold btn-ribbon hover:bg-[#f8fafc] transition-all border border-[#e2e8f0] text-[14px]">
                  Book Service <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-20 bg-white">
        <Container>
          <SectionHeading badge="Services" title="Services We Offer" icon={Wrench} />
          {/* Mobile: compact 2-per-row horizontal cards */}
          <div className="grid grid-cols-2 gap-2.5 sm:hidden">
            {services.map((service) => (
              <div key={service.title} className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-[#e2e8f0] hover:shadow-md hover:border-[#bfdbfe] transition-all">
                <div className="w-8 h-8 bg-[#eff6ff] rounded-lg flex items-center justify-center shrink-0"><Wrench className="w-4 h-4 text-[#2563eb]" /></div>
                <span className="font-semibold text-[#0f172a] text-[12px] leading-tight">{service.title}</span>
              </div>
            ))}
          </div>
          {/* Tablet+: full cards with description */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-[#e2e8f0] hover:shadow-lg hover:border-[#bfdbfe] transition-all">
                <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-[#eff6ff] rounded-xl flex items-center justify-center mb-3"><Wrench className="w-4.5 h-4.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#2563eb]" /></div>
                <h3 className="font-bold text-[#0f172a] mb-1.5 sm:mb-2 text-[14px] sm:text-[15px]">{service.title}</h3>
                <p className="text-[#64748b] text-[13px] sm:text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose */}
      <section className="py-12 sm:py-20 bg-[#f8fafc]">
        <Container>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              { icon: Shield, title: 'Genuine Parts', description: `We use only genuine spare parts for all repairs and replacements.` },
              { icon: Clock, title: 'Same Day Service', description: 'Get your RO serviced on the same day. Quick response and expert technicians.' },
              { icon: Calendar, title: 'Service Warranty', description: 'We provide service warranty on all repairs for your peace of mind.' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-[#e2e8f0] text-center">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#eff6ff] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4"><Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#2563eb]" /></div>
                  <h3 className="font-bold text-[#0f172a] mb-1.5 sm:mb-2 text-[15px] sm:text-base lg:text-lg">{item.title}</h3>
                  <p className="text-[#64748b] text-[13px] sm:text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Common Problems */}
      <section className="py-12 sm:py-20 bg-white">
        <Container>
          <SectionHeading badge="Issues" title="Common RO Problems We Fix" icon={Wrench} />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {[
              { icon: Droplets, label: 'No Water' },
              { icon: Droplets, label: 'Water Leakage' },
              { icon: Droplets, label: 'Bad Taste' },
              { icon: Droplets, label: 'Bad Smell' },
              { icon: Gauge, label: 'Low Pressure' },
              { icon: Cog, label: 'Noise' },
              { icon: Filter, label: 'Filter Change' },
              { icon: Power, label: 'RO Not Starting' },
              { icon: Cog, label: 'Pump Problem' },
              { icon: Zap, label: 'UV Light Problem' },
            ].map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.label} className="flex flex-col items-center gap-2 p-4 sm:p-5 rounded-xl border border-[#f1f5f9] bg-[#f8fafc] hover:border-[#bfdbfe] hover:shadow-md transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#eff6ff] flex items-center justify-center"><Icon className="w-5 h-5 text-[#2563eb]" /></div>
                  <span className="text-[12px] sm:text-[13px] text-[#475569] font-medium text-center">{p.label}</span>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-semibold btn-ribbon px-6 sm:px-7 py-2.5 sm:py-3 text-[13px] sm:text-[14px] transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98]">
              <Phone className="w-4 h-4" />Book Service Now
            </a>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-20 bg-[#f8fafc]">
        <Container>
          <SectionHeading badge="Process" title="Our Simple Service Process" subtitle="Get your RO serviced in 5 easy steps" icon={Settings} />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {[
              { icon: Phone, num: '01', title: 'Book Service', desc: 'Call us or fill the form to schedule your RO service.' },
              { icon: Users, num: '02', title: 'Technician Assigned', desc: 'We assign the nearest trained technician to your area.' },
              { icon: Wrench, num: '03', title: 'Home Visit', desc: 'Our technician visits your home at the scheduled time.' },
              { icon: Settings, num: '04', title: 'Repair / Service', desc: 'Problem is diagnosed and fixed on the spot.' },
              { icon: CheckCircle, num: '05', title: 'Payment', desc: 'Pay only after the service is completed to your satisfaction.' },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.num} className="relative bg-white p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-[#e2e8f0] text-center hover:shadow-lg hover:border-[#bfdbfe] transition-all">
                  <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full border-2 border-[#bfdbfe] flex items-center justify-center text-[8px] sm:text-[11px] font-bold text-[#2563eb] shadow-soft">{s.num}</span>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#eff6ff] flex items-center justify-center mx-auto mb-3"><Icon className="w-5 h-5 text-[#2563eb]" /></div>
                  <p className="font-semibold text-[#0a1a3a] text-[12px] sm:text-[13px] mb-0.5 leading-tight">{s.title}</p>
                  <p className="text-[#64748b] text-[10px] sm:text-[11px] leading-snug">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-20 bg-white overflow-hidden">
        <Container>
          <SectionHeading badge="Reviews" title="What Our Customers Say" subtitle="Trusted by thousands of happy customers in Bangalore" icon={Star} />
        </Container>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-24 lg:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-24 lg:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden py-2">
            <div className="flex gap-3 sm:gap-5 lg:gap-6 w-max animate-marquee pl-3 sm:pl-6 lg:pl-0">
              {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((review, i) => (
                <div key={`${review.id}-${i}`} className="group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 w-[260px] sm:w-[320px] lg:w-[350px] shrink-0 transition-all duration-500 hover:-translate-y-2 border border-[#e2e8f0]" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(37,99,235,0.06)' }}>
                  <div className="absolute top-0 left-6 sm:left-8 right-6 sm:right-8 h-[3px] rounded-full bg-gradient-to-r from-[#2563eb] via-[#60a5fa] to-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] flex items-center justify-center mb-3 sm:mb-4">
                    <Quote className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-[#2563eb]" />
                  </div>
                  <div className="flex items-center gap-0.5 mb-2 sm:mb-3">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                  <p className="text-[#475569] text-[12px] sm:text-[14px] leading-[1.6] mb-4 sm:mb-6 font-medium">&ldquo;{review.text}&rdquo;</p>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#e2e8f0] to-transparent mb-3 sm:mb-4" />
                  <div className="flex items-center gap-2.5 sm:gap-3.5">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#eff6ff] border border-[#bfdbfe] flex items-center justify-center text-[13px] sm:text-[15px] font-bold text-[#2563eb] shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-[#0f172a] text-[11px] sm:text-[13px] truncate">{review.name}</p>
                      <p className="text-[#64748b] text-[9px] sm:text-[11px] truncate">{review.location}</p>
                    </div>
                    <span className="text-[9px] sm:text-[11px] font-semibold text-[#2563eb] bg-[#eff6ff] px-2 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap">{review.service}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="py-12 sm:py-20 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeading badge="FAQ" title="Frequently Asked Questions" icon={CheckCircle} />
              <FAQAccordion items={faqs} />
            </div>
          </Container>
        </section>
      )}

      {/* CTA + Booking Form */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Need RO Service?</h2>
            <p className="text-white/90 text-[14px] sm:text-lg leading-relaxed">Book an appointment — we&apos;ll call you to confirm.</p>
          </div>
          <div className="max-w-xl mx-auto bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl">
            <form onSubmit={(e) => { e.preventDefault(); }} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] sm:text-[13px] font-semibold text-[#475569] mb-1.5">Name</label>
                  <input type="text" placeholder="Your name" required className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] text-[#0f172a] text-[14px] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb] transition-all" />
                </div>
                <div>
                  <label className="block text-[12px] sm:text-[13px] font-semibold text-[#475569] mb-1.5">Phone Number</label>
                  <input type="tel" placeholder="+91 98765 43210" required pattern="[0-9+\s]{10,}" className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] text-[#0f172a] text-[14px] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb] transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] sm:text-[13px] font-semibold text-[#475569] mb-1.5">Pincode</label>
                  <input type="text" placeholder="e.g. 560034" required pattern="[0-9]{6}" maxLength="6" className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] text-[#0f172a] text-[14px] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb] transition-all" />
                </div>
                <div>
                  <label className="block text-[12px] sm:text-[13px] font-semibold text-[#475569] mb-1.5">Brand</label>
                  <select defaultValue={brand.id} required className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] text-[#0f172a] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb] transition-all appearance-none">
                    {BRANDS.map((b) => (
                      <option key={b.id} value={b.id}>{b.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2563eb] text-white font-semibold btn-ribbon hover:bg-[#1d4ed8] transition-all shadow-lg text-[14px]">
                <Send className="w-4 h-4" /> Book Appointment
              </button>
            </form>
            <p className="text-center text-[#94a3b8] text-[11px] sm:text-[12px] mt-3">We&apos;ll call you to confirm your appointment.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
