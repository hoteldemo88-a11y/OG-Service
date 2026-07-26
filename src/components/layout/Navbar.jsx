import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, MapPin, Home, Info, Wrench, Award, Shield, FileText } from 'lucide-react';
import Container from '@/components/common/Container';
import { NAV_LINKS, SITE } from '@/constants';

const navIcons = { Home, Info, Wrench, Award, Phone, Shield, FileText };

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const isBrandDetail = location.pathname.startsWith('/brands/');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); setActiveDropdown(null); }, [location]);
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* ── Top Bar ── */}
      {!isBrandDetail && (
      <div className="hidden lg:block bg-[#f0f4ff] border-b border-[#e2e8f0] text-[12px] relative z-[60]" style={{ fontFamily: 'var(--font-body)' }}>
        <Container>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-7 text-[#475569]">
              <span className="flex items-center gap-1.5"><Phone className="w-3 h-3 text-[#2563eb]" /> 24x7 Customer Support</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-[#2563eb]" /> Bangalore, India</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3 h-3 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                100% Genuine Parts
              </span>
            </div>
            <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-1.5 font-semibold hover:text-[#60a5fa] transition-colors">
              Call Now {SITE.phoneFormatted}
            </a>
          </div>
        </Container>
      </div>
      )}

      {/* ── Floating Navbar ── */}
      <header className={`fixed left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'top-0 pt-0' : 'top-0 lg:top-[36px]'}`} role="banner">
        <div className={`mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 transition-all duration-500 ${scrolled ? 'pt-2' : 'pt-3'}`}>
          <nav className={`flex items-center justify-between h-[64px] rounded-2xl px-5 transition-all duration-500 ${scrolled ? 'bg-white shadow-elevated border border-[#e2e8f0]' : 'bg-white border border-[#e2e8f0] shadow-soft'}`} aria-label="Main navigation">

            {/* Logo */}
            {location.pathname.startsWith('/brands/') ? (
              <span className="flex items-center gap-2.5 shrink-0 group">
                <div className="flex items-center justify-center bg-white rounded-xl overflow-hidden h-14 sm:h-16"><img src="/brandlogo.webp" alt="RO Service Now" width="200" height="64" decoding="async" className="h-full w-auto object-contain mix-blend-multiply" /></div>
              </span>
            ) : (
              <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
                <div className="flex items-center justify-center bg-white rounded-xl overflow-hidden h-14 sm:h-16"><img src="/brandlogo.webp" alt="RO Service Now" width="200" height="64" decoding="async" className="h-full w-auto object-contain mix-blend-multiply" /></div>
              </Link>
            )}

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.filter((link) => !isBrandDetail || link.name !== 'Brands').map((link) => {
                const Icon = navIcons[link.icon];
                const isOpen = link.children && activeDropdown === link.name;
                return (
                  <div key={link.name} className="relative" onMouseEnter={() => link.children && setActiveDropdown(link.name)} onMouseLeave={() => setActiveDropdown(null)}>
                    <Link
                      to={link.path}
                      className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[13.5px] font-medium transition-colors ${location.pathname === link.path || (link.children && location.pathname.startsWith(link.path)) ? 'text-[#2563eb] bg-[#eff6ff]' : 'text-[#475569] hover:text-[#0a1a3a] hover:bg-[#f8fafc]'}`}
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {Icon && <Icon className="w-3.5 h-3.5" />}
                      {link.name}
                      {link.children && <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />}
                    </Link>
                    {link.children && (
                      <div className={`absolute top-full left-0 mt-2 w-52 glass-strong rounded-xl shadow-elevated border border-white/60 py-1.5 z-50 transition-all duration-150 ease-out ${isOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 translate-y-1 scale-[0.97] pointer-events-none'}`}>
                        {link.children.map((child) => (
                          <Link key={child.path} to={child.path} className="block px-4 py-2.5 text-[13px] text-[#475569] hover:text-[#2563eb] hover:bg-[#eff6ff]/60 transition-colors mx-1.5 rounded-lg" style={{ fontFamily: 'var(--font-body)' }}>{child.name}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white text-[13.5px] font-semibold px-4 py-2 btn-ribbon-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 active:scale-[0.97] lg:px-5 lg:py-2.5" style={{ fontFamily: 'var(--font-heading)' }}>
                <Phone className="w-3.5 h-3.5" />
                Book Now
              </a>
              <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-xl text-[#475569] hover:bg-[#f1f5f9] transition-colors" aria-label="Menu">
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* ── Mobile Drawer (CSS-only animations) ── */}
      <div className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[55] lg:hidden transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)} />
      <div className={`fixed top-0 right-0 bottom-0 w-full max-w-[360px] bg-white z-[60] lg:hidden shadow-2xl transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#f1f5f9]">
              {location.pathname.startsWith('/brands/') ? (
                <span className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center bg-white rounded-xl overflow-hidden h-14"><img src="/brandlogo.webp" alt="RO Service Now" width="200" height="56" decoding="async" className="h-full w-auto object-contain mix-blend-multiply" /></div>
                </span>
              ) : (
                <Link to="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
                  <div className="flex items-center justify-center bg-white rounded-xl overflow-hidden h-14"><img src="/brandlogo.webp" alt="RO Service Now" width="200" height="56" decoding="async" className="h-full w-auto object-contain mix-blend-multiply" /></div>
                </Link>
              )}
            <button onClick={() => setIsOpen(false)} className="p-2 rounded-xl text-[#94a3b8] hover:bg-[#f1f5f9] transition-colors" aria-label="Close menu"><X className="w-5 h-5" /></button>
          </div>
          <nav className="flex-1 overflow-y-auto px-4 py-5">
            <div className="space-y-0.5">
              {NAV_LINKS.filter((link) => !isBrandDetail || link.name !== 'Brands').map((link) => {                const Icon = navIcons[link.icon];
                return (
                  <div key={link.name}>
                    <Link to={link.path} className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${location.pathname === link.path ? 'text-[#2563eb] bg-[#eff6ff]' : 'text-[#334155] hover:bg-[#f8fafc]'}`} style={{ fontFamily: 'var(--font-heading)' }} onClick={() => setIsOpen(false)}>
                      {Icon && <Icon className="w-4 h-4" />}
                      {link.name}
                    </Link>
                    {link.children && (
                      <div className="ml-4 mt-1 space-y-0.5">
                        {link.children.map((child) => (
                          <Link key={child.path} to={child.path} className="block px-4 py-2 rounded-lg text-[13px] text-[#64748b] hover:text-[#2563eb] hover:bg-[#eff6ff]/60 transition-colors" style={{ fontFamily: 'var(--font-body)' }} onClick={() => setIsOpen(false)}>
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>
          <div className="px-5 py-5 border-t border-[#f1f5f9] space-y-3">
            <a href={`tel:${SITE.phoneRaw}`} className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white font-semibold btn-ribbon text-[15px] shadow-md shadow-blue-500/20" style={{ fontFamily: 'var(--font-heading)' }} onClick={() => setIsOpen(false)}>
              <Phone className="w-4 h-4" />
              Book Now
            </a>
            <a href={`tel:${SITE.phoneRaw}`} className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#f8fafc] text-[#334155] font-semibold btn-ribbon text-[15px] border border-[#e2e8f0]" style={{ fontFamily: 'var(--font-heading)' }}>
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
       </div>
      </div>
    </>
  );
}
