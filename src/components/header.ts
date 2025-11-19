/**
 * Header component - Single Responsibility: Site header HTML
 * Pure function, accessible navigation
 */

import { BUSINESS_INFO } from '../constants/business.ts';
import { escapeHtml } from '../utils/sanitize.ts';

export const Header = (): string => `
<header>
  <div class="container">
    <div class="logo">
      <a href="/">${escapeHtml(BUSINESS_INFO.name)}</a>
    </div>
    <nav class="nav-links">
      <a href="/">Home</a>
      <a href="/services">Services</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="tel:${BUSINESS_INFO.phone}" class="cta-button">
        ${BUSINESS_INFO.phone}
      </a>
    </nav>
    <button class="mobile-menu-toggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="mobile-nav">
    <a href="/">Home</a>
    <a href="/services">Services</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
    <a href="tel:${BUSINESS_INFO.phone}" class="cta-button">Call Now</a>
  </div>
</header>`;
