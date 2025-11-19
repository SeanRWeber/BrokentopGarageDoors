/**
 * Warranties handler - Single Responsibility: Warranty information page
 * Pure function, trust building
 */

import { Layout } from '../components/layout';
import { createHtmlResponse } from '../utils/response';

export const handleWarranties = (): Response => {
  const content = `
<section>
  <div class="container" style="max-width:900px;">
    <div class="section-header">
      <span class="section-badge">Warranties</span>
      <h1 class="section-title">Our Warranty Coverage</h1>
      <p class="section-description">
        We stand behind our work with comprehensive warranties on labor and parts.
      </p>
    </div>
    <div class="business-info-grid">
      <div class="info-card">
        <h3>Labor Warranty</h3>
        <p style="font-size:2rem;color:var(--color-accent);font-weight:700;margin:1rem 0;">90 Days</p>
        <p>All repairs and installations include a 90-day warranty on workmanship. If something goes wrong with our work, we'll fix it free.</p>
      </div>
      <div class="info-card">
        <h3>Parts Warranty</h3>
        <p style="font-size:2rem;color:var(--color-accent);font-weight:700;margin:1rem 0;">1-5 Years</p>
        <p>Parts warranties vary by manufacturer. Openers typically 1-5 years, springs available with lifetime warranty upgrade.</p>
      </div>
      <div class="info-card">
        <h3>Satisfaction Guarantee</h3>
        <p style="font-size:2rem;color:var(--color-accent);font-weight:700;margin:1rem 0;">100%</p>
        <p>Not satisfied? We'll make it right or refund your money. Your satisfaction is our top priority.</p>
      </div>
    </div>
    <h2 style="margin-top:3rem;">What's Covered</h2>
    <ul style="line-height:2;margin:1rem 0 2rem;">
      <li>All installation labor for 90 days</li>
      <li>All repair labor for 90 days</li>
      <li>Parts per manufacturer warranty terms</li>
      <li>Safety feature adjustments</li>
      <li>Return visits for warranty issues at no charge</li>
    </ul>
    <h2>What's Not Covered</h2>
    <ul style="line-height:2;">
      <li>Damage from misuse or accidents</li>
      <li>Normal wear and tear after warranty period</li>
      <li>Modifications by non-authorized technicians</li>
      <li>Acts of nature (storms, flooding, etc.)</li>
    </ul>
  </div>
</section>`;

  return createHtmlResponse(Layout({
    title: 'Warranties & Guarantees | Brokentop Garage Doors',
    description: '90-day labor warranty, manufacturer parts warranties, 100% satisfaction guarantee. Licensed and insured garage door services in Central Oregon.',
    content,
    path: '/warranties',
  }));
};
