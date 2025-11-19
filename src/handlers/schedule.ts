/**
 * Schedule handler - Single Responsibility: Appointment scheduling page
 * Pure function, conversion-focused
 */

import { Layout } from '../components/layout';
import { BUSINESS_INFO } from '../constants/business';
import { createHtmlResponse } from '../utils/response';

export const handleSchedule = (): Response => {
  const content = `
<section>
  <div class="container">
    <div class="section-header">
      <span class="section-badge">Schedule Service</span>
      <h1 class="section-title">Book Your Appointment</h1>
      <p class="section-description">
        Choose a convenient time for your garage door service. Most appointments available within 24-48 hours.
        For emergencies, call <a href="tel:${BUSINESS_INFO.phone}">${BUSINESS_INFO.phone}</a> now.
      </p>
    </div>
    <div class="business-info-grid">
      <div class="info-card">
        <h3>Schedule Your Service</h3>
        <form method="POST" action="/api/schedule" class="quote-form">
          <input type="text" name="name" placeholder="Full Name" required>
          <input type="email" name="email" placeholder="Email Address" required>
          <input type="tel" name="phone" placeholder="Phone Number" required>
          <input type="text" name="address" placeholder="Service Address" required>
          <select name="service" required>
            <option value="">Select Service Type</option>
            <option value="repair">Repair</option>
            <option value="installation">New Installation</option>
            <option value="maintenance">Maintenance</option>
            <option value="inspection">Free Inspection</option>
          </select>
          <input type="date" name="preferred_date" placeholder="Preferred Date" required>
          <select name="preferred_time" required>
            <option value="">Preferred Time</option>
            <option value="morning">Morning (8am-12pm)</option>
            <option value="afternoon">Afternoon (12pm-4pm)</option>
            <option value="evening">Evening (4pm-6pm)</option>
          </select>
          <textarea name="notes" placeholder="Additional notes or requests" rows="3"></textarea>
          <button type="submit" class="btn btn-primary btn-large">Request Appointment</button>
        </form>
      </div>
    </div>
  </div>
</section>`;

  return createHtmlResponse(Layout({
    title: 'Schedule Service Appointment | Brokentop Garage Doors',
    description: 'Book your garage door service appointment online. Same-day and next-day appointments available in Central Oregon. Call 541-203-7676.',
    content,
    path: '/schedule',
  }));
};
