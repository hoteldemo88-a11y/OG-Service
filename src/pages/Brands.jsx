import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Shield, Check } from 'lucide-react';
import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';
import BrandLogos from '@/components/icons/BrandLogos';
import { BRANDS, SITE } from '@/constants';

export default function Brands() {
  return (
    <>
      <SEO title="Brands We Service" description="Expert RO water purifier service for all major brands - Kent, Aquaguard, Pureit, AO Smith, LG. Genuine spare parts and certified technicians." url="/brands" />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 bg-[#f8fafc] overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-2xl mt-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#0f172a] leading-[1.1] mb-6 text-center lg:text-left">Brands We Service</h1>
            <p className="text-base sm:text-lg text-[#64748b] leading-relaxed text-center lg:text-left">We provide expert service for all major RO water purifier brands. Choose your brand for specialized service.</p>
          </div>
        </Container>
      </section>

      {/* Brands Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {BRANDS.map((brand) => {
              const Logo = BrandLogos[brand.id];
              return (
                <div key={brand.id}>
                  <Link to={`/brands/${brand.id}`} className="group block bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="bg-[#eff6ff] p-6 sm:p-8 flex items-center justify-center h-32 sm:h-40">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {Logo ? <Logo /> : (
                          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#2563eb] rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-bold text-white">{brand.name.charAt(0)}</div>
                        )}
                      </div>
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] mb-1">{brand.name}</h3>
                      <p className="text-[#64748b] text-xs sm:text-sm mb-3">{brand.tagline}</p>
                      <p className="text-[#64748b] text-xs sm:text-sm leading-relaxed mb-4">{brand.description}</p>
                      <ul className="space-y-2 mb-5">
                        {brand.services.slice(0, 3).map((service) => (
                          <li key={service} className="flex items-center gap-2 text-xs sm:text-sm text-[#64748b]">
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#22c55e] shrink-0" />{service}
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] group-hover:text-[#1d4ed8] transition-colors">
                        View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Can't Find Your Brand?</h2>
            <p className="text-white/80 text-sm sm:text-lg mb-8 max-w-xl mx-auto">We service all RO water purifier brands. Call us to confirm service availability for your brand.</p>
            <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-[#2563eb] font-semibold btn-ribbon hover:bg-white/90 transition-all shadow-lg">
              <Phone className="w-5 h-5" />Call Now: {SITE.phoneFormatted}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
