/**
 * Terms handler - Single Responsibility: Terms of service page
 * Pure function, legal compliance
 */

import { Layout } from '../components/layout';
import { createHtmlResponse } from '../utils/response';

export const handleTerms = (): Response => {
  const content = `
<section>
  <div class="container" style="max-width:900px;">
    <h1>Terms of Service</h1>
    <p style="color:var(--color-gray-600);margin-bottom:2rem;">Last Updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

    <h2>Service Terms</h2>
    <p>By using our services, you agree to these terms. Services are provided as described in written estimates. Changes require written approval.</p>

    <h2>Payment Terms</h2>
    <p>Payment is due upon completion unless financing is arranged. We accept cash, check, and major credit cards. A service call fee may apply for diagnostics.</p>

    <h2>Warranties</h2>
    <p>We provide a 90-day warranty on labor. Parts warranties vary by manufacturer. Warranties are void if doors are modified or damaged after service.</p>

    <h2>Liability</h2>
    <p>We maintain full licensing and insurance. Our liability is limited to the cost of services provided. We are not liable for pre-existing conditions.</p>

    <h2>Scheduling & Cancellation</h2>
    <p>Appointments must be cancelled 24 hours in advance. Late cancellations may incur a fee. Emergency services are subject to availability.</p>

    <h2>Governing Law</h2>
    <p>These terms are governed by the laws of the State of Oregon. Disputes will be resolved in Deschutes County, Oregon.</p>
  </div>
</section>`;

  return createHtmlResponse(Layout({
    title: 'Terms of Service | Brokentop Garage Doors',
    description: 'Terms of service for Brokentop Garage Doors. Read our service terms, payment terms, warranties, and policies.',
    content,
    path: '/terms-of-service',
  }));
};
