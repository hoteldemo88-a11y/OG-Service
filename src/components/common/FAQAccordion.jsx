import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQAccordion({ items }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3" role="list">
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-[#e2e8f0] rounded-xl overflow-hidden bg-white"
          role="listitem"
        >
          <button
            onClick={() => toggle(item.id)}
            className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-[#f8fafc] transition-colors"
            aria-expanded={openId === item.id}
            aria-controls={`faq-answer-${item.id}`}
          >
            <span className="font-semibold text-[#0f172a] text-[13px] pr-3">{item.question}</span>
            <ChevronDown
              className={`w-4 h-4 text-[#94a3b8] shrink-0 transition-transform duration-200 ${
                openId === item.id ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            />
          </button>
          <AnimatePresence>
            {openId === item.id && (
              <motion.div
                id={`faq-answer-${item.id}`}
                role="region"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="px-4 pb-4 text-[#64748b] text-[13px] leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
