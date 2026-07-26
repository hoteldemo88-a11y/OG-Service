import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Clock, Headphones, CalendarCheck, ShieldAlert } from 'lucide-react';
import Container from '@/components/common/Container';
import { SITE, SERVICES, BRANDS } from '@/constants';

export default function Footer() {
  const location = useLocation();
  const isBrandDetail = location.pathname.startsWith('/brands/');
  return (
    <footer className="bg-[#f8fafc] border-t border-[#e2e8f0] pb-20 lg:pb-0" role="contentinfo">
      <div className="py-8 sm:py-12 lg:py-16">
        <Container>
          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-12">
            {[
              { icon: Clock, text: 'Doorstep Service in 60 Minutes' },
              { icon: Headphones, text: '24x7 Customer Support' },
              { icon: CalendarCheck, text: 'Book Your Appointment Today' },
              { icon: ShieldAlert, text: 'Avoid Local Repairs' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-center gap-2.5 bg-white px-3 sm:px-4 py-3 rounded-xl border border-[#e2e8f0]">
                  <div className="w-9 h-9 bg-[#eff6ff] rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#2563eb]" />
                  </div>
                  <span className="text-[12px] sm:text-[13px] font-semibold text-[#334155] leading-tight">{item.text}</span>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8">
            {/* Company */}
            <div className="col-span-2 sm:col-span-2 lg:col-span-1">
              {isBrandDetail ? (
                <span className="flex items-center gap-2.5 mb-3 sm:mb-5">
                  <div className="flex items-center justify-center bg-white rounded-lg sm:rounded-xl overflow-hidden h-12 sm:h-14"><img src="/brandlogo.webp" alt="RO Service Center" width="200" height="56" loading="lazy" decoding="async" className="h-full w-auto object-contain mix-blend-multiply" /></div>
                </span>
              ) : (
                <Link to="/" className="flex items-center gap-2.5 mb-3 sm:mb-5">
                  <div className="flex items-center justify-center bg-white rounded-lg sm:rounded-xl overflow-hidden h-12 sm:h-14"><img src="/brandlogo.webp" alt="RO Service Center" width="200" height="56" loading="lazy" decoding="async" className="h-full w-auto object-contain mix-blend-multiply" /></div>
                </Link>
              )}
              <p className="text-[#64748b] text-[12px] sm:text-[14px] leading-relaxed mb-3 sm:mb-5" style={{ fontFamily: 'var(--font-body)' }}>
                We provide expert RO repair and service at your doorstep in Bangalore. Customer satisfaction is our first priority.
              </p>
              <div className="flex items-center gap-2 mb-3 sm:mb-5">
                <div className="flex -space-x-2.5">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg?size=64" alt="Happy customer" width="36" height="36" loading="lazy" decoding="async" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover" />
                  <img src="https://randomuser.me/api/portraits/women/44.jpg?size=64" alt="Happy customer" width="36" height="36" loading="lazy" decoding="async" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover" />
                  <img src="https://randomuser.me/api/portraits/men/75.jpg?size=64" alt="Happy customer" width="36" height="36" loading="lazy" decoding="async" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover" />
                  <img src="https://randomuser.me/api/portraits/women/68.jpg?size=64" alt="Happy customer" width="36" height="36" loading="lazy" decoding="async" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover" />
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#fffbeb] rounded-lg border border-[#fde68a]">
                  <span className="text-[#f59e0b] text-xs sm:text-sm">★</span>
                  <span className="font-semibold text-[12px] sm:text-[13px] text-[#0f172a]" style={{ fontFamily: 'var(--font-heading)' }}>{SITE.googleRating}</span>
                  <span className="text-[#64748b] text-[10px] sm:text-[12px]" style={{ fontFamily: 'var(--font-body)' }}>Google Rating</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-[#0f172a] mb-3 sm:mb-5 text-[12px] sm:text-[13px] uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>Our Services</h3>
              <ul className="space-y-2 sm:space-y-3">
                {SERVICES.slice(0, 6).map((service) => (
                  <li key={service.id}>
                    <Link to={`/services/${service.id}`} className="flex items-center gap-1.5 sm:gap-2 text-[#64748b] hover:text-[#2563eb] text-[12px] sm:text-[13px] transition-colors group" style={{ fontFamily: 'var(--font-body)' }}>
                      <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brands */}
            <div>
              <h3 className="font-semibold text-[#0f172a] mb-3 sm:mb-5 text-[12px] sm:text-[13px] uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>Brands</h3>
              <ul className="space-y-2 sm:space-y-3">
                {BRANDS.map((brand) => (
                  <li key={brand.id}>
                    <Link to={`/brands/${brand.id}`} className="flex items-center gap-1.5 sm:gap-2 text-[#64748b] hover:text-[#2563eb] text-[12px] sm:text-[13px] transition-colors group" style={{ fontFamily: 'var(--font-body)' }}>
                      <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {brand.name} Service
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-[#0f172a] mb-3 sm:mb-5 text-[12px] sm:text-[13px] uppercase tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>Contact Us</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a href={`tel:${SITE.phoneRaw}`} className="flex items-start gap-2 sm:gap-3 text-[#64748b] hover:text-[#2563eb] text-[12px] sm:text-[13px] transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0 text-[#2563eb]" />
                    {SITE.phoneFormatted}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`} className="flex items-start gap-2 sm:gap-3 text-[#64748b] hover:text-[#2563eb] text-[12px] sm:text-[13px] transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0 text-[#2563eb]" />
                    {SITE.email}
                  </a>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-[#64748b] text-[12px] sm:text-[13px]" style={{ fontFamily: 'var(--font-body)' }}>
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0 text-[#2563eb]" />
                  {SITE.address.full}
                </li>

              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="border-t border-[#e2e8f0]">
        <Container>
          <div className="py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-[#64748b] text-[12px] sm:text-[13px]" style={{ fontFamily: 'var(--font-body)' }}>
              © {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
            </p>
            <div className="flex items-center gap-5 sm:gap-6">
              <Link to="/privacy-policy" className="text-[#64748b] hover:text-[#2563eb] text-[12px] sm:text-[13px] transition-colors" style={{ fontFamily: 'var(--font-body)' }}>Privacy Policy</Link>
              <Link to="/terms" className="text-[#64748b] hover:text-[#2563eb] text-[12px] sm:text-[13px] transition-colors" style={{ fontFamily: 'var(--font-body)' }}>Terms & Conditions</Link>
              <Link to="/disclaimer" className="text-[#64748b] hover:text-[#2563eb] text-[12px] sm:text-[13px] transition-colors" style={{ fontFamily: 'var(--font-body)' }}>Disclaimer</Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
