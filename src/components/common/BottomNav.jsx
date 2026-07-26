import { Phone, Mail } from 'lucide-react';
import { SITE } from '@/constants';

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-[#e2e8f0] shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.1)]" role="navigation" aria-label="Quick contact">
      <div className="flex">
        <a href={`tel:${SITE.phoneRaw}`} className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#2563eb] text-white font-semibold text-[14px] active:scale-[0.98] transition-all" style={{ fontFamily: 'var(--font-heading)' }} aria-label="Call us now">
          <Phone className="w-4 h-4" />Call Us
        </a>
        <a href={`mailto:${SITE.email}`} className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#f8fafc] text-[#334155] font-semibold text-[14px] border-l border-[#e2e8f0] active:scale-[0.98] transition-all" style={{ fontFamily: 'var(--font-heading)' }} aria-label="Email us">
          <Mail className="w-4 h-4 text-[#2563eb]" />Email Us
        </a>
      </div>
    </div>
  );
}
