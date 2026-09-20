import { useState } from 'react';
import useSEO from '../hooks/useSEO.js';
import PageHero from '../components/PageHero.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import CTASection from '../components/CTASection.jsx';
import { categories, getProductsByCategory } from '../data/products.js';

export default function Products() {
  useSEO({
    title: 'Educational Equipment & Smart Classroom Products | Sri Amman Technologies',
    description:
      'Browse classroom boards, interactive panels, LCD projectors, furniture, podiums and audio accessories from Sri Amman Technologies.',
    path: '/products',
  });

  const [activeCategory, setActiveCategory] = useState('all');
  const products = getProductsByCategory(activeCategory);

  const sidebarItems = [{ id: 'all', name: 'All Products' }, ...categories];

  return (
    <>
      <PageHero
        title="Our Products"
        description="Explore educational technology and classroom solutions from Sri Amman Technologies."
      />
      <Breadcrumb items={[{ label: 'Products' }]} />

      <section className="py-12 sm:py-16">
        <div className="container-page grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">
          <aside>
            <p className="font-semibold text-navy mb-3">Product Categories</p>
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {sidebarItems.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`whitespace-nowrap text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors min-h-[44px] ${
                    activeCategory === cat.id
                      ? 'bg-navy text-white'
                      : 'bg-white border border-edge text-ink hover:bg-surface'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </aside>

          <div>
            <ProductGrid products={products} />
          </div>
        </div>
      </section>

      <CTASection
        title="Educational needs are available"
        description="We provide complete solutions for schools, colleges and training centres."
        buttonLabel="Enquire Now"
        buttonTo="/enquiry"
      />
    </>
  );
}
