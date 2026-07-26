export default function SectionHeading({ badge, title, subtitle, icon: Icon, center = true, className = '' }) {
  return (
    <div className={`mb-7 sm:mb-8 lg:mb-12 ${center ? 'text-center' : ''} ${className}`}>
      {badge && (
        <span className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#2563eb] bg-[#eff6ff] border border-[#bfdbfe] rounded-full mb-2.5 sm:mb-4">
          {Icon && <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
          {badge}
        </span>
      )}
      <h2 className="text-[22px] sm:text-3xl lg:text-4xl font-bold text-[#0f172a] mb-2 sm:mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-[13px] sm:text-lg text-[#64748b] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
