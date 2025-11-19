/**
 * Services component - Single Responsibility: Services grid
 * Pure function, data-driven rendering
 */

import { SERVICES } from '../constants/services.ts';
import { escapeHtml } from '../utils/sanitize.ts';

export const Services = (): string => {
  const cards = SERVICES.map((service) => `
    <div class="service-card">
      <div class="service-icon">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="${service.icon}"/>
        </svg>
      </div>
      <h3>${escapeHtml(service.title)}</h3>
      <p>${escapeHtml(service.description)}</p>
    </div>
  `).join('');

  return `
<section id="services">
  <div class="container">
    <div class="section-header">
      <span class="section-badge">Our Services</span>
      <h2 class="section-title">Complete Garage Door Solutions</h2>
      <p class="section-description">
        From emergency repairs to custom installations, we provide comprehensive garage door services for residential and commercial properties.
      </p>
    </div>
    <div class="services-grid">${cards}</div>
  </div>
</section>`;
};
