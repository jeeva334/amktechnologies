import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { getAllProducts } from '../data/products.js';
import { getAllServices } from '../data/services.js';
import company from '../data/company.js';

const productOptions = getAllProducts().map((p) => p.name);
const serviceOptions = getAllServices().map((s) => s.name);

export default function EnquiryForm({ variant = 'contact' }) {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    productService: '',
    quantity: '',
    contactMethod: 'Phone',
    message: '',
  });

  const update = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // NOTE: Wire this up to your email/CRM backend (e.g. Formspree, EmailJS,
    // or a serverless function) to actually deliver enquiries.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-edge shadow-card p-8 text-center flex flex-col items-center gap-3">
        <CheckCircle2 size={40} className="text-blue-bright" />
        <h3 className="text-xl font-semibold text-navy">Thank you!</h3>
        <p className="text-muted">
          Your enquiry has been received. Our team will get back to you shortly, or you can reach us
          directly at {company.phone}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-edge shadow-card p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-ink">Name *</label>
        <input
          id="name"
          required
          value={values.name}
          onChange={update('name')}
          className="rounded-lg border border-edge px-4 py-3 min-h-[44px] focus:border-blue-bright outline-none"
          placeholder="Your Name"
        />
      </div>

      {variant === 'enquiry' && (
        <div className="flex flex-col gap-1.5">
          <label htmlFor="organization" className="text-sm font-medium text-ink">Organization</label>
          <input
            id="organization"
            value={values.organization}
            onChange={update('organization')}
            className="rounded-lg border border-edge px-4 py-3 min-h-[44px] focus:border-blue-bright outline-none"
            placeholder="School / College / Institute"
          />
        </div>
      )}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-ink">Email *</label>
        <input
          id="email"
          type="email"
          required
          value={values.email}
          onChange={update('email')}
          className="rounded-lg border border-edge px-4 py-3 min-h-[44px] focus:border-blue-bright outline-none"
          placeholder="you@example.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-sm font-medium text-ink">Phone *</label>
        <input
          id="phone"
          type="tel"
          required
          value={values.phone}
          onChange={update('phone')}
          className="rounded-lg border border-edge px-4 py-3 min-h-[44px] focus:border-blue-bright outline-none"
          placeholder="Your Phone Number"
        />
      </div>

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="productService" className="text-sm font-medium text-ink">Product / Service</label>
        <select
          id="productService"
          value={values.productService}
          onChange={update('productService')}
          className="rounded-lg border border-edge px-4 py-3 min-h-[44px] focus:border-blue-bright outline-none bg-white"
        >
          <option value="">Select Product / Service</option>
          <optgroup label="Products">
            {productOptions.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </optgroup>
          <optgroup label="Services">
            {serviceOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </optgroup>
        </select>
      </div>

      {variant === 'enquiry' && (
        <>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="quantity" className="text-sm font-medium text-ink">Quantity</label>
            <input
              id="quantity"
              value={values.quantity}
              onChange={update('quantity')}
              className="rounded-lg border border-edge px-4 py-3 min-h-[44px] focus:border-blue-bright outline-none"
              placeholder="e.g. 5 units"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contactMethod" className="text-sm font-medium text-ink">Preferred Contact Method</label>
            <select
              id="contactMethod"
              value={values.contactMethod}
              onChange={update('contactMethod')}
              className="rounded-lg border border-edge px-4 py-3 min-h-[44px] focus:border-blue-bright outline-none bg-white"
            >
              <option>Phone</option>
              <option>WhatsApp</option>
              <option>Email</option>
            </select>
          </div>
        </>
      )}

      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="message" className="text-sm font-medium text-ink">Message</label>
        <textarea
          id="message"
          rows={4}
          value={values.message}
          onChange={update('message')}
          className="rounded-lg border border-edge px-4 py-3 focus:border-blue-bright outline-none resize-none"
          placeholder="Tell us about your requirement..."
        />
      </div>

      <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3">
        <button type="submit" className="btn-primary flex-1">
          {variant === 'enquiry' ? 'Submit Enquiry' : 'Send Enquiry'}
        </button>
        {variant === 'enquiry' && (
          <>
            <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-secondary flex-1">
              Chat on WhatsApp
            </a>
            <a href={company.phoneHref} className="btn-secondary flex-1">
              Call Us
            </a>
          </>
        )}
      </div>
    </form>
  );
}
