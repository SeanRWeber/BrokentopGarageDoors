/**
 * CSS handler - Single Responsibility: Serve stylesheet
 * Pure function, cached headers, minified output
 */

import { COMPLETE_STYLES } from '../assets/styles';

const CSS_HEADERS: Readonly<Record<string, string>> = Object.freeze({
  'Content-Type': 'text/css; charset=utf-8',
  'Cache-Control': 'public, max-age=31536000, immutable',
  'X-Content-Type-Options': 'nosniff',
});

export const handleCss = (): Response =>
  new Response(COMPLETE_STYLES, {
    status: 200,
    headers: CSS_HEADERS,
  });
