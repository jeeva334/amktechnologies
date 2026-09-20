import useSEO from '../hooks/useSEO.js';
import PageHero from '../components/PageHero.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';

export default function Enquiry() {
  useSEO({
    title: 'Request a Quote | Sri Amman Technologies',
    description: 'Request a quote for classroom boards, projectors, interactive panels, furniture or services from Sri Amman Technologies.',
    path: '/enquiry',
  });

  return (
    <>
      <PageHero title="Request a Quote" description="Tell us what you need and our team will get back to you." />
      <Breadcrumb items={[{ label: 'Enquiry' }]} />

      <section className="py-14 sm:py-20">
        <div className="container-page max-w-2xl mx-auto">
          <ScrollReveal>
            <EnquiryForm variant="enquiry" />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
