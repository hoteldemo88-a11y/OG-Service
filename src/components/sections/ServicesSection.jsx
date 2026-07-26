import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Wrench } from 'lucide-react';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { SERVICES } from '@/constants';
import { serviceIcons } from '@/utils/animations';

export default function ServicesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#f8fafc] relative">
      <Container>
        <SectionHeading badge="Services" title="Our Services" subtitle="Professional RO water purifier repair, installation, maintenance, AMC plans, and filter replacement services across Bangalore." icon={Wrench} />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {SERVICES.map((svc, i) => {
            const Icon = serviceIcons[svc.id] || Wrench;
            return (
              <motion.div key={svc.id} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.04}}>
                <Link to={`/services/${svc.id}`} className="group block bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-[#f1f5f9] hover:border-[#bfdbfe] hover:shadow-elevated transition-all duration-300 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#eff6ff] rounded-xl flex items-center justify-center mx-auto mb-2.5 sm:mb-3 group-hover:bg-[#2563eb] transition-colors duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563eb] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="font-semibold text-[#0a1a3a] text-[12px] sm:text-[13px] group-hover:text-[#2563eb] transition-colors mb-0.5 leading-tight">{svc.title}</p>
                  <p className="text-[10px] sm:text-[11px] text-[#94a3b8] leading-snug hidden sm:block">{svc.description}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
        <div className="text-center mt-8 sm:mt-10">
          <Link to="/services" className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-semibold btn-ribbon px-6 sm:px-7 py-2.5 sm:py-3 text-[13px] sm:text-[14px] transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98]">
            View All Services <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
