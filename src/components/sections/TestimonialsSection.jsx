import { Star, Quote } from 'lucide-react';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { TESTIMONIALS } from '@/constants';

const avatarImages = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
];

function ReviewCard({ review, index }) {
  return (
    <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 w-[260px] sm:w-[320px] lg:w-[350px] shrink-0 transition-all duration-500 hover:-translate-y-2" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(37,99,235,0.06)' }}>
      <div className="absolute top-0 left-6 sm:left-8 right-6 sm:right-8 h-[3px] rounded-full bg-gradient-to-r from-[#2563eb] via-[#60a5fa] to-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] flex items-center justify-center mb-3 sm:mb-4">
        <Quote className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-[#2563eb]" />
      </div>

      <div className="flex items-center gap-0.5 mb-2 sm:mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#f59e0b] fill-[#f59e0b]" />
        ))}
      </div>

      <p className="text-[#475569] text-[12px] sm:text-[14px] leading-[1.6] sm:leading-[1.7] mb-4 sm:mb-6 font-medium">
        &ldquo;{review.text}&rdquo;
      </p>

      <div className="h-px bg-gradient-to-r from-transparent via-[#e2e8f0] to-transparent mb-3 sm:mb-4" />

      <div className="flex items-center gap-2.5 sm:gap-3.5">
        <div className="relative shrink-0">
          <img
            src={avatarImages[index % avatarImages.length]}
            alt={review.name}
            loading="lazy"
            decoding="async"
            width="48"
            height="48"
            className="w-9 h-9 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-[#eff6ff] ring-offset-1 sm:ring-offset-2"
          />
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 sm:w-4 sm:h-4 bg-[#22c55e] rounded-full border-2 border-white flex items-center justify-center">
            <svg className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-[#0f172a] text-[11px] sm:text-[13.5px] truncate">{review.name}</p>
          <p className="text-[#64748b] text-[10px] sm:text-[12px] truncate">{review.location}</p>
        </div>
        <span className="text-[9px] sm:text-[11px] font-semibold text-[#2563eb] bg-[#eff6ff] px-2 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap">
          {review.service}
        </span>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const duplicated = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#f8fafc] overflow-hidden">
      <Container>
        <SectionHeading badge="Testimonials" title="What Our Customers Say" subtitle="Trusted by thousands of happy customers in Bangalore" icon={Star} />
      </Container>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-24 lg:w-28 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-24 lg:w-28 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden py-2 sm:py-2">
          <div className="flex gap-3 sm:gap-5 lg:gap-6 pl-3 sm:pl-6 lg:pl-0">
            {duplicated.map((review, i) => (
              <ReviewCard key={`${review.id}-${i}`} review={review} index={i % avatarImages.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
