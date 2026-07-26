import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import Container from '@/components/common/Container';
import { SITE } from '@/constants';

export default function ContactCTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"><div className="absolute -top-20 -right-20 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-white/[0.06] blur-[60px] rounded-full" /></div>
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[22px] sm:text-[28px] lg:text-[34px] font-bold mb-2 sm:mb-3 tracking-[-0.02em]">Still Facing RO Problems?</h2>
          <p className="text-white/95 text-[13px] sm:text-[16px] mb-6 sm:mb-8">Don&apos;t worry! We are here to help you.</p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2.5 sm:gap-3">
            <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white text-[#2563eb] font-semibold btn-ribbon px-5 sm:px-7 py-3 sm:py-4 text-[13px] sm:text-[15px] hover:bg-white/90 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" /> Call Now
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur border border-white/20 text-white font-semibold btn-ribbon px-5 sm:px-7 py-3 sm:py-4 text-[13px] sm:text-[15px] hover:bg-white/20 transition-all active:scale-[0.98]">
              Book Service <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
