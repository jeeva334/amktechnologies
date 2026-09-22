import { Phone } from 'lucide-react';
import company from '../data/company.js';

export default function CallButton() {
  return (
    <a
      href={company.phoneHref}
      aria-label="Call us"
      className="fixed z-40 bottom-20 right-4 sm:bottom-24 sm:right-8 w-14 h-14 rounded-full bg-blue-bright text-white flex items-center justify-center shadow-soft hover:scale-105 transition-transform motion-reduce:transition-none"
    >
      <Phone size={25} fill="white" strokeWidth={1.5} />
    </a>
  );
}