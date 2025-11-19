/**
 * Hero component - Single Responsibility: Homepage hero section
 * Pure function, conversion optimized, matches homepage.html exactly
 */

const PHONE_SVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>';
const STAR_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';

export const Hero = (): string => `
<section class="hero">
  <div class="container">
    <div class="hero-content">
      <div class="hero-badge">${STAR_SVG}Central Oregon's Trusted Garage Door Experts</div>
      <h1>Professional Garage Door Solutions for Your Home</h1>
      <p class="hero-description">Expert repair and installation services with same-day availability. Family-owned and operated, serving Central Oregon with pride since day one.</p>
      <div class="hero-buttons">
        <a href="tel:541-203-7676" class="btn btn-primary btn-large">${PHONE_SVG}Call Now</a>
        <a href="#estimate" class="btn btn-secondary btn-large">Get Free Estimate</a>
      </div>
    </div>
  </div>
</section>
<section class="stats-bar">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item"><h3>15+</h3><p>Years Experience</p></div>
      <div class="stat-item"><h3>5,000+</h3><p>Happy Customers</p></div>
      <div class="stat-item"><h3>4.9/5</h3><p>287 Reviews</p></div>
      <div class="stat-item"><h3>98%</h3><p>Satisfaction Rate</p></div>
    </div>
  </div>
</section>`;
