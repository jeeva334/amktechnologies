import { stockImage } from '../utils/placeholder.js';

export const categories = [
  { id: 'classroom-boards', name: 'Classroom Boards' },
  { id: 'smart-classroom', name: 'Smart Classroom' },
  { id: 'projection-solutions', name: 'Projection Solutions' },
  { id: 'classroom-infrastructure', name: 'Classroom Infrastructure' },
  { id: 'audio-accessories', name: 'Audio & Accessories' },
];

const products = [
  {
    id: 1,
    slug: 'chalk-boards',
    name: 'Green Chalk Boards',
    category: 'classroom-boards',
    categoryLabel: 'Classroom Boards',
    image: stockImage('chalkboard-classroom-1'),
    gallery: [stockImage('chalkboard-classroom-2'), stockImage('chalkboard-classroom-3')],
    shortDescription: 'Durable green chalk boards built for everyday classroom use.',
    description:
      'Our green chalk boards are built for daily classroom writing with a smooth, glare-free surface and a sturdy aluminium frame. Suitable for schools, colleges and training rooms that rely on traditional chalk-based teaching.',
    features: [
      'Smooth, glare-reducing writing surface',
      'Sturdy aluminium frame',
      'Available in multiple sizes',
      'Wall-mounted or fixed installation',
      'Long-lasting classroom use',
    ],
    applications: ['Schools', 'Colleges', 'Coaching centres', 'Training institutes'],
    specifications: [
      { label: 'Surface', value: 'Green writing board' },
      { label: 'Frame', value: 'Aluminium' },
      { label: 'Mounting', value: 'Wall-mounted' },
      { label: 'Sizes', value: 'Multiple sizes available' },
    ],
    relatedProducts: ['white-marker-boards', 'notice-boards', 'interactive-panels'],
  },
  {
    id: 2,
    slug: 'white-marker-boards',
    name: 'White Marker Boards',
    category: 'classroom-boards',
    categoryLabel: 'Classroom Boards',
    image: stockImage('whiteboard-classroom-1'),
    gallery: [stockImage('whiteboard-classroom-2'), stockImage('whiteboard-classroom-3')],
    shortDescription: 'Smooth white marker boards for classrooms and meeting rooms.',
    description:
      'White marker boards from Sri Amman Technologies offer a clean, non-glare writing surface for classrooms, staff rooms and meeting spaces, with easy marker cleaning and a durable frame.',
    features: [
      'Smooth, non-glare surface',
      'Easy marker cleaning',
      'Durable aluminium frame',
      'Available in multiple sizes',
      'Suitable for classrooms and offices',
    ],
    applications: ['Classrooms', 'Staff rooms', 'Meeting rooms', 'Training centres'],
    specifications: [
      { label: 'Surface', value: 'White writing board' },
      { label: 'Frame', value: 'Aluminium' },
      { label: 'Mounting', value: 'Wall-mounted' },
      { label: 'Sizes', value: 'Multiple sizes available' },
    ],
    relatedProducts: ['chalk-boards', 'notice-boards', 'interactive-panels'],
  },
  {
    id: 3,
    slug: 'notice-boards',
    name: 'Notice Boards',
    category: 'classroom-boards',
    categoryLabel: 'Classroom Boards',
    image: stockImage('notice-board-office-1'),
    gallery: [stockImage('notice-board-office-2'), stockImage('notice-board-office-3')],
    shortDescription: 'Pin-up notice boards for announcements and displays.',
    description:
      'Notice boards for schools, colleges and offices, ideal for displaying announcements, timetables and student information in a tidy, organised way.',
    features: [
      'Soft pin-up surface',
      'Available in multiple colours and sizes',
      'Aluminium or wooden frame options',
      'Wall-mounted installation',
    ],
    applications: ['Schools', 'Colleges', 'Offices', 'Corridors and staff rooms'],
    specifications: [
      { label: 'Surface', value: 'Pin-up board' },
      { label: 'Frame', value: 'Aluminium / wood options' },
      { label: 'Mounting', value: 'Wall-mounted' },
    ],
    relatedProducts: ['chalk-boards', 'white-marker-boards', 'podiums'],
  },
  {
    id: 4,
    slug: 'interactive-panels',
    name: 'Interactive Panels',
    category: 'smart-classroom',
    categoryLabel: 'Smart Classroom',
    image: stockImage('interactive-panel-classroom-1'),
    gallery: [stockImage('interactive-panel-classroom-2'), stockImage('interactive-panel-classroom-3')],
    shortDescription: 'Touch-enabled interactive display panels for smart classrooms.',
    description:
      'Interactive panels bring digital teaching to the classroom with touch-enabled displays that support presentations, annotation and multimedia content, helping schools and colleges move toward smart classroom setups.',
    features: [
      'Touch-enabled interactive display',
      'Supports presentations and annotation',
      'Multiple screen size options',
      'Suitable for classrooms and boardrooms',
      'Wall-mount or stand installation',
    ],
    applications: ['Smart classrooms', 'Training rooms', 'Corporate boardrooms'],
    specifications: [
      { label: 'Display', value: 'Touch-enabled panel' },
      { label: 'Sizes', value: 'Multiple configurations' },
      { label: 'Mounting', value: 'Wall-mount or stand' },
      { label: 'Connectivity', value: 'Multiple input options' },
    ],
    relatedProducts: ['lcd-projectors', 'projector-screens', 'home-theatre'],
  },
  {
    id: 5,
    slug: 'lcd-projectors',
    name: 'LCD Projectors',
    category: 'projection-solutions',
    categoryLabel: 'Projection Solutions',
    image: stockImage('lcd-projector-1'),
    gallery: [
      stockImage('lcd-projector-2'),
      stockImage('lcd-projector-3'),
      stockImage('lcd-projector-4'),
    ],
    shortDescription: 'Bright performance for every learning space.',
    description:
      'Our LCD projectors deliver clear, bright visuals suitable for classrooms, meeting rooms and training centres. We supply reputed brands and provide installation and after-sales support for educational institutions.',
    features: [
      'Clear and bright projection',
      'Suitable for classroom or conference use',
      'Multiple input options (HDMI, VGA, USB)',
      'Energy efficient',
      'Available in multiple configurations',
    ],
    applications: ['Classrooms', 'Conference rooms', 'Training centres', 'Auditoriums'],
    specifications: [
      { label: 'Type', value: 'LCD Projector' },
      { label: 'Connectivity', value: 'HDMI / VGA / USB' },
      { label: 'Use case', value: 'Classroom & conference' },
      { label: 'Configurations', value: 'New and reconditioned options' },
    ],
    relatedProducts: ['projector-screens', 'interactive-panels', 'hdmi-vga-cables'],
  },
  {
    id: 6,
    slug: 'projector-screens',
    name: 'Projector Screens',
    category: 'projection-solutions',
    categoryLabel: 'Projection Solutions',
    image: stockImage('projector-screen-1'),
    gallery: [stockImage('projector-screen-2'), stockImage('projector-screen-3')],
    shortDescription: 'Wall and ceiling-mounted screens for sharp projection.',
    description:
      'Projector screens designed for clear, distortion-free viewing in classrooms and halls, available in wall-mounted, ceiling-mounted and portable configurations.',
    features: [
      'Smooth, matte projection surface',
      'Wall or ceiling mount options',
      'Multiple size options',
      'Easy installation',
    ],
    applications: ['Classrooms', 'Auditoriums', 'Training halls', 'Conference rooms'],
    specifications: [
      { label: 'Type', value: 'Projection screen' },
      { label: 'Mounting', value: 'Wall / ceiling mount' },
      { label: 'Sizes', value: 'Multiple sizes available' },
    ],
    relatedProducts: ['lcd-projectors', 'interactive-panels', 'reconditioned-projectors'],
  },
  {
    id: 7,
    slug: 'home-theatre',
    name: 'Home Theatre',
    category: 'audio-accessories',
    categoryLabel: 'Audio & Accessories',
    image: stockImage('speakers-audio-system-1'),
    gallery: [stockImage('speakers-audio-system-2'), stockImage('speakers-audio-system-3')],
    shortDescription: 'Powerful audio systems for halls, events and classrooms.',
    description:
      'Home theatre and speaker systems suited for school events, auditoriums and functions, delivering clear sound for announcements, presentations and performances.',
    features: [
      'High-output speaker systems',
      'Suitable for halls and events',
      'Multiple connectivity options',
      'Available in various configurations',
    ],
    applications: ['School events', 'Auditoriums', 'Functions', 'Conference halls'],
    specifications: [
      { label: 'Type', value: 'Speaker / home theatre system' },
      { label: 'Use case', value: 'Events and auditoriums' },
    ],
    relatedProducts: ['interactive-panels', 'hdmi-vga-cables', 'lcd-projectors'],
  },
  {
    id: 8,
    slug: 'reconditioned-projectors',
    name: 'Reconditioned Projectors',
    category: 'projection-solutions',
    categoryLabel: 'Projection Solutions',
    image: stockImage('reconditioned-projector-1'),
    gallery: [stockImage('reconditioned-projector-2'), stockImage('reconditioned-projector-3')],
    shortDescription: 'Quality-checked reconditioned projectors at affordable prices.',
    description:
      'Reconditioned projectors that are inspected and serviced before sale, offering an affordable option for institutions that need reliable projection without new-unit pricing. Related repair and rental support is also available under our services.',
    features: [
      'Inspected and serviced units',
      'Affordable alternative to new projectors',
      'Suitable for classrooms and training rooms',
      'Backed by our service support',
    ],
    applications: ['Schools', 'Training institutes', 'Small classrooms', 'Budget-conscious setups'],
    specifications: [
      { label: 'Condition', value: 'Reconditioned / serviced' },
      { label: 'Support', value: 'Backed by service team' },
    ],
    relatedProducts: ['lcd-projectors', 'projector-screens', 'hdmi-vga-cables'],
  },
  {
    id: 9,
    slug: 'podiums',
    name: 'Podiums',
    category: 'classroom-infrastructure',
    categoryLabel: 'Classroom Infrastructure',
    image: stockImage('wooden-podium-1'),
    gallery: [stockImage('wooden-podium-2'), stockImage('wooden-podium-3')],
    shortDescription: 'Professional podiums for classrooms, halls and events.',
    description:
      'Sturdy, professionally finished podiums for classrooms, seminar halls and events, available in different finishes to suit institutional and corporate settings.',
    features: [
      'Sturdy, stable construction',
      'Professional finish',
      'Available in multiple designs',
      'Suitable for halls and classrooms',
    ],
    applications: ['Seminar halls', 'Classrooms', 'Events', 'Conference rooms'],
    specifications: [
      { label: 'Type', value: 'Presentation podium' },
      { label: 'Finish', value: 'Multiple finish options' },
    ],
    relatedProducts: ['school-furniture', 'notice-boards', 'home-theatre'],
  },
  {
    id: 10,
    slug: 'school-furniture',
    name: 'School Furniture',
    category: 'classroom-infrastructure',
    categoryLabel: 'Classroom Infrastructure',
    image: stockImage('school-desks-furniture-1'),
    gallery: [stockImage('school-desks-furniture-2'), stockImage('school-desks-furniture-3')],
    shortDescription: 'Durable desks and benches for classrooms of every size.',
    description:
      'A range of classroom furniture including desks and benches, built for durability and everyday student use, suitable for schools and educational institutions of all sizes.',
    features: [
      'Durable build for daily use',
      'Available in multiple sizes',
      'Comfortable, practical design',
      'Suitable for all classroom sizes',
    ],
    applications: ['Primary schools', 'Secondary schools', 'Colleges', 'Training institutes'],
    specifications: [
      { label: 'Type', value: 'Desks & benches' },
      { label: 'Material', value: 'Durable classroom-grade build' },
    ],
    relatedProducts: ['podiums', 'notice-boards', 'chalk-boards'],
  },
  {
    id: 11,
    slug: 'hdmi-vga-cables',
    name: 'HDMI / VGA Cables',
    category: 'audio-accessories',
    categoryLabel: 'Audio & Accessories',
    image: stockImage('hdmi-cables-1'),
    gallery: [stockImage('hdmi-cables-2'), stockImage('hdmi-cables-3')],
    shortDescription: 'Reliable connectivity cables and accessories.',
    description:
      'HDMI, VGA and other connectivity cables and accessories to keep your projectors, panels and audio equipment reliably connected in the classroom or hall.',
    features: [
      'HDMI and VGA options',
      'Reliable, consistent connectivity',
      'Multiple lengths available',
      'Compatible with most classroom AV equipment',
    ],
    applications: ['Classrooms', 'Conference rooms', 'AV setups', 'Events'],
    specifications: [
      { label: 'Type', value: 'HDMI / VGA cables' },
      { label: 'Compatibility', value: 'Most projectors & panels' },
    ],
    relatedProducts: ['lcd-projectors', 'interactive-panels', 'home-theatre'],
  },
];

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryId) {
  if (!categoryId || categoryId === 'all') return products;
  return products.filter((p) => p.category === categoryId);
}

export function getRelatedProducts(slugs = []) {
  return products.filter((p) => slugs.includes(p.slug));
}

export default products;
