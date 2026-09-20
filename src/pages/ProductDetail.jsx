import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import useSEO from '../hooks/useSEO.js';
import Breadcrumb from '../components/Breadcrumb.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import CTASection from '../components/CTASection.jsx';
import { getProductBySlug, getRelatedProducts } from '../data/products.js';
import company from '../data/company.js';

const tabs = ['Overview', 'Features', 'Applications', 'Specifications', 'Support'];

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const [activeTab, setActiveTab] = useState('Overview');
  const [activeImage, setActiveImage] = useState(0);

  useSEO({
    title: product
      ? `${product.name} for Schools & Institutions | Sri Amman Technologies`
      : 'Product Not Found | Sri Amman Technologies',
    description: product?.shortDescription || 'This product could not be found.',
    path: `/products/${slug}`,
  });

  if (!product) return <Navigate to="/404" replace />;

  const images = [product.image, ...(product.gallery || [])];
  const related = getRelatedProducts(product.relatedProducts || []);

  return (
    <>
      <Breadcrumb items={[{ label: 'Products', to: '/products' }, { label: product.name }]} />

      <section className="py-12 sm:py-16">
        <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ScrollReveal className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden bg-surface border border-edge aspect-[4/3]">
              <img src={images[activeImage]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-colors ${
                      activeImage === i ? 'border-blue-bright' : 'border-edge'
                    }`}
                    aria-label={`View image ${i + 1}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="flex flex-col gap-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-bright">
                {product.categoryLabel}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-navy mt-1">{product.name}</h1>
              <p className="text-muted mt-2">{product.shortDescription}</p>
            </div>

            <ul className="flex flex-col gap-2">
              {product.features.slice(0, 5).map((f) => (
                <li key={f} className="flex items-start gap-2 text-ink/85">
                  <CheckCircle2 size={18} className="text-blue-bright mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link to="/enquiry" className="btn-primary">
                Request a Quote
              </Link>
              <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-4 sm:py-8">
        <div className="container-page">
          <div className="border-b border-edge flex gap-1 overflow-x-auto" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors min-h-[44px] ${
                  activeTab === tab ? 'border-navy text-navy' : 'border-transparent text-muted hover:text-navy'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="py-8">
            {activeTab === 'Overview' && <p className="text-ink/85 leading-relaxed max-w-3xl">{product.description}</p>}
            {activeTab === 'Features' && (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-ink/85">
                    <CheckCircle2 size={18} className="text-blue-bright mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            )}
            {activeTab === 'Applications' && (
              <div className="flex flex-wrap gap-2 max-w-3xl">
                {product.applications.map((a) => (
                  <span key={a} className="px-4 py-2 rounded-full bg-surface border border-edge text-sm text-ink/80">
                    {a}
                  </span>
                ))}
              </div>
            )}
            {activeTab === 'Specifications' && (
              <div className="max-w-2xl rounded-xl border border-edge overflow-hidden">
                {product.specifications.map((s, i) => (
                  <div
                    key={s.label}
                    className={`flex justify-between px-5 py-3 text-sm ${i % 2 === 0 ? 'bg-surface' : 'bg-white'}`}
                  >
                    <span className="font-medium text-ink">{s.label}</span>
                    <span className="text-muted text-right">{s.value}</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'Support' && (
              <p className="text-ink/85 leading-relaxed max-w-3xl">
                For installation, service or spare parts support related to this product, contact our team on{' '}
                <a href={company.phoneHref} className="text-navy font-semibold">{company.phone}</a> or via{' '}
                <a href={company.whatsappHref} className="text-navy font-semibold">WhatsApp</a>.
              </p>
            )}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="container-page flex flex-col gap-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">Related Products</h2>
            <ProductGrid products={related} columns={4} />
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
