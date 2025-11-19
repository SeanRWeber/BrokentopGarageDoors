/**
 * Navigation JavaScript - Single Responsibility: Client-side nav logic
 * Human Made-level interaction, extracted from homepage.html
 */

export const NAVIGATION_SCRIPT = `
(function() {
  'use strict';

  const header = document.querySelector('header');
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav a');

  // Scroll effect for header
  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }, { passive: true });

  // Mobile menu toggle
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', function(e) {
      e.preventDefault();
      this.classList.toggle('active');
      mobileNav.classList.toggle('active');
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking a link
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
        mobileToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
})();
`.trim();
