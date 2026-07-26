import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex items-center flex-wrap gap-1 text-xs sm:text-sm text-[#64748b]">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-[#2563eb] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <ChevronRight className="w-3.5 h-3.5 text-[#cbd5e1]" />
            {item.path ? (
              <Link to={item.path} className="hover:text-[#2563eb] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#0f172a] font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
