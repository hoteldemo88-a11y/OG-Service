import { Link } from 'react-router-dom';

import { Award } from 'lucide-react';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import BrandLogos from '@/components/icons/BrandLogos';
import { BRANDS } from '@/constants';

export default function BrandShowcase() {
  const duplicated = [...BRANDS, ...BRANDS];

  return (
    <section className="pt-24 sm:pt-28 lg:pt-28 pb-10 sm:pb-12 lg:pb-14 bg-white relative overflow-hidden">
      <Container>
        <SectionHeading badge="Brands" title="Brands We Service" subtitle="We service all major RO water purifier brands in Bangalore" icon={Award} />

        <div className="relative mt-5 sm:mt-6">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="flex gap-3 sm:gap-6">
              {duplicated.map((b, i) => {
                const Logo = BrandLogos[b.id];
                return (
                  <Link
                    key={`${b.id}-${i}`}
                    to={`/brands/${b.id}`}
                    className="group flex items-center justify-center rounded-xl sm:rounded-2xl border border-[#f1f5f9] hover:border-[#bfdbfe] hover:shadow-elevated transition-all duration-300 w-[130px] h-[80px] sm:w-[220px] sm:h-[120px] lg:w-[260px] lg:h-[140px] bg-white shrink-0"
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300 scale-65 sm:scale-90 lg:scale-100">
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

        <div className="flex items-center justify-center mt-6 sm:mt-8 gap-2 sm:gap-2">
          <span className="w-2 h-2 sm:w-2 sm:h-2 rounded-full bg-[#22c55e] animate-pulse" />
          <span className="text-[11px] sm:text-[13px] text-[#64748b] font-medium" style={{fontFamily:'var(--font-body)'}}>
            24/7 Service Available Across Bangalore
          </span>
        </div>
      </Container>
    </section>
  );
}
