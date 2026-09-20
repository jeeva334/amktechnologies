import { useState } from 'react';
import { X } from 'lucide-react';
import useSEO from '../hooks/useSEO.js';
import PageHero from '../components/PageHero.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';
import galleryItems, { galleryFilters } from '../data/gallery.js';

export default function Gallery() {
  useSEO({
    title: 'Gallery | Sri Amman Technologies',
    description: 'Photos of classroom installations, projectors, interactive panels and furniture from Sri Amman Technologies.',
    path: '/gallery',
  });

  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === 'All' ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <>
      <PageHero title="Our Gallery" description="Our installations and happy customers." />
      <Breadcrumb items={[{ label: 'Gallery' }]} />

      <section className="py-12 sm:py-16">
        <div className="container-page flex flex-col gap-8">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {galleryFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-medium transition-colors min-h-[44px] ${
                  filter === f ? 'bg-navy text-white' : 'bg-white border border-edge text-ink hover:bg-surface'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <ScrollReveal key={item.id} delay={(i % 8) * 0.05}>
                <button
                  onClick={() => setLightbox(item)}
                  className="group relative w-full aspect-square rounded-xl overflow-hidden border border-edge block"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-colors duration-300 flex items-end p-3">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-left">
                      <span className="block text-sm font-semibold">{item.title}</span>
                      <span className="block text-xs text-white/70">{item.category}</span>
                    </span>
                  </span>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[70] bg-navy/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute top-5 right-5 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X size={24} />
          </button>
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.image} alt={lightbox.title} className="w-full rounded-xl" />
            <p className="text-white text-center mt-4 font-medium">{lightbox.title}</p>
          </div>
        </div>
      )}
    </>
  );
}
