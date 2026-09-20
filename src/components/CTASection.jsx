import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal.jsx';

export default function CTASection({
  title = 'Complete Educational Technology Solutions',
  description = 'From classroom displays and projectors to furniture, installation and service, we support your complete learning environment.',
  buttonLabel = 'Enquire Now',
  buttonTo = '/enquiry',
}) {
  return (
    <section className="bg-gradient-to-br from-navy to-blue py-16">
      <div className="container-page">
        <ScrollReveal className="flex flex-col items-center text-center gap-5 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{title}</h2>
          <p className="text-white/75 text-base sm:text-lg">{description}</p>
          <Link to={buttonTo} className="btn-primary mt-2">
            {buttonLabel}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
