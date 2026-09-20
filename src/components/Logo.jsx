import { Link } from 'react-router-dom';
import { MonitorPlay } from 'lucide-react';

export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="Sri Amman Technologies home">
      <span
        className={`flex items-center justify-center rounded-lg bg-navy text-yellow transition-all duration-300 ${
          compact ? 'w-9 h-9' : 'w-11 h-11'
        }`}
      >
        <MonitorPlay size={compact ? 18 : 22} strokeWidth={2.2} />
      </span>
      <span className="leading-tight">
        <span className={`block font-bold text-navy transition-all duration-300 ${compact ? 'text-base' : 'text-lg'}`}>
          Sri Amman <span className="text-blue-bright">Technologies</span>
        </span>
        <span className="hidden sm:block text-[11px] text-muted font-medium tracking-wide">
          Educational Technology Solutions
        </span>
      </span>
    </Link>
  );
}
