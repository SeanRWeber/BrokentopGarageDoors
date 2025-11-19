/**
 * CSS generation utilities - Single Responsibility: Type-safe CSS
 * Pure functions, compile-time type safety
 */

import { COLORS } from '../constants/colors.ts';

export const generateCssVariables = (): string => {
  const vars = Object.entries(COLORS)
    .map(([key, value]) => {
      const kebabKey = key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
      return `  --color-${kebabKey}: ${value};`;
    })
    .join('\n');

  return `:root {\n${vars}\n}`;
};

export const minifyCss = (css: string): string =>
  css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,])\s*/g, '$1')
    .trim();
