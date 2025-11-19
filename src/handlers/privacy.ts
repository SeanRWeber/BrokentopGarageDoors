/**
 * Privacy handler - Single Responsibility: Privacy policy page
 * Pure function, GDPR/CCPA compliance
 */

import { Layout } from '../components/layout';
import { BUSINESS_INFO } from '../constants/business';
import { createHtmlResponse } from '../utils/response';

export const handlePrivacy = (): Response => {
  const content = `
<section>
  <div class="container" style="max-width:900px;">
    <h1>Privacy Policy</h1>
    <p style="color:var(--color-gray-600);margin-bottom:2rem;">Last Updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

    <h2>Information We Collect</h2>
    <p>We collect information you provide directly: name, email, phone, address when requesting quotes or scheduling service.</p>

    <h2>How We Use Your Information</h2>
    <p>We use your information to: provide services, respond to inquiries, send appointment reminders, and improve our services.</p>

    <h2>Information Sharing</h2>
    <p>We do not sell your personal information. We may share information with service providers who assist our operations.</p>

    <h2>Data Security</h2>
    <p>We implement reasonable security measures to protect your information from unauthorized access, alteration, or destruction.</p>

    <h2>Your Rights</h2>
    <p>You have the right to access, correct, or delete your personal information. Contact us at <a href="mailto:${BUSINESS_INFO.email}">${BUSINESS_INFO.email}</a>.</p>

    <h2>Cookies</h2>
    <p>We use essential cookies for site functionality. We do not use tracking cookies or third-party analytics.</p>

    <h2>Contact Us</h2>
    <p>Questions about this policy? Contact: ${BUSINESS_INFO.email} or ${BUSINESS_INFO.phone}</p>
  </div>
</section>`;

  return createHtmlResponse(Layout({
    title: 'Privacy Policy | Brokentop Garage Doors',
    description: 'Privacy policy for Brokentop Garage Doors. Learn how we collect, use, and protect your personal information.',
    content,
    path: '/privacy-policy',
  }));
};
