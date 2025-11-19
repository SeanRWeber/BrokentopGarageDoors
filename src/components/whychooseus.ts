/**
 * Why Choose Us - Single Responsibility: Feature highlights
 * Pure function, conversion optimization with 4 key benefits
 */

const FEATURES = [
  {icon: 'M7 2v11h3v9l7-12h-4l4-8z', title: 'Same-Day Service', desc: 'Fast response times for emergency repairs. We understand that garage door problems can\'t wait.'},
  {icon: 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z', title: 'FREE Estimates', desc: 'No-obligation quotes on all services. Transparent pricing with no hidden fees.'},
  {icon: 'M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z', title: 'Local & Family Owned', desc: 'We\'re your neighbors, treating your home with the same care we treat our own.'},
  {icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z', title: 'Licensed & Insured', desc: 'Fully licensed (CCB #209697) and insured for your peace of mind.'},
];

export const WhyChooseUs = (): string => {
  const items = FEATURES.map(f =>
    `<div class="feature-item"><div class="feature-icon"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="${f.icon}"/></svg></div><h3>${f.title}</h3><p>${f.desc}</p></div>`
  ).join('');

  return `
<section class="why-choose-us">
  <div class="container">
    <div class="section-header">
      <span class="section-badge">Why Choose Us</span>
      <h2 class="section-title">Excellence in Every Detail</h2>
      <p class="section-description">We're more than just a service provider—we're your neighbors, committed to delivering exceptional results with integrity and care.</p>
    </div>
    <div class="features-grid">${items}</div>
  </div>
</section>`;
};
