import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, HelpCircle } from 'lucide-react';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import FAQAccordion from '@/components/common/FAQAccordion';
import { FAQS, SERVICE_AREAS } from '@/constants';

export default function FAQSection() {
  const [showAll, setShowAll] = useState(false);
  const phoneAreas = showAll ? SERVICE_AREAS : SERVICE_AREAS.slice(0, 6);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#f8fafc]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-10 lg:gap-12">

          {/* FAQ */}
          <div className="text-center lg:text-left">
            <SectionHeading badge="FAQ" title="Frequently Asked Questions" center={false} className="lg:!text-left [&>*]:text-center lg:[&>*]:text-left" icon={HelpCircle} />
            <div className="mt-4 sm:mt-5"><FAQAccordion items={FAQS} /></div>
            <div className="mt-5">
              <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#2563eb] text-[#2563eb] font-semibold btn-ribbon-sm text-[13px] hover:bg-[#eff6ff] transition-all duration-300">
                View All FAQs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Service Areas */}
          <div className="text-center lg:text-left">
            <div className="mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#2563eb] bg-[#eff6ff] border border-[#bfdbfe] rounded-full mb-3">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                Service Areas
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0a1a3a] mb-1">Our Service Areas in Bangalore</h3>
              <p className="text-[#64748b] text-[13px] sm:text-[14px]">We provide doorstep RO service across all major areas in Bangalore.</p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
              {phoneAreas.map(a => (
                <div key={a} className="flex items-center justify-center lg:justify-start gap-2 px-3 py-2 sm:py-2.5 bg-white rounded-xl border border-[#f1f5f9] text-[11px] sm:text-[13px] text-[#334155] hover:border-[#bfdbfe] hover:shadow-soft transition-all duration-300">
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#2563eb] shrink-0" />{a}
                </div>
              ))}
            </div>

            {SERVICE_AREAS.length > 6 && (
              <button onClick={() => setShowAll(!showAll)} className="sm:hidden mt-3 text-[13px] font-semibold text-[#2563eb] hover:text-[#1d4ed8] transition-colors">
                {showAll ? 'Show Less' : `Show All ${SERVICE_AREAS.length} Areas`}
              </button>
            )}

            <div className="hidden sm:grid grid-cols-2 gap-2.5 mt-2.5">
              {SERVICE_AREAS.slice(6).map(a => (
                <div key={a} className="flex items-center gap-2 px-3.5 py-2.5 bg-white rounded-xl border border-[#f1f5f9] text-[13px] text-[#334155] hover:border-[#bfdbfe] hover:shadow-soft transition-all duration-300">
                  <MapPin className="w-3.5 h-3.5 text-[#2563eb] shrink-0" />{a}
                </div>
              ))}
            </div>

            <div className="mt-5">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-semibold btn-ribbon-sm px-5 py-2.5 text-[13px] transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30">
                View All Areas <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
