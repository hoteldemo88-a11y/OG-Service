import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Shield, CheckCircle } from 'lucide-react';
import SEO from '@/components/common/SEO';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';
import FAQAccordion from '@/components/common/FAQAccordion';
import { SITE, FAQS } from '@/constants';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', brand: '', service: '', location: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => { e.preventDefault(); setSubmitting(true); setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1500); };
  const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

  return (
    <>
      <SEO title="Contact Us | RO Service Center Bangalore" description="Contact RO Service Center for expert RO water purifier repair, installation, and maintenance services in Bangalore. Call +91 98765 43210 or fill the form." url="/contact" />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 bg-[#f8fafc] overflow-hidden">
        <Container className="relative z-10">
          <Breadcrumb items={[{ label: 'Contact Us' }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mt-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eff6ff] border border-[#bfdbfe] mb-5">
              <span className="text-[12px] font-medium text-[#2563eb]">We're here to help</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#0f172a] leading-[1.1] mb-4 text-center lg:text-left">
              Got a Question?<br className="hidden sm:block" /> Let's Talk.
            </h1>
            <p className="text-base sm:text-lg text-[#64748b] leading-relaxed text-center lg:text-left">
              Whether you need RO repair, want to book a service, or just have a query — call us or fill the form below. We typically respond within a few hours.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Form + Info */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-2">Book a Service in Bangalore</h2>
              <p className="text-[#64748b] text-sm sm:text-base mb-6 sm:mb-8">Fill out the form and our team will get back to you shortly.</p>
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-2xl p-8 sm:p-10 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#22c55e] rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" /></div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] mb-2">Thank You!</h3>
                  <p className="text-[#64748b] text-sm sm:text-base">Your message has been sent successfully. We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" aria-label="Contact form">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div><label htmlFor="contact-name" className="block text-xs sm:text-sm font-medium text-[#334155] mb-1.5">Full Name *</label><input id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#e2e8f0] rounded-xl text-sm focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]/50 outline-none transition-all" required /></div>
                    <div><label htmlFor="contact-phone" className="block text-xs sm:text-sm font-medium text-[#334155] mb-1.5">Phone Number *</label><input id="contact-phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#e2e8f0] rounded-xl text-sm focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]/50 outline-none transition-all" required /></div>
                  </div>
                  <div><label htmlFor="contact-email" className="block text-xs sm:text-sm font-medium text-[#334155] mb-1.5">Email Address</label><input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email address" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#e2e8f0] rounded-xl text-sm focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]/50 outline-none transition-all" /></div>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div><label htmlFor="contact-brand" className="block text-xs sm:text-sm font-medium text-[#334155] mb-1.5">RO Brand *</label><select id="contact-brand" name="brand" value={formData.brand} onChange={handleChange} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#e2e8f0] rounded-xl text-sm focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]/50 outline-none transition-all text-[#64748b]" required><option value="">Select brand</option><option value="kent">Kent</option><option value="aquaguard">Aquaguard</option><option value="pureit">Pureit</option><option value="ao-smith">AO Smith</option><option value="lg">LG</option><option value="other">Other</option></select></div>
                    <div><label htmlFor="contact-service" className="block text-xs sm:text-sm font-medium text-[#334155] mb-1.5">Service Type *</label><select id="contact-service" name="service" value={formData.service} onChange={handleChange} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#e2e8f0] rounded-xl text-sm focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]/50 outline-none transition-all text-[#64748b]" required><option value="">Select service</option><option value="repair">RO Repair</option><option value="installation">Installation</option><option value="filter">Filter Replacement</option><option value="membrane">Membrane Replacement</option><option value="amc">AMC Plan</option><option value="maintenance">Periodic Maintenance</option></select></div>
                  </div>
                  <div><label htmlFor="contact-location" className="block text-xs sm:text-sm font-medium text-[#334155] mb-1.5">Your Location in Bangalore *</label><input id="contact-location" type="text" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Koramangala, Whitefield" className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#e2e8f0] rounded-xl text-sm focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]/50 outline-none transition-all" required /></div>
                  <div><label htmlFor="contact-message" className="block text-xs sm:text-sm font-medium text-[#334155] mb-1.5">Message</label><textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} placeholder="Describe your issue (optional)" rows={4} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#e2e8f0] rounded-xl text-sm focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]/50 outline-none transition-all resize-none" /></div>
                  <button type="submit" disabled={submitting} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#2563eb] text-white font-semibold btn-ribbon hover:bg-[#1d4ed8] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm">
                    {submitting ? 'Sending...' : <><Send className="w-4 h-4" />Send Message</>}
                  </button>
                  <p className="text-xs text-[#94a3b8] flex items-center gap-1"><Shield className="w-3 h-3" /> We respect your privacy. No spam ever.</p>
                </form>
              )}
            </div>
            <div className="lg:col-span-2">
              <div className="space-y-5 sm:space-y-6">
                <div className="bg-[#f8fafc] rounded-2xl p-5 sm:p-6">
                  <h3 className="font-bold text-[#0f172a] mb-4 text-[15px] sm:text-base">Contact Information</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <a href={`tel:${SITE.phoneRaw}`} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl border border-[#e2e8f0] hover:border-[#bfdbfe] hover:shadow-sm transition-all">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#eff6ff] rounded-lg flex items-center justify-center shrink-0"><Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563eb]" /></div>
                      <div><p className="text-xs sm:text-sm text-[#94a3b8] mb-0.5">Call Us</p><p className="font-semibold text-[#0f172a] text-sm">{SITE.phoneFormatted}</p></div>
                    </a>
                    <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl border border-[#e2e8f0] hover:border-[#bfdbfe] hover:shadow-sm transition-all">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#f0fdf4] rounded-lg flex items-center justify-center shrink-0"><Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#22c55e]" /></div>
                      <div><p className="text-xs sm:text-sm text-[#94a3b8] mb-0.5">Email Us</p><p className="font-semibold text-[#0f172a] text-sm">{SITE.email}</p></div>
                    </a>
                    <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl border border-[#e2e8f0]">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#eff6ff] rounded-lg flex items-center justify-center shrink-0"><MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563eb]" /></div>
                      <div><p className="text-xs sm:text-sm text-[#94a3b8] mb-0.5">Visit Us</p><p className="font-semibold text-[#0f172a] text-sm">{SITE.address.full}</p></div>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden h-48 sm:h-64 border border-[#e2e8f0]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.596197075276!2d77.6245!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae145e0e7b2e5d%3A0x5db5f4e7e3c5e5e5!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="RO Service Center location on Google Maps - Koramangala, Bangalore"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-[#f8fafc]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="inline-block px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#2563eb] bg-[#eff6ff] border border-[#bfdbfe] rounded-full mb-3 sm:mb-4">FAQ</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f172a]">Frequently Asked Questions</h2>
            </div>
            <FAQAccordion items={FAQS} />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] text-white">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="text-center sm:text-left"><h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1">Need Immediate Assistance?</h2><p className="text-white/80 text-sm sm:text-base">Call us now for instant support in Bangalore</p></div>
            <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-[#2563eb] font-semibold btn-ribbon hover:bg-white/90 transition-all shadow-lg shrink-0">
              <Phone className="w-5 h-5" />{SITE.phoneFormatted}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
