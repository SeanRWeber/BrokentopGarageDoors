/**
 * About Inline - Single Responsibility: Homepage about section
 * Pure function, E-E-A-T compliance with company history
 */

import { BUSINESS_INFO } from '../constants/business';

export const AboutInline = (): string => `
<section id="about">
  <div class="container">
    <div class="section-header">
      <span class="section-badge">About Us</span>
      <h2 class="section-title">Experience You Can Trust</h2>
    </div>
    <div class="about-content">
      <div class="about-text">
        <h3>Serving Central Oregon Since ${BUSINESS_INFO.foundingYear}</h3>
        <p>Brokentop Garage Doors is a family-owned and operated business proudly serving Central Oregon for over 15 years. What started as a one-person operation has grown into a trusted team of certified technicians, all committed to providing exceptional garage door services to our community.</p>
        <p>We specialize in residential and commercial garage door repair, installation, and maintenance. Our technicians undergo continuous training to stay current with the latest industry standards and technologies, ensuring you receive the highest quality service every time.</p>
      </div>
    </div>
  </div>
</section>`;
