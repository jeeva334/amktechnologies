import { MessageCircle } from 'lucide-react';
import company from '../data/company.js';

export default function WhatsAppButton() {
  return (
    <a
      href={company.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed z-40 bottom-4 right-4 sm:bottom-6 sm:right-8 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-soft hover:scale-105 transition-transform animate-pulseSoft motion-reduce:animate-none"
    >
      <MessageCircle size={26} fill="white" strokeWidth={1.5} />
    </a>
  );
}
