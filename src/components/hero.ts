/**
 * Hero component - Single Responsibility: Homepage hero section
 * Pure function, conversion optimized
 */

import { BUSINESS_INFO } from '../constants/business.ts';

export const Hero = (): string => `
<section class="hero">
  <div class="container">
    <div class="hero-content">
      <h1>Bend's Most Trusted Garage Door Experts</h1>
      <p class="hero-subtitle">
        Professional installation, repair & maintenance since ${BUSINESS_INFO.foundingYear}.
        Licensed, insured, and available 24/7 for emergencies.
      </p>
      <div class="hero-cta">
        <a href="tel:${BUSINESS_INFO.phone}" class="cta-button primary">
          Call ${BUSINESS_INFO.phone}
        </a>
        <a href="/quote" class="cta-button secondary">
          Free Quote
        </a>
      </div>
      <div class="hero-stats">
        <div class="stat">
          <strong>15+</strong>
          <span>Years Experience</span>
        </div>
        <div class="stat">
          <strong>5,000+</strong>
          <span>Happy Customers</span>
        </div>
        <div class="stat">
          <strong>4.9/5</strong>
          <span>${BUSINESS_INFO.reviewCount} Reviews</span>
        </div>
      </div>
    </div>
  </div>
</section>`;
