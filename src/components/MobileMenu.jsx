import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { ChevronDown, X } from 'lucide-react';
import { getAllProducts } from '../data/products.js';
import { getAllServices } from '../data/services.js';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact Us', to: '/contact' },
];

export default function MobileMenu({ open, onClose }) {
  const panelRef = useRef(null);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const products = getAllProducts();
  const services = getAllServices();

  useGSAP(() => {
    if (!panelRef.current) return;
    if (open) {
      gsap.set(panelRef.current, { display: 'block' });
      gsap.fromTo(
        panelRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.4, ease: 'power3.out' }
      );
      gsap.fromTo(
        panelRef.current.querySelectorAll('.mm-item'),
        { y: -12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, stagger: 0.04, delay: 0.1, ease: 'power2.out' }
      );
    } else {
      gsap.to(panelRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => gsap.set(panelRef.current, { display: 'none' }),
      });
    }
  }, [open]);

  return (
    <div
      ref={panelRef}
      className="lg:hidden overflow-hidden bg-white border-t border-edge"
      style={{ display: 'none' }}
    >
      <div className="container-page py-4 flex flex-col gap-1">
        <div className="mm-item flex justify-end">
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded-lg hover:bg-surface min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X size={22} />
          </button>
        </div>

        {navLinks.slice(0, 1).map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={onClose}
            className="mm-item px-3 py-3 rounded-lg font-medium text-ink hover:bg-surface min-h-[44px] flex items-center"
          >
            {link.label}
          </Link>
        ))}

        <Link
          to="/about"
          onClick={onClose}
          className="mm-item px-3 py-3 rounded-lg font-medium text-ink hover:bg-surface min-h-[44px] flex items-center"
        >
          About Us
        </Link>

        <div className="mm-item">
          <button
            onClick={() => setProductsOpen((v) => !v)}
            aria-expanded={productsOpen}
            className="w-full px-3 py-3 rounded-lg font-medium text-ink hover:bg-surface min-h-[44px] flex items-center justify-between"
          >
            Products
            <ChevronDown size={18} className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
          </button>
          {productsOpen && (
            <div className="pl-4 pb-2 flex flex-col gap-0.5">
              {products.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  onClick={onClose}
                  className="px-3 py-2.5 rounded-lg text-sm text-muted hover:text-navy hover:bg-surface min-h-[44px] flex items-center"
                >
                  {p.name}
                </Link>
              ))}
              <Link
                to="/products"
                onClick={onClose}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-blue-bright min-h-[44px] flex items-center"
              >
                View All Products →
              </Link>
            </div>
          )}
        </div>

        <div className="mm-item">
          <button
            onClick={() => setServicesOpen((v) => !v)}
            aria-expanded={servicesOpen}
            className="w-full px-3 py-3 rounded-lg font-medium text-ink hover:bg-surface min-h-[44px] flex items-center justify-between"
          >
            Services
            <ChevronDown size={18} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
          </button>
          {servicesOpen && (
            <div className="pl-4 pb-2 flex flex-col gap-0.5">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  onClick={onClose}
                  className="px-3 py-2.5 rounded-lg text-sm text-muted hover:text-navy hover:bg-surface min-h-[44px] flex items-center"
                >
                  {s.name}
                </Link>
              ))}
              <Link
                to="/services"
                onClick={onClose}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-blue-bright min-h-[44px] flex items-center"
              >
                View All Services →
              </Link>
            </div>
          )}
        </div>

        {navLinks.slice(2).map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={onClose}
            className="mm-item px-3 py-3 rounded-lg font-medium text-ink hover:bg-surface min-h-[44px] flex items-center"
          >
            {link.label}
          </Link>
        ))}

        <Link
          to="/enquiry"
          onClick={onClose}
          className="mm-item btn-primary mt-2 w-full"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
