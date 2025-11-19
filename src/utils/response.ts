/**
 * HTTP response utilities - Single Responsibility: Response creation
 * Pure factory functions, immutable responses
 */

const SECURITY_HEADERS: Readonly<Record<string, string>> = Object.freeze({
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'",
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
});

export const createHtmlResponse = (html: string): Response =>
  new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      ...SECURITY_HEADERS,
    },
  });

export const createNotFoundResponse = (): Response =>
  new Response('404 Not Found', {
    status: 404,
    headers: { 'Content-Type': 'text/plain' },
  });
