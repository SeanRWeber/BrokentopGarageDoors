/**
 * Header component - Single Responsibility: Site header HTML
 * Pure function, accessible navigation, matches homepage.html structure
 */

export const Header = (): string => `
<header>
  <nav>
    <a href="/" class="logo">Brokentop</a>
    <ul class="nav-links">
      <li><a href="#services">Services</a></li>
      <li><a href="#areas">Service Areas</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <a href="#schedule" class="btn btn-primary">Schedule Service</a>
    <button class="mobile-menu-toggle" aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
</header>
<div class="mobile-nav">
  <ul class="mobile-nav-links">
    <li><a href="#services">Services</a></li>
    <li><a href="#areas">Service Areas</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <a href="#schedule" class="btn btn-primary btn-large">Schedule Service</a>
</div>`;

