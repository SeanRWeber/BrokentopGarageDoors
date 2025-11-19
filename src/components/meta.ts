/**
 * Meta component - Single Responsibility: HTML meta tags
 * Pure function, SEO optimized, YMYL compliant, XSS protected
 */

import { BUSINESS_INFO } from '../constants/business';
import { escapeHtml, sanitizeUrl } from '../utils/sanitize';

interface MetaProps {
  readonly title: string;
  readonly description: string;
  readonly path?: string;
}

export const Meta = ({ title, description, path = '/' }: MetaProps): string => {
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);
  const fullTitle = `${safeTitle} | ${escapeHtml(BUSINESS_INFO.name)}`;
  const url = sanitizeUrl(`https://brokentopgaragedoors.com${path}`);

  return `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${safeDescription}">
    <title>${fullTitle}</title>
    <link rel="canonical" href="${url}">
    <meta property="og:title" content="${fullTitle}">
    <meta property="og:description" content="${safeDescription}">
    <meta property="og:url" content="${url}">
    <meta property="og:type" content="website">
  `.trim();
};
