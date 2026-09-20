export const processSteps = [
  { step: 1, title: 'Contact Us', description: 'Reach out by phone, WhatsApp or the enquiry form.' },
  { step: 2, title: 'Requirement Assessment', description: 'We understand your classroom or institution needs.' },
  { step: 3, title: 'Technical Evaluation', description: 'We assess the site or equipment where relevant.' },
  { step: 4, title: 'Solution Recommendation', description: 'We recommend suitable products or service options.' },
  { step: 5, title: 'Service / Installation', description: 'Our team carries out the installation or service.' },
  { step: 6, title: 'Support', description: 'We remain available for follow-up support and queries.' },
];

const services = [
  {
    id: 1,
    slug: 'projector-service',
    name: 'Projector Service & Repair',
    icon: 'Wrench',
    shortDescription: 'Professional service and repair for all major projector brands.',
    description:
      'We provide projector service and repair support for schools, colleges and institutions, helping keep classroom and hall projection equipment working reliably.',
    features: [
      'Diagnosis and repair of common projector issues',
      'Lamp and filter replacement support',
      'Support across major projector brands',
      'On-site and workshop service options',
    ],
    benefits: [
      'Reduced downtime for classroom equipment',
      'Experienced technical handling',
      'Convenient service coordination',
    ],
    relatedServices: ['projector-rental', 'reconditioned-projectors', 'maintenance'],
    relatedProducts: ['lcd-projectors', 'reconditioned-projectors'],
  },
  {
    id: 2,
    slug: 'projector-rental',
    name: 'Projector Rental',
    icon: 'Calendar',
    shortDescription: 'Short-term and long-term projector rental solutions.',
    description:
      'Our projector rental service is suited for events, seminars, exams and short-term classroom requirements where purchasing a new unit is not necessary.',
    features: [
      'Short-term and long-term rental options',
      'Suitable for events, seminars and exams',
      'Delivery and setup support',
      'Well-maintained rental units',
    ],
    benefits: ['Cost-effective for temporary needs', 'Flexible rental duration', 'Reduces upfront investment'],
    relatedServices: ['projector-service', 'reconditioned-projectors', 'installation'],
    relatedProducts: ['lcd-projectors', 'projector-screens'],
  },
  {
    id: 3,
    slug: 'reconditioned-projectors',
    name: 'Reconditioned Projectors',
    icon: 'RefreshCw',
    shortDescription: 'High quality reconditioned projectors at affordable prices.',
    description:
      'We supply reconditioned projectors that have been inspected and serviced, giving institutions a more affordable path to reliable classroom projection.',
    features: [
      'Units inspected and serviced before sale',
      'Affordable compared to new equipment',
      'Suitable for classrooms and training rooms',
      'Backed by our service support',
    ],
    benefits: ['Lower cost of ownership', 'Reliable, checked equipment', 'Backed by ongoing service support'],
    relatedServices: ['projector-service', 'maintenance', 'installation'],
    relatedProducts: ['reconditioned-projectors', 'lcd-projectors'],
  },
  {
    id: 4,
    slug: 'installation',
    name: 'Installation & Setup',
    icon: 'Settings',
    shortDescription: 'Professional installation for classrooms and auditoriums.',
    description:
      'Our team handles installation and setup of boards, panels, projectors, screens and audio systems, ensuring equipment is positioned and connected correctly.',
    features: [
      'Installation of boards, panels and projectors',
      'Screen and mount fitting',
      'Cabling and connectivity setup',
      'Classroom and auditorium experience',
    ],
    benefits: ['Correctly positioned, safely mounted equipment', 'Reduced setup time', 'Clean, professional finish'],
    relatedServices: ['maintenance', 'classroom-solutions', 'projector-service'],
    relatedProducts: ['interactive-panels', 'lcd-projectors', 'projector-screens'],
  },
  {
    id: 5,
    slug: 'maintenance',
    name: 'Maintenance Contracts',
    icon: 'ShieldCheck',
    shortDescription: 'AMC and regular maintenance for uninterrupted performance.',
    description:
      'Maintenance contracts help institutions keep classroom equipment running smoothly with scheduled check-ups and support when issues arise.',
    features: [
      'Scheduled equipment check-ups',
      'Priority support for contract holders',
      'Covers boards, panels, projectors and audio equipment',
      'Flexible contract terms',
    ],
    benefits: ['Fewer unexpected breakdowns', 'Predictable support arrangement', 'Extended equipment life'],
    relatedServices: ['projector-service', 'installation', 'classroom-solutions'],
    relatedProducts: ['lcd-projectors', 'interactive-panels'],
  },
  {
    id: 6,
    slug: 'classroom-solutions',
    name: 'Classroom Solutions',
    icon: 'Users',
    shortDescription: 'End-to-end setup for smart classrooms and labs.',
    description:
      'We help institutions plan and set up complete classroom environments, combining boards, panels, projection, furniture and audio into one coordinated solution.',
    features: [
      'End-to-end classroom planning support',
      'Combines products across categories',
      'Suitable for smart classrooms and labs',
      'Coordinated installation and support',
    ],
    benefits: ['Single point of contact for a full classroom', 'Consistent, coordinated equipment', 'Simplified planning'],
    relatedServices: ['installation', 'maintenance', 'projector-rental'],
    relatedProducts: ['interactive-panels', 'school-furniture', 'podiums'],
  },
];

export function getAllServices() {
  return services;
}

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs = []) {
  return services.filter((s) => slugs.includes(s.slug));
}

export default services;
