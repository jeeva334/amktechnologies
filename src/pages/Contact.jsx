import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import useSEO from '../hooks/useSEO.js';
import PageHero from '../components/PageHero.jsx';
import Breadcrumb from '../components/Breadcrumb.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';
import company from '../data/company.js';

export default function Contact() {
  useSEO({
    title: 'Contact Sri Amman Technologies | Namakkal',
    description:
      'Contact Sri Amman Technologies in Kavettipatti, Namakkal for classroom boards, projectors, interactive panels and educational technology solutions.',
    path: '/contact',
  });

  return (
    <>
      <PageHero title="Contact Us" description="We are here to help." />
      <Breadcrumb items={[{ label: 'Contact Us' }]} />

      <section className="py-14 sm:py-20">
        <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ScrollReveal className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-2">Get in Touch</h2>
              <p className="text-muted">For enquiries, quotations or support, please reach out to us.</p>
            </div>
            <div className="flex flex-col gap-4">
              <a href={company.phoneHref} className="flex items-center gap-3 bg-white border border-edge rounded-xl p-4 hover:shadow-card transition-shadow">
                <span className="w-11 h-11 rounded-lg bg-blue/10 text-blue-bright flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </span>
                <span>
                  <span className="block text-xs text-muted">Call Us</span>
                  <span className="font-semibold text-ink">{company.phone}</span>
                </span>
              </a>
              <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white border border-edge rounded-xl p-4 hover:shadow-card transition-shadow">
                <span className="w-11 h-11 rounded-lg bg-blue/10 text-blue-bright flex items-center justify-center shrink-0">
                  <MessageCircle size={20} />
                </span>
                <span>
                  <span className="block text-xs text-muted">WhatsApp</span>
                  <span className="font-semibold text-ink">{company.whatsapp}</span>
                </span>
              </a>
              <a href={company.emailHref} className="flex items-center gap-3 bg-white border border-edge rounded-xl p-4 hover:shadow-card transition-shadow">
                <span className="w-11 h-11 rounded-lg bg-blue/10 text-blue-bright flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </span>
                <span>
                  <span className="block text-xs text-muted">Email</span>
                  <span className="font-semibold text-ink break-all">{company.email}</span>
                </span>
              </a>
              <div className="flex items-center gap-3 bg-white border border-edge rounded-xl p-4">
                <span className="w-11 h-11 rounded-lg bg-blue/10 text-blue-bright flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </span>
                <span>
                  <span className="block text-xs text-muted">Location</span>
                  <span className="font-semibold text-ink">{company.addressLine1}, {company.addressLine2}</span>
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl font-bold text-navy mb-4">Send an Enquiry</h2>
            <EnquiryForm variant="contact" />
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-page">
          <div className="rounded-2xl overflow-hidden border border-edge aspect-[16/7]">
            <iframe
              title="Sri Amman Technologies location"
              src={company.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
