
import { ListOrdered } from 'lucide-react';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { steps } from '@/utils/animations';

export default function ServiceProcess() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#f8fafc] relative">
      <Container>
        <SectionHeading badge="How It Works" title="Our Simple Service Process" subtitle="Get your RO serviced in 5 easy steps" icon={ListOrdered} />
        <div className="grid grid-cols-5 gap-1.5 sm:gap-4 lg:gap-8 relative">
          <div className="hidden sm:block absolute top-8 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-[#bfdbfe] to-transparent z-0" />
          {steps.map((s) => (
            <div key={s.title} className="relative z-10 text-center">
              <div className="relative inline-block mb-2 sm:mb-3">
                <div className="w-9 h-9 sm:w-14 sm:h-14 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-lg sm:rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <s.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full border-2 border-[#bfdbfe] flex items-center justify-center text-[8px] sm:text-[11px] font-bold text-[#2563eb] shadow-soft">{s.num}</span>
              </div>
              <p className="font-semibold text-[#0a1a3a] text-[9px] sm:text-[13px] mb-0.5 leading-tight">{s.title}</p>
              <p className="text-[8px] sm:text-[11px] text-[#64748b] leading-snug hidden sm:block">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
