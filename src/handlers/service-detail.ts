/**
 * Service detail handler - Single Responsibility: Service page generator
 * Pure function factory, DRY compliance
 */

import { Layout } from '../components/layout';
import type { ServiceDetail } from '../types/service';
import { createHtmlResponse } from '../utils/response';
import { BUSINESS_INFO } from '../constants/business';

export const createServiceHandler = (service: ServiceDetail) => (): Response => {
  const benefits = service.benefits.map(b => `<li>${b}</li>`).join('');
  const steps = service.process.map((s, i) => `<div class="feature-item"><h3>Step ${i + 1}</h3><p>${s}</p></div>`).join('');

  const content = `
<section class="hero" style="min-height:50vh;">
  <div class="container">
    <div class="hero-content">
      <h1>${service.title}</h1>
      <p class="hero-description">${service.description}</p>
      <div class="hero-buttons">
        <a href="tel:${BUSINESS_INFO.phone}" class="btn btn-primary btn-large">Call Now</a>
        <a href="/quote" class="btn btn-secondary btn-large">Get Free Quote</a>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">About This Service</h2>
    </div>
    <p style="font-size:1.125rem;line-height:1.8;max-width:800px;margin:0 auto 3rem;text-align:center;">${service.longDescription}</p>
    <h3 style="text-align:center;margin-bottom:2rem;">Why Choose Us</h3>
    <ul style="max-width:600px;margin:0 auto;line-height:2;">${benefits}</ul>
    <div style="text-align:center;margin-top:2rem;padding:2rem;background:var(--color-gray-50);border-radius:var(--radius-lg);">
      <h3>Pricing</h3>
      <p style="font-size:1.25rem;color:var(--color-accent);font-weight:700;">${service.pricing}</p>
    </div>
  </div>
</section>
<section class="why-choose-us">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Our Process</h2>
    </div>
    <div class="features-grid">${steps}</div>
  </div>
</section>`;

  return createHtmlResponse(Layout({
    title: `${service.title} | Brokentop Garage Doors`,
    description: `${service.description}. ${service.pricing}. Call 541-203-7676 for service in Central Oregon.`,
    content,
    path: `/services/${service.slug}`,
  }));
};
