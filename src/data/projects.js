import { stockImage } from '../utils/placeholder.js';

const projects = [
  {
    id: 1,
    title: 'Smart Classroom Installation',
    category: 'Classrooms',
    image: stockImage('project-smart-classroom'),
    description:
      'Complete smart classroom setup combining an interactive panel, furniture and supporting AV equipment for a modern learning environment.',
  },
  {
    id: 2,
    title: 'Interactive Panel Installation',
    category: 'Interactive Panels',
    image: stockImage('project-interactive-panel'),
    description:
      'Installation of a touch-enabled interactive panel with wall mounting and connectivity setup for classroom teaching.',
  },
  {
    id: 3,
    title: 'Projector Installation',
    category: 'Projectors',
    image: stockImage('project-projector-install'),
    description:
      'Ceiling-mounted projector installation with screen fitting and cabling for a training hall.',
  },
  {
    id: 4,
    title: 'Classroom Furniture Setup',
    category: 'Furniture',
    image: stockImage('project-furniture-setup'),
    description: 'Supply and arrangement of durable desks and benches for a school classroom.',
  },
  {
    id: 5,
    title: 'Educational Technology Setup',
    category: 'Installations',
    image: stockImage('project-edtech-setup'),
    description:
      'Combined supply of boards, projection equipment and furniture as part of a classroom upgrade.',
  },
];

export default projects;
