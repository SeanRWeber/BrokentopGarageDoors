/**
 * Emergency handler - Single Responsibility: Emergency service page
 * Pure function, urgent service conversion focus
 */

import { Layout } from '../components/layout';
import { BUSINESS_INFO } from '../constants/business';
import { createHtmlResponse } from '../utils/response';

const PHONE_SVG = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>';

export const handleEmergency = (): Response => {
  const content = `
<section class="hero" style="min-height:60vh;">
  <div class="container">
    <div class="hero-content" style="text-align:center;max-width:100%;">
      <h1>24/7 Emergency Garage Door Service</h1>
      <p class="hero-description" style="max-width:100%;">
        Garage door stuck? Spring broke? Can't close your door? We're here to help—day or night.
      </p>
      <div class="hero-buttons" style="justify-content:center;">
        <a href="tel:${BUSINESS_INFO.phone}" class="btn btn-primary btn-large" style="font-size:1.5rem;padding:1.5rem 3rem;">
          ${PHONE_SVG} ${BUSINESS_INFO.phone}
        </a>
      </div>
      <p style="margin-top:2rem;font-size:1.125rem;opacity:0.9;">Average response time: 45 minutes</p>
    </div>
  </div>
</section>
<section>
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Common Emergency Situations</h2>
    </div>
    <div class="features-grid">
      <div class="feature-item"><h3>Broken Springs</h3><p>Door won't open or fell suddenly</p></div>
      <div class="feature-item"><h3>Off-Track Door</h3><p>Door is crooked or stuck</p></div>
      <div class="feature-item"><h3>Cable Snapped</h3><p>Door is uneven or won't close</p></div>
      <div class="feature-item"><h3>Opener Failure</h3><p>Remote/wall button not working</p></div>
    </div>
  </div>
</section>`;

  return createHtmlResponse(Layout({
    title: '24/7 Emergency Garage Door Repair | Bend, OR',
    description: 'Emergency garage door repair available 24/7 in Central Oregon. Broken springs, off-track doors, cable repairs. Call 541-203-7676 now.',
    content,
    path: '/emergency',
  }));
};
