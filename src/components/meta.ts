/**
 * Meta component - Single Responsibility: HTML meta tags
 * Pure function, SEO optimized, YMYL compliant
 */

import { BUSINESS_INFO } from '../constants/business.ts';

interface MetaProps {
  readonly title: string;
  readonly description: string;
  readonly path?: string;
}

export const Meta = ({ title, description, path = '/' }: MetaProps): string => {
  const fullTitle = `${title} | ${BUSINESS_INFO.name}`;
  const url = `https://brokentopgaragedoors.com${path}`;

  return `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${description}">
    <title>${fullTitle}</title>
    <link rel="canonical" href="${url}">
    <meta property="og:title" content="${fullTitle}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${url}">
    <meta property="og:type" content="website">
  `.trim();
};
