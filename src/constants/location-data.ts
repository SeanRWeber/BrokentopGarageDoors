/**
 * Location data - Single Responsibility: Service area definitions
 * Immutable location catalog, local SEO optimization
 */

import type { LocationDetail } from '../types/location';

export const LOCATION_BEND: LocationDetail = Object.freeze({
  slug: 'bend-oregon-garage-door-repair',
  city: 'Bend',
  zip: ['97701', '97702', '97703', '97708', '97709'],
  landmarks: ['Old Mill District', 'Downtown Bend', 'NorthWest Crossing', 'Awbrey Butte'],
  driveTime: '10 minutes',
});

export const LOCATION_REDMOND: LocationDetail = Object.freeze({
  slug: 'redmond-oregon-garage-door-repair',
  city: 'Redmond',
  zip: ['97756'],
  landmarks: ['Downtown Redmond', 'Eagle Crest', 'Dry Canyon'],
  driveTime: '25 minutes',
});

export const LOCATION_SISTERS: LocationDetail = Object.freeze({
  slug: 'sisters-oregon-garage-door-repair',
  city: 'Sisters',
  zip: ['97759'],
  landmarks: ['Downtown Sisters', 'Black Butte Ranch', 'Tollgate'],
  driveTime: '35 minutes',
});

export const ALL_LOCATIONS: readonly LocationDetail[] = Object.freeze([
  LOCATION_BEND,
  LOCATION_REDMOND,
  LOCATION_SISTERS,
]);
