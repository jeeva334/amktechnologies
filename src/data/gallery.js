import { stockImage } from '../utils/placeholder.js';

const galleryItems = [
  { id: 1, title: 'Classroom Setup', category: 'Classrooms', image: stockImage('gallery-classroom-1') },
  { id: 2, title: 'LCD Projector in Use', category: 'Projectors', image: stockImage('gallery-projector-1') },
  { id: 3, title: 'Interactive Panel Session', category: 'Interactive Panels', image: stockImage('gallery-panel-1') },
  { id: 4, title: 'School Furniture', category: 'Furniture', image: stockImage('gallery-furniture-1') },
  { id: 5, title: 'Installation Work', category: 'Installations', image: stockImage('gallery-installation-1') },
  { id: 6, title: 'Training Session', category: 'Events', image: stockImage('gallery-event-1') },
  { id: 7, title: 'Smart Classroom View', category: 'Classrooms', image: stockImage('gallery-classroom-2') },
  { id: 8, title: 'Projector Screen Setup', category: 'Projectors', image: stockImage('gallery-projector-2') },
  { id: 9, title: 'Panel Mounting', category: 'Interactive Panels', image: stockImage('gallery-panel-2') },
  { id: 10, title: 'Classroom Benches', category: 'Furniture', image: stockImage('gallery-furniture-2') },
  { id: 11, title: 'Site Installation', category: 'Installations', image: stockImage('gallery-installation-2') },
  { id: 12, title: 'School Function', category: 'Events', image: stockImage('gallery-event-2') },
];

export const galleryFilters = ['All', 'Classrooms', 'Projectors', 'Interactive Panels', 'Furniture', 'Installations', 'Events'];

export default galleryItems;
