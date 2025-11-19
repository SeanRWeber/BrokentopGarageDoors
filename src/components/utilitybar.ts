/**
 * Utility Bar - Single Responsibility: Top contact bar
 * Pure function, click-to-call + license badge
 */

import { BUSINESS_INFO } from '../constants/business';

export const UtilityBar = (): string => `
<div class="utility-bar">
  <div class="container">
    <a href="tel:${BUSINESS_INFO.phone}" class="utility-contact">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
      </svg>
      ${BUSINESS_INFO.phone}
    </a>
    <div class="utility-badge">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
      </svg>
      CCB #209697
    </div>
  </div>
</div>`;
