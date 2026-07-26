import { Link } from 'react-router-dom';

import { Award, ArrowRight } from 'lucide-react';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import BrandLogos from '@/components/icons/BrandLogos';
import { BRANDS } from '@/constants';

export default function BrandShowcase() {
  const duplicated = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section className="pt-24 sm:pt-28 lg:pt-28 pb-10 sm:pb-12 lg:pb-14 bg-white relative overflow-hidden">
      <Container>
        <SectionHeading badge="Brands" title="Brands We Service" subtitle="We service all major RO water purifier brands in Bangalore" icon={Award} />

        <div className="relative mt-5 sm:mt-6">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="flex gap-3 sm:gap-6 w-max animate-marquee">
              {duplicated.map((b, i) => {
                const Logo = BrandLogos[b.id];
                return (
                  <Link
                    key={`${b.id}-${i}`}
                    to={`/brands/${b.id}`}
                    className="group flex items-center justify-center rounded-xl sm:rounded-2xl border border-[#f1f5f9] hover:border-[#bfdbfe] hover:shadow-elevated transition-all duration-300 w-[140px] h-[90px] sm:w-[220px] sm:h-[120px] lg:w-[260px] lg:h-[140px] bg-white shrink-0"
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {Logo ? <Logo /> : (
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-white font-bold text-base sm:text-lg" style={{background:b.color}}>
                          {b.name.charAt(0)}
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-6 sm:mt-8 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-[11px] sm:text-[13px] text-[#64748b] font-medium" style={{fontFamily:'var(--font-body)'}}>
              24/7 Service Available Across Bangalore
            </span>
          </div>
          <Link to="/brands" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-semibold btn-ribbon px-6 sm:px-7 py-2.5 sm:py-3 text-[13px] sm:text-[14px] transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98]">
            View All Brands <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
