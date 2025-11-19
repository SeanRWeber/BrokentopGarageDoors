/**
 * Services handler - Single Responsibility: Services page
 * Pure function, service catalog display
 */

import { Layout } from '../components/layout';
import { Services } from '../components/services';
import { CTA } from '../components/cta';
import { createHtmlResponse } from '../utils/response';

export const handleServices = (): Response => {
  const content = `
    ${Services()}
    ${CTA()}
  `;

  const html = Layout({
    title: 'Our Services - Garage Door Repair & Installation',
    description: 'Complete garage door services in Central Oregon: repair, installation, spring replacement, opener service, and maintenance. Licensed and insured.',
    content,
    path: '/services',
  });

  return createHtmlResponse(html);
};
