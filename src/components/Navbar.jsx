import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Menu } from 'lucide-react';
import Logo from './Logo.jsx';
import MobileMenu from './MobileMenu.jsx';
import { getAllProducts } from '../data/products.js';
import { getAllServices } from '../data/services.js';

const productGroups = [
  {
    title: 'Classroom Boards',
    items: ['chalk-boards', 'white-marker-boards', 'notice-boards'],
  },
  { title: 'Smart Classroom', items: ['interactive-panels'] },
  {
    title: 'Projection Solutions',
    items: ['lcd-projectors', 'projector-screens', 'reconditioned-projectors'],
  },
  { title: 'Classroom Infrastructure', items: ['podiums', 'school-furniture'] },
  { title: 'Audio & Accessories', items: ['home-theatre', 'hdmi-vga-cables'] },
];

const navItem =
  'px-3.5 py-2 rounded-lg text-[15px] font-medium text-ink hover:text-navy hover:bg-surface transition-colors flex items-center gap-1';
const activeNavItem = 'text-navy font-semibold';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsMenu, setProductsMenu] = useState(false);
  const [servicesMenu, setServicesMenu] = useState(false);
  const navRef = useRef(null);
  const products = getAllProducts();
  const services = getAllServices();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useGSAP(() => {
    if (!navRef.current) return;
    gsap.to(navRef.current, {
      boxShadow: scrolled ? '0 4px 20px rgba(18,59,112,0.10)' : '0 0px 0px rgba(18,59,112,0)',
      duration: 0.35,
      ease: 'power2.out',
    });
  }, [scrolled]);

  useEffect(() => {
    setMobileOpen(false);
  }, []);

  const productBySlug = (slug) => products.find((p) => p.slug === slug);

  return (
    <header ref={navRef} className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <div
        className={`container-page flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'py-2.5' : 'py-4'
        }`}
      >
        <Logo compact={scrolled} />

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => `${navItem} ${isActive ? activeNavItem : ''}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `${navItem} ${isActive ? activeNavItem : ''}`}>
            About Us
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setProductsMenu(true)}
            onMouseLeave={() => setProductsMenu(false)}
          >
            <button
              className={navItem}
              aria-expanded={productsMenu}
              aria-haspopup="true"
              onClick={() => setProductsMenu((v) => !v)}
            >
              Products <ChevronDown size={16} className={`transition-transform ${productsMenu ? 'rotate-180' : ''}`} />
            </button>
            {productsMenu && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[720px] max-w-[90vw]">
                <div className="bg-white rounded-2xl shadow-soft border border-edge p-6 grid grid-cols-3 gap-6">
                  {productGroups.map((group) => (
                    <div key={group.title}>
                      <p className="text-xs font-bold uppercase tracking-wide text-blue-bright mb-2">
                        {group.title}
                      </p>
                      <ul className="flex flex-col gap-1">
                        {group.items.map((slug) => {
                          const p = productBySlug(slug);
                          if (!p) return null;
                          return (
                            <li key={slug}>
                              <Link
                                to={`/products/${slug}`}
                                className="text-sm text-ink/80 hover:text-navy hover:underline underline-offset-2"
                              >
                                {p.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                  <div className="col-span-3 border-t border-edge pt-3">
                    <Link to="/products" className="text-sm font-semibold text-navy hover:text-blue-bright">
                      View All Products →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setServicesMenu(true)}
            onMouseLeave={() => setServicesMenu(false)}
          >
            <button
              className={navItem}
              aria-expanded={servicesMenu}
              aria-haspopup="true"
              onClick={() => setServicesMenu((v) => !v)}
            >
              Services <ChevronDown size={16} className={`transition-transform ${servicesMenu ? 'rotate-180' : ''}`} />
            </button>
            {servicesMenu && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[380px] max-w-[90vw]">
                <div className="bg-white rounded-2xl shadow-soft border border-edge p-5">
                  <ul className="flex flex-col gap-1">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/services/${s.slug}`}
                          className="block px-2 py-2 rounded-lg text-sm text-ink/80 hover:text-navy hover:bg-surface"
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-edge mt-2 pt-3 px-2">
                    <Link to="/services" className="text-sm font-semibold text-navy hover:text-blue-bright">
                      View All Services →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/gallery" className={({ isActive }) => `${navItem} ${isActive ? activeNavItem : ''}`}>
            Gallery
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `${navItem} ${isActive ? activeNavItem : ''}`}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${navItem} ${isActive ? activeNavItem : ''}`}>
            Contact Us
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/enquiry" className="btn-primary hidden lg:inline-flex !py-2.5 !px-5 text-sm">
            Get a Quote
          </Link>
          <button
            className="lg:hidden p-2.5 rounded-lg hover:bg-surface min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={24} className="text-navy" />
          </button>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
