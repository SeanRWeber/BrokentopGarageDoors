/**
 * Accessibility handler - Single Responsibility: Accessibility statement
 * Pure function, WCAG compliance
 */

import { Layout } from '../components/layout';
import { BUSINESS_INFO } from '../constants/business';
import { createHtmlResponse } from '../utils/response';

export const handleAccessibility = (): Response => {
  const content = `
<section>
  <div class="container" style="max-width:900px;">
    <h1>Accessibility Statement</h1>
    <p style="color:var(--color-gray-600);margin-bottom:2rem;">Last Updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

    <h2>Our Commitment</h2>
    <p>Brokentop Garage Doors is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience and apply relevant accessibility standards.</p>

    <h2>Conformance Status</h2>
    <p>We aim to conform to WCAG 2.1 Level AA standards. This website has been designed with accessibility in mind, including:</p>
    <ul style="line-height:2;margin:1rem 0 2rem;">
      <li>Semantic HTML structure</li>
      <li>Keyboard navigation support</li>
      <li>Descriptive link text</li>
      <li>Sufficient color contrast ratios</li>
      <li>Responsive design for various devices</li>
      <li>Clear form labels and instructions</li>
    </ul>

    <h2>Feedback</h2>
    <p>We welcome feedback on the accessibility of this website. If you encounter accessibility barriers, please contact us:</p>
    <ul style="line-height:2;margin:1rem 0 2rem;">
      <li><strong>Phone:</strong> <a href="tel:${BUSINESS_INFO.phone}">${BUSINESS_INFO.phone}</a></li>
      <li><strong>Email:</strong> <a href="mailto:${BUSINESS_INFO.email}">${BUSINESS_INFO.email}</a></li>
    </ul>

    <h2>Technical Specifications</h2>
    <p>This website relies on HTML, CSS, and JavaScript. It is designed to work with current web browsers and assistive technologies.</p>

    <h2>Limitations</h2>
    <p>Despite our efforts, some content may have accessibility issues. We are continuously working to improve accessibility across all pages.</p>
  </div>
</section>`;

  return createHtmlResponse(Layout({
    title: 'Accessibility Statement | Brokentop Garage Doors',
    description: 'Accessibility commitment and WCAG 2.1 conformance information for Brokentop Garage Doors website.',
    content,
    path: '/accessibility',
  }));
};
