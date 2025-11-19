/**
 * Brand Partners - Single Responsibility: Partner logos display
 * Pure function, credibility through partnerships
 */

const BRANDS: readonly string[] = Object.freeze([
  'LiftMaster',
  'Chamberlain',
  'Genie',
  'Clopay',
  'Amarr',
  'Wayne Dalton',
]);

export const BrandPartners = (): string => {
  const brandItems = BRANDS.map(brand =>
    `<div class="brand-item">${brand}</div>`
  ).join('');

  return `
<section class="brand-partners">
  <div class="container">
    <div class="section-header">
      <span class="section-badge">Brand Partners</span>
      <h2 class="section-title">We Work With The Best</h2>
      <p class="section-description">
        Authorized dealer and service provider for leading garage door brands.
      </p>
    </div>
    <div class="brands-grid">
      ${brandItems}
    </div>
  </div>
</section>`;
};
