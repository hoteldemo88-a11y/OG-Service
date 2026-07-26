import { Link } from 'react-router-dom';

import { AlertTriangle } from 'lucide-react';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { problems } from '@/utils/animations';

export default function CommonProblems() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <Container>
        <SectionHeading badge="Common Issues" title="Common RO Problems We Fix" subtitle="Facing any of these issues? We can help!" icon={AlertTriangle} />
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 gap-2.5 sm:gap-4">
          {problems.map((p) => (
            <div key={p.label} className="flex flex-col items-center text-center group">
              <div className="w-10 h-10 sm:w-13 sm:h-13 bg-[#f8fafc] rounded-full flex items-center justify-center mb-1.5 sm:mb-2 border border-[#f1f5f9] group-hover:border-[#bfdbfe] group-hover:bg-[#eff6ff] transition-all duration-300">
                <p.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#94a3b8] group-hover:text-[#2563eb] transition-colors" />
              </div>
              <span className="text-[9px] sm:text-[11px] text-[#475569] font-medium leading-tight">{p.label}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-10">
          <Link to="/contact" className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-semibold btn-ribbon px-6 sm:px-7 py-2.5 sm:py-3 text-[13px] sm:text-[14px] transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98]">
            Book Service Now
          </Link>
        </div>
      </Container>
    </section>
  );
}
