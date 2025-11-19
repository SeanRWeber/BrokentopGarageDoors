/**
 * 404 handler - Single Responsibility: Not found handling
 * Pure function, user-friendly error page, correct status code
 */

import { Layout } from '../components/layout';
import { createNotFoundResponse } from '../utils/response';

export const handleNotFound = (): Response => {
  const content = `
<section class="error-page">
  <div class="container">
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist or has been moved.</p>
    <a href="/" class="btn btn-primary btn-large" style="margin:2rem 0;">Return Home</a>
    <h2 style="margin-top:3rem;">Popular Pages</h2>
    <div class="features-grid" style="margin-top:2rem;">
      <div class="feature-item"><h3><a href="/services" style="color:var(--color-gray-900);text-decoration:none;">Our Services</a></h3><p>View all garage door services</p></div>
      <div class="feature-item"><h3><a href="/quote" style="color:var(--color-gray-900);text-decoration:none;">Get Quote</a></h3><p>Request a free estimate</p></div>
      <div class="feature-item"><h3><a href="/emergency" style="color:var(--color-gray-900);text-decoration:none;">Emergency</a></h3><p>24/7 emergency service</p></div>
      <div class="feature-item"><h3><a href="/contact" style="color:var(--color-gray-900);text-decoration:none;">Contact Us</a></h3><p>Get in touch with our team</p></div>
    </div>
  </div>
</section>`;

  const html = Layout({
    title: '404 Not Found | Brokentop Garage Doors',
    description: 'Page not found. Return to our homepage or browse our garage door services.',
    content,
  });

  return createNotFoundResponse(html);
};
