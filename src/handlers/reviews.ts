/**
 * Reviews handler - Single Responsibility: Customer testimonials page
 * Pure function, social proof display
 */

import { Layout } from '../components/layout';
import { Testimonials } from '../components/testimonials';
import { TrustBadges } from '../components/trustbadges';
import { createHtmlResponse } from '../utils/response';

export const handleReviews = (): Response => {
  const content = `
<section>
  <div class="container">
    <div class="section-header">
      <span class="section-badge">Customer Reviews</span>
      <h1 class="section-title">What Our Customers Say</h1>
      <p class="section-description">
        Read honest reviews from Central Oregon homeowners and businesses who trust us with their garage door needs.
      </p>
      <div style="text-align:center;margin:2rem 0;">
        <div style="font-size:3rem;color:var(--color-accent);font-weight:800;">4.9/5</div>
        <p style="font-size:1.125rem;color:var(--color-gray-600);">Based on 287 Google Reviews</p>
      </div>
    </div>
  </div>
</section>
${Testimonials()}
${TrustBadges()}`;

  return createHtmlResponse(Layout({
    title: 'Customer Reviews & Testimonials | Brokentop Garage Doors',
    description: '4.9/5 stars - Read 287+ customer reviews of our garage door services in Central Oregon. Licensed, insured, and locally trusted since 2010.',
    content,
    path: '/reviews',
  }));
};
