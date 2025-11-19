/**
 * Business constants - Single Responsibility: Immutable business data
 * Zero magic values, centralized source of truth
 */

import type { BusinessInfo } from '../types/business.ts';

export const BUSINESS_INFO: Readonly<BusinessInfo> = Object.freeze({
  name: 'Brokentop Garage Doors',
  phone: '541-203-7676',
  email: 'info@brokentopgaragedoors.com',
  address: '123 Drake Rd, Bend, OR 97701',
  foundingYear: 2010,
  rating: 4.9,
  reviewCount: 287,
});

export const SERVICE_AREAS: readonly string[] = Object.freeze([
  'Bend',
  'Redmond',
  'Sisters',
  'Sunriver',
  'La Pine',
]);

export const BUSINESS_HOURS: Readonly<Record<string, string>> = Object.freeze({
  weekdays: '8:00 AM - 6:00 PM',
  saturday: '9:00 AM - 4:00 PM',
  sunday: '24/7 Emergency Service',
});
