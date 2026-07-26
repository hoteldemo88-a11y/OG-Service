import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Home } from 'lucide-react';
import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';
import { SITE } from '@/constants';

export default function ThankYou() {
  return (
    <>
      <SEO title="Thank You" description="Thank you for contacting RO Service Center. We will get back to you shortly." url="/thank-you" />

      <section className="min-h-screen flex items-center justify-center bg-[#f8fafc] py-20">
        <Container>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-lg mx-auto text-center">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-14 shadow-xl border border-[#e2e8f0]">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', damping: 10, stiffness: 100, delay: 0.2 }} className="w-16 h-16 sm:w-20 sm:h-20 bg-[#22c55e] rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </motion.div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-3">Thank You!</h1>
              <p className="text-[#64748b] text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">Your message has been received successfully. Our team will review your request and get back to you within 2-4 hours.</p>
              <div className="bg-[#f8fafc] rounded-xl p-4 sm:p-5 mb-6 sm:mb-8">
                <p className="text-xs sm:text-sm text-[#64748b] mb-2">Need immediate assistance?</p>
                <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center gap-2 text-lg sm:text-xl font-bold text-[#2563eb] hover:text-[#1d4ed8]">
                  <Phone className="w-5 h-5" />{SITE.phoneFormatted}
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/" className="flex-1 inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-[#2563eb] text-white font-semibold btn-ribbon hover:bg-[#1d4ed8] transition-all">
                  <Home className="w-4 h-4" />Back to Home
                </Link>
                <a href={`tel:${SITE.phoneRaw}`} className="flex-1 inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 border-2 border-[#2563eb] text-[#2563eb] font-semibold btn-ribbon hover:bg-[#eff6ff] transition-all">
                  <Phone className="w-4 h-4" />Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
