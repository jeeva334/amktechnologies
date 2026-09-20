import useSEO from '../hooks/useSEO.js';
import PageHero from '../components/PageHero.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import CTASection from '../components/CTASection.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';
import { getAllServices } from '../data/services.js';

export default function Services() {
  useSEO({
    title: 'Educational Technology Services & Projector Solutions | Sri Amman Technologies',
    description:
      'Projector service and repair, projector rental, reconditioned projectors, installation, maintenance and classroom solutions from Sri Amman Technologies.',
    path: '/services',
  });

  const services = getAllServices();

  return (
    <>
      <PageHero title="Our Services" description="Support for a smarter learning experience." />
      <Breadcrumb items={[{ label: 'Services' }]} />

      <section className="py-14 sm:py-20">
        <div className="container-page grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.slug} delay={(i % 3) * 0.08}>
              <ServiceCard service={s} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Need a Service or Rental?"
        description="Get in touch with our team for the best solution for your institution."
        buttonLabel="Contact Us"
        buttonTo="/contact"
      />
    </>
  );
}
