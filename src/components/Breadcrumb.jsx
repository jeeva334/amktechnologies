import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-surface border-b border-edge">
      <div className="container-page py-3">
        <ol className="flex items-center flex-wrap gap-1.5 text-sm text-muted">
          <li className="flex items-center gap-1.5">
            <Link to="/" className="flex items-center gap-1 hover:text-navy">
              <Home size={14} /> Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              <ChevronRight size={14} />
              {item.to ? (
                <Link to={item.to} className="hover:text-navy">{item.label}</Link>
              ) : (
                <span className="text-navy font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
