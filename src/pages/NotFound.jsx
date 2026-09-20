import { Link } from 'react-router-dom';
import { Home, Boxes } from 'lucide-react';
import useSEO from '../hooks/useSEO.js';

export default function NotFound() {
  useSEO({
    title: 'Page Not Found | Sri Amman Technologies',
    description: 'The page you are looking for does not exist.',
    path: '/404',
  });

  return (
    <section className="py-24 sm:py-32">
      <div className="container-page flex flex-col items-center text-center gap-5">
        <span className="text-7xl sm:text-8xl font-bold text-navy/15">404</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-navy">Page Not Found</h1>
        <p className="text-muted max-w-md">The page you're looking for doesn't exist.</p>
        <div className="flex flex-wrap gap-3 justify-center mt-2">
          <Link to="/" className="btn-primary">
            <Home size={18} /> Back to Home
          </Link>
          <Link to="/products" className="btn-secondary">
            <Boxes size={18} /> View Products
          </Link>
        </div>
      </div>
    </section>
  );
}
