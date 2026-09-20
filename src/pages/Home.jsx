import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
  LayoutGrid,
  Wrench,
  CalendarClock,
  GraduationCap,
  ShieldCheck,
  Headset,
  Boxes,
  Users2,
  ArrowRight,
} from 'lucide-react';
import useSEO from '../hooks/useSEO.js';
import SectionHeading from '../components/SectionHeading.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import CTASection from '../components/CTASection.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';
import { getAllProducts } from '../data/products.js';
import { getAllServices } from '../data/services.js';
import projects from '../data/projects.js';
import { stockImage } from '../utils/placeholder.js';

const trustHighlights = [
  { icon: LayoutGrid, title: 'Wide Product Range', desc: 'Boards, panels, projectors, furniture and more.' },
  { icon: Wrench, title: 'Sales & Service', desc: 'Support that continues after the sale.' },
  { icon: CalendarClock, title: 'Rental Solutions', desc: 'Flexible rental for short-term needs.' },
  { icon: GraduationCap, title: 'Educational Technology Solutions', desc: 'Built for schools and institutions.' },
];

const whyChooseUs = [
  { icon: Boxes, title: 'Quality Products', desc: 'A curated range of classroom and AV equipment.' },
  { icon: ShieldCheck, title: 'Reliable Service', desc: 'Practical support for installation and repair.' },
  { icon: Headset, title: 'Technical Support', desc: 'Guidance on the right equipment for your space.' },
  { icon: GraduationCap, title: 'Educational Solutions', desc: 'Focused on schools, colleges and institutes.' },
  { icon: CalendarClock, title: 'Rental Options', desc: 'Flexible options for events and short-term use.' },
  { icon: Users2, title: 'Customer-Focused Support', desc: 'A responsive team that stays in touch.' },
];

const heroImage = "/images/smart-classroom-solutions.png";

export default function Home() {
  useSEO({
    title: 'Sri Amman Technologies | Educational Technology Solutions',
    description:
      'Sri Amman Technologies supplies classroom boards, interactive panels, LCD projectors, furniture and educational technology solutions for schools and institutions in Namakkal, Tamil Nadu.',
    path: '/',
  });

  const heroRef = useRef(null);
  const products = getAllProducts();
  const services = getAllServices();

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      if (reduce) {
        gsap.set(
          ['.hero-visual', '.hero-badge', '.hero-heading', '.hero-desc', '.hero-btn'],
          { opacity: 1, y: 0, scale: 1 }
        );
        return;
      }
      tl.fromTo('.hero-visual', { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.9 })
        .fromTo('.hero-badge', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.6')
        .fromTo('.hero-heading', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')
        .fromTo('.hero-desc', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .fromTo('.hero-btn', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 }, '-=0.3');
    },
    { scope: heroRef }
  );

  return (
    <>
      <section ref={heroRef} className="relative bg-gradient-to-b from-surface to-white overflow-hidden">
        <div className="container-page py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[70vh] lg:min-h-[80vh]">
          <div className="flex flex-col gap-5 order-2 lg:order-1">
            <span className="hero-badge inline-flex w-fit items-center gap-2 bg-blue/10 text-navy text-xs font-bold uppercase tracking-wide px-4 py-2 rounded-full">
              Educational Technology Partner
            </span>
            <h1 className="hero-heading text-[34px] sm:text-[44px] md:text-[56px] lg:text-[64px] font-bold text-navy leading-tight">
              Smart Classrooms.<br />Brighter Futures.
            </h1>
            <p className="hero-desc text-base sm:text-lg text-muted max-w-lg">
              Complete educational technology solutions for schools, colleges and institutions.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Link to="/products" className="hero-btn btn-primary">
                Explore Products <ArrowRight size={18} />
              </Link>
              <Link to="/enquiry" className="hero-btn btn-secondary">
                Get a Quote
              </Link>
            </div>
          </div>
          <div className="hero-visual order-1 lg:order-2">
            <img
              src={heroImage}
              alt="Modern smart classroom with interactive display and projector"
              className="w-full rounded-3xl shadow-soft object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-page grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustHighlights.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08} className="bg-white rounded-2xl border border-edge shadow-card p-5 sm:p-6 flex flex-col gap-3">
              <span className="w-11 h-11 rounded-xl bg-yellow/20 text-navy flex items-center justify-center">
                <item.icon size={22} />
              </span>
              <p className="font-semibold text-ink text-sm sm:text-base">{item.title}</p>
              <p className="text-xs sm:text-sm text-muted">{item.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-page flex flex-col gap-10">
          <SectionHeading
            eyebrow="What We Offer"
            title="Our Product Categories"
            description="Quality educational equipment and classroom solutions for modern learning environments."
          />
          <ProductGrid products={products} columns={4} />
          <div className="text-center">
            <Link to="/products" className="btn-secondary">
              View All Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <ScrollReveal className="rounded-3xl overflow-hidden shadow-soft">
            <img
              src={stockImage('smart-classroom-solutions', 800, 640)}
              alt="Smart classroom with interactive panel and furniture"
              className="w-full aspect-[5/4] object-cover"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="flex flex-col gap-5">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-bright">Integrated Solutions</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Complete Smart Classroom Solutions</h2>
            <ul className="flex flex-col gap-2.5 text-ink/80">
              {['Interactive panels', 'Projection systems', 'Classroom furniture', 'Podiums', 'Audio solutions', 'Installation and support'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow" />
                    {item}
                  </li>
                )
              )}
            </ul>
            <Link to="/products" className="btn-primary w-fit mt-2">
              Explore Solutions
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-page flex flex-col gap-10">
          <SectionHeading
            eyebrow="Support"
            title="Our Services"
            description="Reliable support for your educational technology needs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-page flex flex-col gap-10">
          <SectionHeading eyebrow="Our Promise" title="Why Choose Us" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <ScrollReveal
                key={item.title}
                delay={(i % 3) * 0.08}
                className="bg-white rounded-2xl border border-edge shadow-card p-6 flex flex-col gap-3"
              >
                <span className="w-11 h-11 rounded-xl bg-blue/10 text-blue-bright flex items-center justify-center">
                  <item.icon size={22} />
                </span>
                <p className="font-semibold text-ink">{item.title}</p>
                <p className="text-sm text-muted">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-page flex flex-col gap-10">
          <SectionHeading
            eyebrow="Our Work"
            title="Our Projects & Installations"
            description="A look at some of our recent classroom and installation work."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/projects" className="btn-secondary">
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
