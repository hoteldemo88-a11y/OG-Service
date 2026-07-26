import { motion } from 'framer-motion';
import { CheckCircle, Shield } from 'lucide-react';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { WHY_CHOOSE_US } from '@/constants';
import { whyChooseIcons } from '@/utils/animations';

export default function WhyChooseUs() {
  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-[#f0f4ff] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"><div className="absolute top-0 left-1/4 w-[300px] sm:w-[400px] h-[200px] bg-[#2563eb]/[0.04] blur-[80px] rounded-full" /></div>
      <Container className="relative z-10">
        <SectionHeading badge="Why Choose Us" title="Why Choose Our Service" subtitle="Trusted by thousands of customers in Bangalore for reliable RO service" icon={Shield} />
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = whyChooseIcons[item.icon] || CheckCircle;
            return (
              <motion.div key={item.title} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}} className="text-center group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:shadow-elevated group-hover:bg-[#eff6ff] transition-all duration-300 border border-[#e2e8f0]">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563eb]" />
                </div>
                <p className="font-semibold text-[#0f172a] text-[10px] sm:text-[13px] mb-0.5 leading-tight" style={{fontFamily:'var(--font-heading)'}}>{item.title}</p>
                <p className="text-[#64748b] text-[9px] sm:text-[11px] leading-snug hidden sm:block" style={{fontFamily:'var(--font-body)'}}>{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
