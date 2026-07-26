import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Wrench, Settings, Filter, CircleDot, Calendar, Droplets, Gauge, Cog, Zap, Activity, RefreshCw, Power, Shield } from 'lucide-react';
import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';
import { SERVICES, SITE } from '@/constants';

const serviceIcons = {
  'ro-repair': Wrench, 'ro-installation': Settings, 'ro-uninstallation': Power,
  'filter-replacement': Filter, 'membrane-replacement': CircleDot, 'amc-plans': Calendar,
  'water-leakage-repair': Droplets, 'low-water-flow': Gauge, 'pump-repair': Cog,
  'motor-repair': Zap, 'tds-adjustment': Activity, 'periodic-maintenance': RefreshCw,
};

const categories = ['All', 'Repair', 'Installation', 'Maintenance'];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = activeCategory === 'All' ? SERVICES : SERVICES.filter((s) => {
    if (activeCategory === 'Repair') return s.id.includes('repair') || s.id.includes('low-water');
    if (activeCategory === 'Installation') return s.id.includes('install') || s.id.includes('uninstall');
    if (activeCategory === 'Maintenance') return s.id.includes('filter') || s.id.includes('membrane') || s.id.includes('amc') || s.id.includes('maintenance') || s.id.includes('tds');
    return true;
  });

  return (
    <>
      <SEO title="RO Service in Bangalore | Repair, Installation & Maintenance" description="Complete RO water purifier services in Bangalore - repair, installation, maintenance, filter replacement, AMC plans, and more. Same day doorstep service with genuine parts. Call +91 98765 43210." url="/services" />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 bg-[#f8fafc] overflow-hidden">
        <Container className="relative z-10">
          <Breadcrumb items={[{ label: 'Services' }]} />
          <div className="max-w-2xl mt-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#0f172a] leading-[1.1] mb-6 text-center lg:text-left">Our Services</h1>
            <p className="text-base sm:text-lg text-[#64748b] leading-relaxed text-center lg:text-left">Complete RO water purifier solutions for all brands in Bangalore. From repair to installation, we do it all.</p>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12 justify-center">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${activeCategory === cat ? 'bg-[#2563eb] text-white shadow-sm' : 'bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0]'}`}>
                {cat}
              </button>
            ))}
          </div>
          <div key={activeCategory} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filteredServices.map((service) => {
                const Icon = serviceIcons[service.id] || Wrench;
                return (
                  <div key={service.id} className="group bg-white rounded-2xl border border-[#e2e8f0] p-5 sm:p-6 hover:border-[#bfdbfe] hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#eff6ff] rounded-2xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-[#2563eb] transition-colors">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#2563eb] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0f172a] mb-2">{service.title}</h3>
                    <p className="text-[#64748b] text-sm leading-relaxed mb-4">{service.description}</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8] transition-colors">
                      Book Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-[#f8fafc]">
        <Container>
          <div className="bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-16 text-center text-white">
            <Shield className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 opacity-80" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Not Sure What Service You Need?</h2>
            <p className="text-white/80 text-sm sm:text-lg mb-8 max-w-xl mx-auto">Call us and our expert team in Bangalore will diagnose the issue and recommend the best service for your RO purifier.</p>
            <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-[#2563eb] font-semibold btn-ribbon hover:bg-white/90 transition-all shadow-lg">
              <Phone className="w-5 h-5" />Call Now: {SITE.phoneFormatted}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
