import useSEO from '../hooks/useSEO.js';
import PageHero from '../components/PageHero.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';
import CTASection from '../components/CTASection.jsx';
import projects from '../data/projects.js';

export default function Projects() {
  useSEO({
    title: 'Projects & Installations | Sri Amman Technologies',
    description: 'A look at classroom and installation projects completed by Sri Amman Technologies.',
    path: '/projects',
  });

  return (
    <>
      <PageHero title="Our Projects & Installations" description="A selection of our classroom and installation work." />
      <Breadcrumb items={[{ label: 'Projects' }]} />

      <section className="py-14 sm:py-20">
        <div className="container-page grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ScrollReveal key={p.id} delay={(i % 3) * 0.08}>
              <ProjectCard project={p} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTASection title="Planning a Classroom Upgrade?" description="Talk to us about your installation requirements." />
    </>
  );
}
