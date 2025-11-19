/**
 * Base styles - Single Responsibility: Foundation CSS
 * Zero runtime, compile-time string generation
 */

import { generateCssVariables } from '../utils/css.ts';

export const BASE_STYLES = `
${generateCssVariables()}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  line-height: 1.6;
  color: var(--color-gray-900);
  background: var(--color-white);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

a {
  color: var(--color-primary);
  text-decoration: none;
}
`.trim();
