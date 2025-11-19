/**
 * Home handler - Single Responsibility: Homepage request handling
 * Pure function, stateless, idempotent, complete sections
 */

import { Layout } from '../components/layout';
import { Hero } from '../components/hero';
import { Services } from '../components/services';
import { Testimonials } from '../components/testimonials';
import { TrustBadges } from '../components/trustbadges';
import { CTA } from '../components/cta';
import { createHtmlResponse } from '../utils/response';

export const handleHome = (): Response => {
  const content = `
    ${Hero()}
    ${Services()}
    ${Testimonials()}
    ${TrustBadges()}
    ${CTA()}
  `;

  const html = Layout({
    title: 'Expert Garage Door Services in Bend, Oregon',
    description: 'Professional garage door installation, repair & maintenance in Bend, OR. Licensed, insured, 24/7 emergency service. Call 541-203-7676 for a free quote.',
    content,
    path: '/',
  });

  return createHtmlResponse(html);
};
