/**
 * FAQ handler - Single Responsibility: Frequently asked questions page
 * Pure function, structured data for SEO
 */

import { Layout } from '../components/layout';
import { BUSINESS_INFO } from '../constants/business';
import { createHtmlResponse } from '../utils/response';

const FAQS = [
  { q: 'How much does garage door repair cost?', a: 'Most repairs range from $125-$400 depending on the issue. Spring replacement starts at $195, opener repair from $125. We provide upfront pricing before starting work.' },
  { q: 'Do you offer same-day service?', a: 'Yes! We offer same-day service for most repairs in the Bend area, subject to availability. Emergency service is available 24/7.' },
  { q: 'What brands do you service?', a: 'We service all major brands including LiftMaster, Chamberlain, Genie, Clopay, Amarr, and Wayne Dalton. We\'re authorized dealers for most brands.' },
  { q: 'How long does installation take?', a: 'Most single-door installations take 4-6 hours. Multi-door or custom installations may take 1-2 days. We\'ll provide a timeline during consultation.' },
  { q: 'Do you offer warranties?', a: 'Yes! 90-day warranty on all labor. Parts warranties vary by manufacturer (typically 1-5 years). Lifetime spring warranties available.' },
  { q: 'Can you match my existing door?', a: 'In most cases, yes. We can match colors, styles, and panel designs. If discontinued, we\'ll find the closest match or recommend complementary upgrades.' },
  { q: 'Is it safe to repair my garage door myself?', a: 'Springs and cables are under extreme tension and can cause serious injury. We strongly recommend professional service for safety. Simple tasks like lubrication are safe DIY.' },
  { q: 'How often should I service my garage door?', a: 'Annual maintenance is recommended. We inspect springs, cables, rollers, tracks, and safety features. Regular service extends door life and prevents breakdowns.' },
];

export const handleFaq = (): Response => {
  const items = FAQS.map(f => `<div style="margin-bottom:2rem;"><h3>${f.q}</h3><p style="color:var(--color-gray-600);line-height:1.8;">${f.a}</p></div>`).join('');

  const content = `
<section>
  <div class="container" style="max-width:900px;">
    <div class="section-header">
      <span class="section-badge">FAQ</span>
      <h1 class="section-title">Frequently Asked Questions</h1>
      <p class="section-description">
        Find answers to common questions about garage door repair, installation, and maintenance.
        Still have questions? Call <a href="tel:${BUSINESS_INFO.phone}">${BUSINESS_INFO.phone}</a>.
      </p>
    </div>
    ${items}
  </div>
</section>`;

  return createHtmlResponse(Layout({
    title: 'FAQ - Garage Door Questions Answered | Brokentop Garage Doors',
    description: 'Answers to common garage door questions: repair costs, installation time, warranties, brands, and maintenance. Call 541-203-7676 for more info.',
    content,
    path: '/faq',
  }));
};
