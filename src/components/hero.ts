/**
 * Hero component - Single Responsibility: Homepage hero section
 * Pure function, conversion optimized
 */

import { BUSINESS_INFO } from '../constants/business.ts';

export const Hero = (): string => `
<section class="hero">
  <div class="container">
    <div class="hero-content">
      <div class="hero-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
        </svg>
        Licensed CCB #209697
      </div>
      <h1>Bend's Most Trusted Garage Door Experts</h1>
      <p class="hero-description">
        Professional installation, repair & maintenance since ${BUSINESS_INFO.foundingYear}.
        Licensed, insured, and available 24/7 for emergencies.
      </p>
      <div class="hero-buttons">
        <a href="tel:${BUSINESS_INFO.phone}" class="btn btn-primary btn-large">
          Call ${BUSINESS_INFO.phone}
        </a>
        <a href="#schedule" class="btn btn-secondary btn-large">
          Free Estimate
        </a>
      </div>
    </div>
  </div>
</section>
<section class="stats-bar">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item">
        <h3>15+</h3>
        <p>Years Experience</p>
      </div>
      <div class="stat-item">
        <h3>5,000+</h3>
        <p>Happy Customers</p>
      </div>
      <div class="stat-item">
        <h3>4.9/5</h3>
        <p>${BUSINESS_INFO.reviewCount} Reviews</p>
      </div>
      <div class="stat-item">
        <h3>98%</h3>
        <p>Satisfaction Rate</p>
      </div>
    </div>
  </div>
</section>`;
