import { LayoutGrid, Wrench, Building2, Users2 } from 'lucide-react';
import useSEO from '../hooks/useSEO.js';
import PageHero from '../components/PageHero.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';
import CTASection from '../components/CTASection.jsx';
import { stockImage } from '../utils/placeholder.js';

const highlights = [
  { icon: LayoutGrid, title: 'Wide Product Range', desc: 'Boards, panels, projectors, furniture and accessories.' },
  { icon: Wrench, title: 'Sales & Service', desc: 'Support that continues after the equipment is delivered.' },
  { icon: Building2, title: 'Institutional Focus', desc: 'Trusted by schools and colleges for classroom needs.' },
  { icon: Users2, title: 'Customer Satisfaction', desc: 'Quality products at competitive pricing.' },
];

export default function About() {
  useSEO({
    title: 'About Sri Amman Technologies | Educational Technology Solutions',
    description:
      'Learn about Sri Amman Technologies, based in Namakkal, Tamil Nadu, supplying classroom boards, projectors, interactive panels and educational technology solutions.',
    path: '/about',
  });

  return (
    <>
      <PageHero title="About Sri Amman Technologies" description="Educational technology and classroom solutions." />
      <Breadcrumb items={[{ label: 'About Us' }]} />

      <section className="py-14 sm:py-20">
        <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <ScrollReveal className="flex flex-col gap-4 order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-navy">Our Story</h2>
            <p className="text-muted leading-relaxed">
              Sri Amman Technologies is based in Kavettipatti, Namakkal, and supplies educational equipment
              and classroom technology to schools, colleges and training institutes. We work with
              institutions to provide the boards, projection equipment, furniture and accessories needed
              for everyday teaching.
            </p>
            <p className="text-muted leading-relaxed">
              Our aim is to make modern learning tools accessible to educational institutions, with
              practical product choices, straightforward pricing and support that continues after
              delivery and installation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-soft">
            <img
              src={stockImage('about-our-story', 800, 640)}
              alt="Classroom with chalk board and furniture"
              className="w-full aspect-[5/4] object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-page grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <ScrollReveal
              key={item.title}
              delay={i * 0.08}
              className="bg-surface rounded-2xl border border-edge p-6 flex flex-col gap-3"
            >
              <span className="w-11 h-11 rounded-xl bg-yellow/20 text-navy flex items-center justify-center">
                <item.icon size={22} />
              </span>
              <p className="font-semibold text-ink">{item.title}</p>
              <p className="text-sm text-muted">{item.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-page flex flex-col gap-10">
          <SectionHeading
            eyebrow="How We Work"
            title="Our Approach"
            description="A practical, product-focused approach to classroom technology."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: 'Educational Technology Solutions',
                desc: 'From chalk boards to interactive panels and projectors, we cover a broad range of classroom technology needs.',
              },
              {
                title: 'Sales & Service',
                desc: 'We support institutions before and after purchase, including installation and repair services.',
              },
              {
                title: 'Institutional Support',
                desc: 'We work with schools, colleges and training centres to match products to their classrooms.',
              },
            ].map((item, i) => (
              <ScrollReveal
                key={item.title}
                delay={i * 0.1}
                className="bg-white rounded-2xl border border-edge shadow-card p-6 flex flex-col gap-2"
              >
                <h3 className="font-semibold text-navy text-lg">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Discuss Your Classroom Needs"
        description="Reach out to our team to talk through the right products and services for your institution."
        buttonLabel="Contact Us"
        buttonTo="/contact"
      />
    </>
  );
}
