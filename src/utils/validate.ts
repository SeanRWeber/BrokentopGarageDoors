/**
 * Validation utilities - Single Responsibility: Input validation
 * Pure predicates, zero side effects, fail-fast principle
 */

export const isNonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.trim().length > 0;

export const isValidEmail = (email: string): boolean => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  const digitsOnly = phone.replace(/\D/g, '');
  return digitsOnly.length >= 10 && digitsOnly.length <= 15;
};

export const isValidUrl = (url: string): boolean => {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
};

export const isWithinLength = (str: string, max: number): boolean =>
  str.length > 0 && str.length <= max;
