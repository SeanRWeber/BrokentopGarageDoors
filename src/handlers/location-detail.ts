/**
 * Location detail handler - Single Responsibility: Location page generator
 * Pure function factory, local SEO optimization
 */

import { Layout } from '../components/layout';
import type { LocationDetail } from '../types/location';
import { createHtmlResponse } from '../utils/response';
import { BUSINESS_INFO } from '../constants/business';

export const createLocationHandler = (location: LocationDetail) => (): Response => {
  const landmarks = location.landmarks.map(l => `<li>${l}</li>`).join('');
  const zips = location.zip.join(', ');

  const content = `
<section class="hero" style="min-height:50vh;">
  <div class="container">
    <div class="hero-content">
      <h1>Garage Door Repair in ${location.city}, Oregon</h1>
      <p class="hero-description">
        Professional garage door services serving ${location.city} and surrounding areas.
        Same-day service available. Licensed, insured, and locally owned.
      </p>
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
      <h2 class="section-title">Serving ${location.city}, OR</h2>
    </div>
    <div class="features-grid">
      <div class="feature-item"><h3>Fast Response</h3><p>Average drive time: ${location.driveTime}</p></div>
      <div class="feature-item"><h3>Local Service</h3><p>Serving ZIP codes: ${zips}</p></div>
      <div class="feature-item"><h3>All Services</h3><p>Repair, installation, maintenance, emergency</p></div>
    </div>
    <h3 style="text-align:center;margin:3rem 0 1rem;">Areas We Serve in ${location.city}</h3>
    <ul style="max-width:600px;margin:0 auto;line-height:2;column-count:2;">${landmarks}</ul>
  </div>
</section>`;

  return createHtmlResponse(Layout({
    title: `Garage Door Repair ${location.city}, OR | Brokentop Garage Doors`,
    description: `Professional garage door repair and installation in ${location.city}, Oregon. Same-day service, licensed & insured. Call ${BUSINESS_INFO.phone}.`,
    content,
    path: `/locations/${location.slug}`,
  }));
};
