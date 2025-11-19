/**
 * Quote handler - Single Responsibility: Quote request page
 * Pure function, lead capture form display
 */

import { Layout } from '../components/layout';
import { BUSINESS_INFO } from '../constants/business';
import { createHtmlResponse } from '../utils/response';

export const handleQuote = (): Response => {
  const content = `
<section>
  <div class="container">
    <div class="section-header">
      <span class="section-badge">Free Estimate</span>
      <h1 class="section-title">Get Your Free Quote</h1>
      <p class="section-description">
        Fill out the form below and we'll get back to you within 24 hours with a detailed estimate.
        For urgent repairs, call <a href="tel:${BUSINESS_INFO.phone}">${BUSINESS_INFO.phone}</a>.
      </p>
    </div>
    <div class="business-info-grid">
      <div class="info-card">
        <h3>Request Information</h3>
        <form method="POST" action="/api/quote" class="quote-form">
          <input type="text" name="name" placeholder="Full Name" required>
          <input type="email" name="email" placeholder="Email Address" required>
          <input type="tel" name="phone" placeholder="Phone Number" required>
          <input type="text" name="address" placeholder="Service Address" required>
          <select name="service" required>
            <option value="">Select Service Type</option>
            <option value="repair">Repair</option>
            <option value="installation">New Installation</option>
            <option value="spring">Spring Replacement</option>
            <option value="opener">Opener Repair/Install</option>
            <option value="maintenance">Maintenance</option>
            <option value="emergency">Emergency Service</option>
          </select>
          <textarea name="message" placeholder="Describe your needs" rows="4"></textarea>
          <button type="submit" class="btn btn-primary btn-large">Submit Request</button>
        </form>
      </div>
    </div>
  </div>
</section>`;

  return createHtmlResponse(Layout({
    title: 'Free Quote - Garage Door Services | Brokentop Garage Doors',
    description: 'Request a free, no-obligation quote for garage door repair or installation in Central Oregon. Fast response, transparent pricing.',
    content,
    path: '/quote',
  }));
};
