/**
 * Testimonials component - Single Responsibility: Customer reviews
 * Pure function, E-E-A-T trust signals
 */

import { TESTIMONIALS } from '../constants/testimonials.ts';
import { escapeHtml } from '../utils/sanitize.ts';

export const Testimonials = (): string => {
  const cards = TESTIMONIALS.map((testimonial) => {
    const stars = '★'.repeat(testimonial.rating);
    return `
    <div class="testimonial-card">
      <div class="testimonial-rating">
        ${stars.split('').map(() => '<span class="star">★</span>').join('')}
      </div>
      <p class="testimonial-quote">"${escapeHtml(testimonial.text)}"</p>
      <div class="testimonial-author">
        <div class="author-info">
          <h4>${escapeHtml(testimonial.name)}</h4>
          <p>${escapeHtml(testimonial.location)}</p>
        </div>
      </div>
    </div>
  `;
  }).join('');

  return `
<section>
  <div class="container">
    <div class="section-header">
      <span class="section-badge">Testimonials</span>
      <h2 class="section-title">What Our Customers Say</h2>
      <p class="section-description">
        Real reviews from real customers in Central Oregon. Your satisfaction is our top priority.
      </p>
    </div>
    <div class="testimonials-grid">${cards}</div>
  </div>
</section>`;
};
