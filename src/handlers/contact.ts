/**
 * Contact handler - Single Responsibility: Contact page
 * Pure function, contact information display
 */

import { Layout } from '../components/layout';
import { BUSINESS_INFO, BUSINESS_HOURS, SERVICE_AREAS } from '../constants/business';
import { createHtmlResponse } from '../utils/response';

export const handleContact = (): Response => {
  const areas = SERVICE_AREAS.join(', ');

  const content = `
<section>
  <div class="container">
    <div class="section-header">
      <span class="section-badge">Contact Us</span>
      <h1 class="section-title">Get In Touch</h1>
      <p class="section-description">
        Ready to fix or upgrade your garage door? Contact us today for a free estimate.
      </p>
    </div>
    <div class="business-info-grid">
      <div class="info-card">
        <h3>Contact Information</h3>
        <ul class="info-list">
          <li><strong>Phone:</strong> <a href="tel:${BUSINESS_INFO.phone}">${BUSINESS_INFO.phone}</a></li>
          <li><strong>Email:</strong> <a href="mailto:${BUSINESS_INFO.email}">${BUSINESS_INFO.email}</a></li>
          <li><strong>Address:</strong> ${BUSINESS_INFO.address}</li>
        </ul>
      </div>
      <div class="info-card">
        <h3>Business Hours</h3>
        <ul class="info-list">
          <li><strong>Mon-Fri:</strong> ${BUSINESS_HOURS.weekdays}</li>
          <li><strong>Saturday:</strong> ${BUSINESS_HOURS.saturday}</li>
          <li><strong>Sunday:</strong> ${BUSINESS_HOURS.sunday}</li>
        </ul>
      </div>
      <div class="info-card">
        <h3>Service Areas</h3>
        <p>${areas}</p>
      </div>
    </div>
  </div>
</section>`;

  const html = Layout({
    title: 'Contact Us - Brokentop Garage Doors',
    description: 'Contact Brokentop Garage Doors for garage door repair and installation in Central Oregon. Call 541-203-7676 or visit us in Bend, OR.',
    content,
    path: '/contact',
  });

  return createHtmlResponse(html);
};
