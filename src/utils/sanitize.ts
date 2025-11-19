/**
 * Sanitization utilities - Single Responsibility: Input sanitization
 * Pure functions, zero side effects, defensive security
 */

const HTML_ESCAPE_MAP: Readonly<Record<string, string>> = Object.freeze({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '/': '&#x2F;',
});

export const escapeHtml = (unsafe: string): string =>
  unsafe.replace(/[&<>"'/]/g, (char) => HTML_ESCAPE_MAP[char] ?? char);

export const sanitizeUrl = (url: string): string => {
  const trimmed = url.trim();
  const lowercased = trimmed.toLowerCase();

  if (lowercased.startsWith('javascript:') ||
      lowercased.startsWith('data:') ||
      lowercased.startsWith('vbscript:')) {
    return '#';
  }

  return escapeHtml(trimmed);
};

export const sanitizePhone = (phone: string): string =>
  phone.replace(/[^0-9+-]/g, '');
