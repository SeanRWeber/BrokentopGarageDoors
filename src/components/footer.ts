/**
 * Footer component - Single Responsibility: Site footer HTML
 * Pure function, legal compliance, contact info
 */

import { BUSINESS_INFO, SERVICE_AREAS, BUSINESS_HOURS } from '../constants/business.ts';

export const Footer = (): string => {
  const currentYear = new Date().getFullYear();
  const areas = SERVICE_AREAS.join(', ');

  return `
<footer>
  <div class="container footer-grid">
    <div class="footer-section">
      <h3>Contact Us</h3>
      <p>Phone: <a href="tel:${BUSINESS_INFO.phone}">${BUSINESS_INFO.phone}</a></p>
      <p>Email: <a href="mailto:${BUSINESS_INFO.email}">${BUSINESS_INFO.email}</a></p>
      <p>${BUSINESS_INFO.address}</p>
    </div>
    <div class="footer-section">
      <h3>Service Areas</h3>
      <p>${areas}</p>
    </div>
    <div class="footer-section">
      <h3>Hours</h3>
      <p>Mon-Fri: ${BUSINESS_HOURS.weekdays}</p>
      <p>Sat: ${BUSINESS_HOURS.saturday}</p>
      <p>Sun: ${BUSINESS_HOURS.sunday}</p>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; ${currentYear} ${BUSINESS_INFO.name}. All rights reserved.</p>
    <p><a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a></p>
  </div>
</footer>`;
};
