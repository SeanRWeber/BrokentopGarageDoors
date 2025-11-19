/**
 * JavaScript handler - Single Responsibility: Serve client script
 * Pure function, cached headers, navigation logic
 */

import { NAVIGATION_SCRIPT } from '../assets/navigation.ts';

const JS_HEADERS: Readonly<Record<string, string>> = Object.freeze({
  'Content-Type': 'application/javascript; charset=utf-8',
  'Cache-Control': 'public, max-age=31536000, immutable',
  'X-Content-Type-Options': 'nosniff',
});

export const handleJs = (): Response =>
  new Response(NAVIGATION_SCRIPT, {
    status: 200,
    headers: JS_HEADERS,
  });
