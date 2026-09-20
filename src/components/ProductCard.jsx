import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group bg-white rounded-2xl border border-edge shadow-card overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
    >
      <div className="aspect-[4/3] overflow-hidden bg-surface">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        {product.categoryLabel && (
          <span className="text-[11px] font-bold uppercase tracking-wide text-blue-bright">
            {product.categoryLabel}
          </span>
        )}
        <h3 className="font-semibold text-ink text-lg">{product.name}</h3>
        <p className="text-sm text-muted line-clamp-2 flex-1">{product.shortDescription}</p>
        <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
          View Details
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
