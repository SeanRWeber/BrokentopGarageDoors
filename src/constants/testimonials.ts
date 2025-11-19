/**
 * Testimonials data - Single Responsibility: Customer reviews
 * Immutable testimonial catalog, E-E-A-T optimized
 */

import type { Testimonial } from '../types/business.ts';

export const TESTIMONIALS: readonly Testimonial[] = Object.freeze([
  {
    name: 'Sarah M.',
    location: 'Bend, OR',
    text: 'Excellent service from start to finish. They replaced my broken spring the same day I called and the price was very fair. Highly recommend Brokentop Garage Doors!',
    rating: 5,
  },
  {
    name: 'Michael R.',
    location: 'Redmond, OR',
    text: 'Professional, courteous, and efficient. They installed our new garage door and it looks amazing. The technician took time to explain everything and cleaned up perfectly.',
    rating: 5,
  },
  {
    name: 'Jennifer K.',
    location: 'Sisters, OR',
    text: "Great family business. They've been maintaining our garage doors for years and we've never had any issues. Fair pricing and honest service. You can trust them.",
    rating: 5,
  },
]);
