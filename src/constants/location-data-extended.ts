/**
 * Extended location data - Single Responsibility: Additional service areas
 * Immutable, local SEO optimization
 */

import type { LocationDetail } from '../types/location';

export const LOCATION_LA_PINE: LocationDetail = Object.freeze({
  slug: 'la-pine-oregon-garage-door-repair',
  city: 'La Pine',
  zip: ['97739'],
  landmarks: ['Downtown La Pine', 'Newberry Crater', 'Paulina Lake'],
  driveTime: '45 minutes',
});

export const LOCATION_PRINEVILLE: LocationDetail = Object.freeze({
  slug: 'prineville-oregon-garage-door-repair',
  city: 'Prineville',
  zip: ['97754'],
  landmarks: ['Downtown Prineville', 'Prineville Reservoir', 'Crooked River'],
  driveTime: '40 minutes',
});

export const LOCATION_TUMALO: LocationDetail = Object.freeze({
  slug: 'tumalo-oregon-garage-door-repair',
  city: 'Tumalo',
  zip: ['97703'],
  landmarks: ['Tumalo State Park', 'Tumalo Creek', 'Old Tumalo'],
  driveTime: '20 minutes',
});

export const LOCATION_DESCHUTES: LocationDetail = Object.freeze({
  slug: 'deschutes-river-woods-oregon-garage-door-repair',
  city: 'Deschutes River Woods',
  zip: ['97702'],
  landmarks: ['Deschutes River', 'River Woods Golf Course', 'Widgi Creek Golf'],
  driveTime: '15 minutes',
});
