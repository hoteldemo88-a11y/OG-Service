import { useState, useEffect } from 'react';
import { Phone, Mail, Users, MapPin, ChevronDown, ArrowRight, Shield } from 'lucide-react';
import Container from '@/components/common/Container';
import { BRANDS, SITE } from '@/constants';

const heroImages = ['/hero image 1.webp', '/hero image 2.webp', '/hero image 3.webp'];

export default function HeroSection() {
  const [form, setForm] = useState({ name: '', phone: '', brand: '', location: '' });
  const [loading, setLoading] = useState(false);
  const [heroIdx, setHeroIdx] = useState(0);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => { e.preventDefault(); setLoading(true); setTimeout(() => { setLoading(false); window.location.href = '/thank-you'; }, 1200); };

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[500px] lg:min-h-[calc(100vh-36px)] flex items-end lg:items-center">
      <div className="absolute inset-0 hidden lg:block">
        <img src="/herobg.webp" alt="RO water purifier service background" className="w-full h-full object-cover" width="1920" height="1080" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/60" />
      </div>

      <Container className="relative z-10 w-full py-10 sm:py-16 lg:py-0 lg:min-h-[calc(100vh-36px)] flex items-center">
        <div className="w-full lg:grid lg:grid-cols-[1fr_400px] lg:gap-12 lg:items-center">

          {/* ── Phone: Image + Badge + Buttons ── */}
          <div className="lg:hidden pt-16 pb-6 text-center">
            <div className="mx-4 mb-4 relative overflow-hidden rounded-2xl">
              {heroImages.map((img, i) => (
                <img
                  key={img}
                  src={img}
                  alt="RO Service Technician"
                  width="800"
                  height="450"
                  sizes="(max-width: 1023px) 100vw, 0px"
                  decoding="async"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  fetchPriority={i === 0 ? 'high' : 'low'}
                  className={`w-full h-auto object-cover object-left rounded-2xl shadow-2xl shadow-blue-500/20 transition-opacity duration-700 ease-in-out ${i === heroIdx ? 'opacity-100 relative' : 'opacity-0 absolute inset-0'}`}
                />
              ))}
              <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eff6ff]/90 backdrop-blur-sm border border-[#bfdbfe]">
                <MapPin className="w-3 h-3 text-[#2563eb]" />
                <span className="text-[11px] font-medium text-[#2563eb]">Bangalore, India</span>
              </div>
              <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
                {heroImages.map((_, i) => (
                  <span key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === heroIdx ? 'bg-[#2563eb] w-5' : 'bg-white/70'}`} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 mx-4 mt-4">
              <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold btn-ribbon px-6 py-4 text-[15px] transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]">
                <Phone className="w-5 h-5" />Call Now
              </a>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f8fafc] text-[#334155] font-semibold btn-ribbon px-6 py-4 text-[15px] border border-[#e2e8f0] hover:border-[#cbd5e1] transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]">
                <Mail className="w-5 h-5 text-[#2563eb]" />Email Us
              </a>
            </div>
          </div>

          {/* ── LEFT: Content (desktop only, CSS animations) ── */}
          <div className="hidden lg:block pt-16 sm:pt-20 lg:pt-0 pb-6 lg:pb-0 text-center lg:text-left">
            <div className="animate-[fadeUp_0.5s_ease-out_0s_both]">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eff6ff] border border-[#bfdbfe] mb-3 sm:mb-5">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#2563eb]" />
                <span className="text-[11px] sm:text-[12px] font-medium text-[#2563eb]">Bangalore, India</span>
              </div>
            </div>

            <h1 className="text-[28px] sm:text-[42px] lg:text-[54px] xl:text-[60px] font-extrabold text-[#0f172a] leading-[1.1] tracking-[-0.02em] mb-3 sm:mb-4 animate-[fadeUp_0.5s_ease-out_0.1s_both]">
              Your RO Not Working?<br /> We Fix It Today.
            </h1>

            <p className="text-[13px] sm:text-[15px] lg:text-[16px] text-[#64748b] max-w-[500px] leading-relaxed mb-4 sm:mb-6 mx-auto lg:mx-0 animate-[fadeUp_0.5s_ease-out_0.2s_both]">
              Getting dirty water, low pressure, or strange noise from your RO? Our trained technicians come to your home in Bangalore and fix it the same day.
            </p>

            <div className="flex flex-col lg:items-start lg:gap-2.5 mb-5 sm:mb-7 text-center lg:text-left animate-[fadeUp_0.5s_ease-out_0.3s_both]">
              {[
                'Same Day Service Available',
                'Certified & Trained Engineers',
                '100% Genuine Spare Parts',
                'Service Warranty Included',
              ].map((item) => (
                <div key={item} className="flex items-center justify-center lg:justify-start gap-1.5">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center text-[9px] sm:text-[11px] text-[#22c55e] font-bold shrink-0">✓</span>
                  <span className="text-[11px] sm:text-[13px] font-medium text-[#334155]">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 justify-center lg:justify-start animate-[fadeUp_0.5s_ease-out_0.4s_both]">
              <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold btn-ribbon px-6 py-4 text-[15px] transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]">
                <Phone className="w-5 h-5" />
                Call Now — {SITE.phoneFormatted}
              </a>
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f8fafc] text-[#334155] font-semibold btn-ribbon px-6 py-4 text-[15px] border border-[#e2e8f0] hover:border-[#cbd5e1] transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]">
                <Mail className="w-5 h-5 text-[#2563eb]" />
                {SITE.email}
              </a>
            </div>
          </div>

          {/* ── RIGHT: Booking Form ── */}
          <div className="relative pb-12 lg:pb-0 max-w-[400px] mx-auto lg:max-w-none w-full animate-[slideIn_0.6s_ease-out_0.2s_both]">
            <div className="glass-strong rounded-2xl sm:rounded-[24px] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] border border-white/60 p-5 sm:p-6">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
                <div className="w-9 h-9 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center shadow-md shadow-blue-500/20">
                  <Phone className="w-4 h-4 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-[15px] sm:text-[17px] font-bold text-[#0a1a3a]" style={{fontFamily:'var(--font-heading)'}}>Book Your Service</h3>
                  <p className="text-[11px] sm:text-[11px] text-[#64748b]" style={{fontFamily:'var(--font-body)'}}>Fill the form &amp; we'll call you back</p>
                </div>
              </div>

              <form onSubmit={submit} className="space-y-3" aria-label="Book a service">
                <div className="relative group">
                  <label htmlFor="hero-name" className="block text-[11px] sm:text-[11px] font-semibold text-[#64748b] mb-1.5 uppercase tracking-wider" style={{fontFamily:'var(--font-heading)'}}>Full Name</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#cbd5e1] group-focus-within:text-[#2563eb] transition-colors" aria-hidden="true" />
                    <input id="hero-name" type="text" placeholder="John Doe" value={form.name} onChange={set('name')} required className="w-full pl-10 pr-4 py-3 bg-white/70 border border-[#e2e8f0] rounded-xl text-[14px] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/15 focus:border-[#2563eb]/40 focus:bg-white transition-all" style={{fontFamily:'var(--font-body)'}} />
                  </div>
                </div>

                <div className="relative group">
                  <label htmlFor="hero-phone" className="block text-[11px] sm:text-[11px] font-semibold text-[#64748b] mb-1.5 uppercase tracking-wider" style={{fontFamily:'var(--font-heading)'}}>Mobile Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#cbd5e1] group-focus-within:text-[#2563eb] transition-colors" aria-hidden="true" />
                    <input id="hero-phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={set('phone')} required className="w-full pl-10 pr-4 py-3 bg-white/70 border border-[#e2e8f0] rounded-xl text-[14px] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/15 focus:border-[#2563eb]/40 focus:bg-white transition-all" style={{fontFamily:'var(--font-body)'}} />
                  </div>
                </div>

                <div className="relative group">
                  <label htmlFor="hero-brand" className="block text-[11px] sm:text-[11px] font-semibold text-[#64748b] mb-1.5 uppercase tracking-wider" style={{fontFamily:'var(--font-heading)'}}>Brand</label>
                  <div className="relative">
                    <select id="hero-brand" value={form.brand} onChange={set('brand')} required className="w-full px-3 py-3 bg-white/70 border border-[#e2e8f0] rounded-xl text-[13px] text-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/15 focus:border-[#2563eb]/40 focus:bg-white transition-all appearance-none" style={{fontFamily:'var(--font-body)'}}>
                      <option value="">Select Brand</option>
                      {BRANDS.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#cbd5e1] pointer-events-none" aria-hidden="true" />
                  </div>
                </div>

                <div className="relative group">
                  <label htmlFor="hero-location" className="block text-[11px] sm:text-[11px] font-semibold text-[#64748b] mb-1.5 uppercase tracking-wider" style={{fontFamily:'var(--font-heading)'}}>Your Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#cbd5e1] group-focus-within:text-[#2563eb] transition-colors" aria-hidden="true" />
                    <input id="hero-location" type="text" placeholder="e.g. Koramangala, Bangalore" value={form.location} onChange={set('location')} required className="w-full pl-10 pr-4 py-3 bg-white/70 border border-[#e2e8f0] rounded-xl text-[14px] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2563eb]/15 focus:border-[#2563eb]/40 focus:bg-white transition-all" style={{fontFamily:'var(--font-body)'}} />
                  </div>
                </div>

                <button type="submit" disabled={loading} className="w-full py-3.5 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#1d4ed8] hover:to-[#1e40af] text-white font-semibold btn-ribbon text-[14px] transition-all duration-300 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-60 disabled:cursor-wait active:scale-[0.98] flex items-center justify-center gap-2" style={{fontFamily:'var(--font-heading)'}}>
                  {loading ? 'Booking...' : <><span>Book Now</span><ArrowRight className="w-4 h-4" /></>}
                </button>

                <p className="text-center text-[11px] text-[#64748b] flex items-center justify-center gap-1.5 pt-0.5" style={{fontFamily:'var(--font-body)'}}>
                  <Shield className="w-3 h-3 text-[#22c55e]" aria-hidden="true" /> We respect your privacy
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
