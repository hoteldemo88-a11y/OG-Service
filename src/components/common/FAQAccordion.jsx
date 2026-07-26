import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3" role="list">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="border border-[#e2e8f0] rounded-xl overflow-hidden bg-white"
            role="listitem"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-[#f8fafc] transition-colors"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
            >
              <span className="font-semibold text-[#0f172a] text-[13px] pr-3">{item.question}</span>
              <ChevronDown
                className={`w-4 h-4 text-[#94a3b8] shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              id={`faq-answer-${item.id}`}
              role="region"
              className={`grid transition-all duration-200 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className={`overflow-hidden ${isOpen ? 'min-h-0' : 'min-h-0'}`}>
                <div className="px-4 pb-4 text-[#64748b] text-[13px] leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
