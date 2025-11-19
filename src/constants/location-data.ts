/**
 * Location data - Single Responsibility: Service area aggregation
 * Immutable location catalog, local SEO optimization
 */

import type { LocationDetail } from '../types/location';
import { LOCATION_BEND, LOCATION_REDMOND, LOCATION_SISTERS, LOCATION_SUNRIVER } from './location-data-primary';
import { LOCATION_LA_PINE, LOCATION_PRINEVILLE, LOCATION_TUMALO, LOCATION_DESCHUTES } from './location-data-extended';

export {
  LOCATION_BEND,
  LOCATION_REDMOND,
  LOCATION_SISTERS,
  LOCATION_SUNRIVER,
  LOCATION_LA_PINE,
  LOCATION_PRINEVILLE,
  LOCATION_TUMALO,
  LOCATION_DESCHUTES,
};

export const ALL_LOCATIONS: readonly LocationDetail[] = Object.freeze([
  LOCATION_BEND,
  LOCATION_REDMOND,
  LOCATION_SISTERS,
  LOCATION_SUNRIVER,
  LOCATION_LA_PINE,
  LOCATION_PRINEVILLE,
  LOCATION_TUMALO,
  LOCATION_DESCHUTES,
]);
