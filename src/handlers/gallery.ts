/**
 * Gallery handler - Single Responsibility: Project gallery page
 * Pure function, visual proof display
 */

import { Layout } from '../components/layout';
import { createHtmlResponse } from '../utils/response';

export const handleGallery = (): Response => {
  const content = `
<section>
  <div class="container">
    <div class="section-header">
      <span class="section-badge">Our Work</span>
      <h1 class="section-title">Project Gallery</h1>
      <p class="section-description">
        See examples of our garage door installations, repairs, and transformations across Central Oregon.
      </p>
    </div>
    <div class="services-grid">
      <div class="service-card"><h3>Before & After</h3><p>Residential door replacement in Bend - transformed from dated to modern in one day.</p></div>
      <div class="service-card"><h3>Commercial Install</h3><p>5-bay commercial overhead door installation for local warehouse in Redmond.</p></div>
      <div class="service-card"><h3>Custom Wood Door</h3><p>Custom carriage-style door installation for historic home in Sisters.</p></div>
      <div class="service-card"><h3>Spring Replacement</h3><p>Emergency spring replacement and track alignment completed in 2 hours.</p></div>
      <div class="service-card"><h3>Smart Opener Upgrade</h3><p>LiftMaster MyQ smart opener installation with smartphone control.</p></div>
      <div class="service-card"><h3>Panel Repair</h3><p>Accident damage repair - replaced single panel instead of full door.</p></div>
    </div>
  </div>
</section>`;

  return createHtmlResponse(Layout({
    title: 'Project Gallery - Garage Door Installations & Repairs',
    description: 'View before and after photos of garage door installations, repairs, and upgrades in Central Oregon by Brokentop Garage Doors.',
    content,
    path: '/gallery',
  }));
};
