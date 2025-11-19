/**
 * Service Areas - Single Responsibility: Coverage area display
 * Pure function, local SEO optimization
 */

import { SERVICE_AREAS } from '../constants/business';

export const ServiceAreas = (): string => {
  const areaItems = SERVICE_AREAS.map(area =>
    `<div class="area-item">${area}, OR</div>`
  ).join('');

  return `
<section id="areas">
  <div class="container">
    <div class="section-header">
      <span class="section-badge">Service Areas</span>
      <h2 class="section-title">Proudly Serving Central Oregon</h2>
      <p class="section-description">
        We provide professional garage door services throughout the Central Oregon region.
      </p>
    </div>
    <div class="areas-grid">
      ${areaItems}
    </div>
  </div>
</section>`;
};
