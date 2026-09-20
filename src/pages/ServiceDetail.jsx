import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle2, Wrench, Calendar, RefreshCw, Settings, ShieldCheck, Users } from 'lucide-react';
import useSEO from '../hooks/useSEO.js';
import Breadcrumb from '../components/Breadcrumb.jsx';
import PageHero from '../components/PageHero.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import CTASection from '../components/CTASection.jsx';
import { getServiceBySlug, getRelatedServices, processSteps } from '../data/services.js';

const iconMap = { Wrench, Calendar, RefreshCw, Settings, ShieldCheck, Users };

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useSEO({
    title: service
      ? `${service.name} | Sri Amman Technologies`
      : 'Service Not Found | Sri Amman Technologies',
    description: service?.shortDescription || 'This service could not be found.',
    path: `/services/${slug}`,
  });

  if (!service) return <Navigate to="/404" replace />;

  const Icon = iconMap[service.icon] || Wrench;
  const related = getRelatedServices(service.relatedServices || []);

  return (
    <>
      <PageHero title={service.name} description={service.shortDescription} />
      <Breadcrumb items={[{ label: 'Services', to: '/services' }, { label: service.name }]} />

      <section className="py-14 sm:py-16">
        <div className="container-page grid grid-cols-1 lg:grid-cols-3 gap-10">
          <ScrollReveal className="lg:col-span-2 flex flex-col gap-6">
            <span className="w-14 h-14 rounded-2xl bg-blue/10 text-blue-bright flex items-center justify-center">
              <Icon size={28} />
            </span>
            <p className="text-ink/85 leading-relaxed">{service.description}</p>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">What We Provide</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-ink/85">
                    <CheckCircle2 size={18} className="text-blue-bright mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy mb-3">Benefits</h2>
              <ul className="flex flex-col gap-2">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-ink/85">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow mt-2 shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="bg-surface rounded-2xl border border-edge p-6 h-fit sticky top-24">
            <h3 className="font-semibold text-navy mb-2">Interested in this service?</h3>
            <p className="text-sm text-muted mb-4">
              Reach out for a quote or to discuss your requirement with our team.
            </p>
            <div className="flex flex-col gap-3">
              <Link to="/enquiry" className="btn-primary w-full">Request a Quote</Link>
              <Link to="/contact" className="btn-secondary w-full">Contact Us</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-white">
        <div className="container-page flex flex-col gap-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy text-center">Our Process</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.06} className="flex flex-col items-center text-center gap-2">
                <span className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-bold text-sm">
                  {step.step}
                </span>
                <p className="font-semibold text-ink text-sm">{step.title}</p>
                <p className="text-xs text-muted">{step.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-14 sm:py-16">
          <div className="container-page flex flex-col gap-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">Related Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
