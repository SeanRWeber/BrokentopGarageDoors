/**
 * CTA component - Single Responsibility: Call-to-action section
 * Pure function, conversion optimized
 */

import { BUSINESS_INFO } from '../constants/business';

export const CTA = (): string => `
<section class="cta-section">
  <div class="cta-content">
    <h2>Ready to Fix Your Garage Door?</h2>
    <p>Get a free estimate today. Same-day service available for emergency repairs.</p>
    <div class="hero-buttons">
      <a href="tel:${BUSINESS_INFO.phone}" class="btn btn-primary btn-large">
        Call ${BUSINESS_INFO.phone}
      </a>
      <a href="#schedule" class="btn btn-secondary btn-large">
        Schedule Online
      </a>
    </div>
  </div>
</section>`;
