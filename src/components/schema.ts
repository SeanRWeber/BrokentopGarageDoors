/**
 * Schema.org component - Single Responsibility: Structured data
 * Pure function, E-E-A-T optimized, JSON-LD format
 */

import { BUSINESS_INFO } from '../constants/business';

export const Schema = (): string => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_INFO.name,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Drake Rd',
      addressLocality: 'Bend',
      addressRegion: 'OR',
      postalCode: '97701',
      addressCountry: 'US',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS_INFO.rating.toString(),
      reviewCount: BUSINESS_INFO.reviewCount.toString(),
    },
    foundingDate: BUSINESS_INFO.foundingYear.toString(),
  };

  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
};
