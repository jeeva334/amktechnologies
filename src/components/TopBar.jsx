import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import company from '../data/company.js';

export default function TopBar() {
  return (
    <div className="bg-navy text-white/90 text-xs sm:text-sm">
      <div className="container-page flex items-center justify-between py-2 gap-3">
        <div className="flex items-center gap-4 min-w-0">
          <a href={company.phoneHref} className="flex items-center gap-1.5 hover:text-yellow transition-colors">
            <Phone size={14} aria-hidden="true" />
            <span className="whitespace-nowrap">{company.phone}</span>
          </a>
          <a
            href={company.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-yellow transition-colors"
          >
            <MessageCircle size={14} aria-hidden="true" />
            <span className="whitespace-nowrap">{company.whatsapp}</span>
          </a>
        </div>
        <div className="hidden md:flex items-center gap-4 min-w-0">
          <a href={company.emailHref} className="flex items-center gap-1.5 hover:text-yellow transition-colors truncate">
            <Mail size={14} aria-hidden="true" />
            <span className="truncate">{company.email}</span>
          </a>
          <span className="flex items-center gap-1.5 whitespace-nowrap">
            <MapPin size={14} aria-hidden="true" />
            {company.shortAddress}
          </span>
        </div>
      </div>
    </div>
  );
}
