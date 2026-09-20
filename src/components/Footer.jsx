import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import company from '../data/company.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white/85">
      <div className="container-page py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="text-xl font-bold text-white mb-3">Sri Amman Technologies</p>
          <p className="text-sm text-white/70 leading-relaxed">
            Educational technology and classroom solutions for schools, colleges and institutions —
            boards, smart panels, projection, furniture, installation and service support.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a href={company.socialLinks.facebook} aria-label="Facebook" className="p-2 rounded-full bg-white/10 hover:bg-yellow hover:text-navy transition-colors">
              <Facebook size={16} />
            </a>
            <a href={company.socialLinks.instagram} aria-label="Instagram" className="p-2 rounded-full bg-white/10 hover:bg-yellow hover:text-navy transition-colors">
              <Instagram size={16} />
            </a>
            <a href={company.socialLinks.youtube} aria-label="YouTube" className="p-2 rounded-full bg-white/10 hover:bg-yellow hover:text-navy transition-colors">
              <Youtube size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="font-semibold text-white mb-4">Quick Links</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-yellow">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow">About</Link></li>
            <li><Link to="/products" className="hover:text-yellow">Products</Link></li>
            <li><Link to="/services" className="hover:text-yellow">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-yellow">Gallery</Link></li>
            <li><Link to="/projects" className="hover:text-yellow">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-yellow">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white mb-4">Products</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/products/chalk-boards" className="hover:text-yellow">Chalk Boards</Link></li>
            <li><Link to="/products/interactive-panels" className="hover:text-yellow">Interactive Panels</Link></li>
            <li><Link to="/products/lcd-projectors" className="hover:text-yellow">Projectors</Link></li>
            <li><Link to="/products/projector-screens" className="hover:text-yellow">Projector Screens</Link></li>
            <li><Link to="/products/school-furniture" className="hover:text-yellow">School Furniture</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white mb-4">Contact</p>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Phone size={15} /><a href={company.phoneHref} className="hover:text-yellow">{company.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={15} /><a href={company.whatsappHref} className="hover:text-yellow">{company.whatsapp}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} /><a href={company.emailHref} className="hover:text-yellow break-all">{company.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0" />
              <span>{company.addressLine1}, {company.addressLine2}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-center text-xs text-white/60">
          © {year} Sri Amman Technologies. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
