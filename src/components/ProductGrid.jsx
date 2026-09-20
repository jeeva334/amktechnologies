import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProductCard from './ProductCard.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function ProductGrid({ products, columns = 3 }) {
  const gridRef = useRef(null);
  const colClass =
    columns === 4
      ? 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      : 'sm:grid-cols-2 lg:grid-cols-3';

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const cards = gridRef.current?.querySelectorAll('.product-card-item');
      if (!cards || !cards.length) return;
      if (reduce) {
        gsap.set(cards, { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 85%', once: true },
        }
      );
    },
    { scope: gridRef, dependencies: [products] }
  );

  return (
    <div ref={gridRef} className={`grid grid-cols-1 ${colClass} gap-6`}>
      {products.map((p) => (
        <div key={p.slug} className="product-card-item">
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
}
