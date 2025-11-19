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
        <p>The page you're looking for doesn't exist.</p>
        <a href="/" class="cta-button">Return Home</a>
      </div>
    </section>
  `;

  const html = Layout({
    title: '404 Not Found',
    description: 'Page not found',
    content,
  });

  return createNotFoundResponse(html);
};
