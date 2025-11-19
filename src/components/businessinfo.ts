/**
 * Business Info - Single Responsibility: Contact information cards
 * Pure function, displays hours/contact/service areas
 */

import { BUSINESS_INFO, BUSINESS_HOURS, SERVICE_AREAS } from '../constants/business';

const PHONE_ICON = 'M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z';
const CLOCK_ICON = 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z';
const MAP_ICON = 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z';

export const BusinessInfo = (): string => {
  const areas = SERVICE_AREAS.join(', ');

  return `
<section id="contact">
  <div class="container">
    <div class="section-header">
      <span class="section-badge">Get In Touch</span>
      <h2 class="section-title">Contact Information</h2>
      <p class="section-description">Ready to get started? Reach out today for a free estimate.</p>
    </div>
    <div class="business-info-grid">
      <div class="info-card">
        <h3><svg class="info-card-icon" viewBox="0 0 24 24" fill="currentColor"><path d="${PHONE_ICON}"/></svg>Contact</h3>
        <ul class="info-list">
          <li><strong>Phone:</strong> <a href="tel:${BUSINESS_INFO.phone}">${BUSINESS_INFO.phone}</a></li>
          <li><strong>Email:</strong> <a href="mailto:${BUSINESS_INFO.email}">${BUSINESS_INFO.email}</a></li>
        </ul>
      </div>
      <div class="info-card">
        <h3><svg class="info-card-icon" viewBox="0 0 24 24" fill="currentColor"><path d="${CLOCK_ICON}"/></svg>Hours</h3>
        <ul class="info-list">
          <li><strong>Mon-Fri:</strong> ${BUSINESS_HOURS.weekdays}</li>
          <li><strong>Saturday:</strong> ${BUSINESS_HOURS.saturday}</li>
          <li><strong>Sunday:</strong> ${BUSINESS_HOURS.sunday}</li>
        </ul>
      </div>
      <div class="info-card">
        <h3><svg class="info-card-icon" viewBox="0 0 24 24" fill="currentColor"><path d="${MAP_ICON}"/></svg>Service Areas</h3>
        <p>${areas}</p>
      </div>
    </div>
  </div>
</section>`;
};
