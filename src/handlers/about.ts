/**
 * About handler - Single Responsibility: About page
 * Pure function, company information display
 */

import { Layout } from '../components/layout';
import { BUSINESS_INFO } from '../constants/business';
import { TrustBadges } from '../components/trustbadges';
import { CTA } from '../components/cta';
import { createHtmlResponse } from '../utils/response';

export const handleAbout = (): Response => {
  const content = `
<section id="about">
  <div class="container">
    <div class="section-header">
      <span class="section-badge">About Us</span>
      <h1 class="section-title">Experience You Can Trust</h1>
    </div>
    <div class="about-content">
      <div class="about-text">
        <h3>Serving Central Oregon Since ${BUSINESS_INFO.foundingYear}</h3>
        <p>Brokentop Garage Doors is a family-owned and operated business proudly serving Central Oregon for over 15 years. What started as a one-person operation has grown into a trusted team of certified technicians, all committed to providing exceptional garage door services to our community.</p>
        <p>We specialize in residential and commercial garage door repair, installation, and maintenance. Our technicians undergo continuous training to stay current with the latest industry standards and technologies, ensuring you receive the highest quality service every time.</p>
      </div>
    </div>
  </div>
</section>
${TrustBadges()}
${CTA()}`;

  const html = Layout({
    title: 'About Us - Licensed Garage Door Experts Since 2010',
    description: 'Family-owned garage door company serving Central Oregon since 2010. Licensed (CCB #209697), insured, and committed to quality service.',
    content,
    path: '/about',
  });

  return createHtmlResponse(html);
};
