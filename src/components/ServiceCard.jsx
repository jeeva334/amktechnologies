import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Calendar, RefreshCw, Settings, ShieldCheck, Users } from 'lucide-react';

const iconMap = { Wrench, Calendar, RefreshCw, Settings, ShieldCheck, Users };

export default function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || Wrench;
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group bg-white rounded-2xl border border-edge shadow-card p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
    >
      <span className="w-12 h-12 rounded-xl bg-blue/10 text-blue-bright flex items-center justify-center">
        <Icon size={24} />
      </span>
      <h3 className="font-semibold text-ink text-lg">{service.name}</h3>
      <p className="text-sm text-muted flex-1">{service.shortDescription}</p>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
        Learn More
        <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
