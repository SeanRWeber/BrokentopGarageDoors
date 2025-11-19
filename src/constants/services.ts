/**
 * Services data - Single Responsibility: Service offerings
 * Immutable service catalog, zero runtime overhead
 */

import type { Service } from '../types/business.ts';

export const SERVICES: readonly Service[] = Object.freeze([
  {
    id: 'repair',
    title: 'Garage Door Repair',
    description: 'Expert repairs on all makes and models. From broken springs to malfunctioning openers, we fix it all quickly and professionally.',
    icon: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z',
  },
  {
    id: 'installation',
    title: 'Door Installation',
    description: "Professional installation of new garage doors. We work with top brands to provide quality doors that enhance your home's curb appeal.",
    icon: 'M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zM9 9h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z',
  },
  {
    id: 'spring',
    title: 'Spring Replacement',
    description: 'Fast and safe garage door spring replacement. We stock high-quality springs for immediate service and long-lasting performance.',
    icon: 'M6 3l-2 6h2.5l1-3h1l-1 3H10l1-3h1l-1 3h2.5l1-3h1l-1 3H17l1-3h1l-1 3h2.5L18 3H6zm12 7c-.83 0-1.5.67-1.5 1.5 0 .84.67 1.5 1.5 1.5s1.5-.66 1.5-1.5c0-.83-.67-1.5-1.5-1.5z',
  },
  {
    id: 'opener',
    title: 'Opener Service',
    description: 'Installation, repair, and replacement of garage door openers. Specializing in LiftMaster and other premium brands.',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z',
  },
  {
    id: 'panel',
    title: 'Panel Replacement',
    description: "Replace damaged panels without replacing the entire door. Cost-effective solution to restore your door's appearance and function.",
    icon: 'M20 8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10h20V10c0-1.1-.9-2-2-2zM9 6h6v2H9V6zm11 12H4v-4h2v2h2v-2h8v2h2v-2h2v4z',
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description: 'Preventive maintenance to keep your garage door running smoothly. Regular tune-ups extend the life of your door system.',
    icon: 'M9.5 3C5.916 3 3 5.916 3 9.5S5.916 16 9.5 16c1.747 0 3.332-.686 4.499-1.803l5.652 5.652a1 1 0 0 0 1.414-1.414l-5.652-5.652A6.473 6.473 0 0 0 16 9.5C16 5.916 13.084 3 9.5 3z',
  },
]);
