import { Phone } from 'lucide-react';
import { SITE } from '@/constants';

export default function FloatingCallButton() {
  return (
    <a
      href={`tel:${SITE.phoneRaw}`}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-success-500 text-white rounded-full shadow-lg hover:bg-success-600 transition-all duration-200 flex items-center justify-center hover:scale-110 animate-pulse-slow"
      aria-label="Call us now"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
