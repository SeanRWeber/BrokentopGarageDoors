/**
 * Sitemap handler - Single Responsibility: HTML sitemap page
 * Pure function, SEO and navigation
 */

import { Layout } from '../components/layout';
import { ALL_SERVICES } from '../constants/service-data';
import { ALL_LOCATIONS } from '../constants/location-data';
import { ALL_POSTS } from '../constants/blog-posts';
import { createHtmlResponse } from '../utils/response';

export const handleSitemap = (): Response => {
  const services = ALL_SERVICES.map(s => `<li><a href="/services/${s.slug}">${s.title}</a></li>`).join('');
  const locations = ALL_LOCATIONS.map(l => `<li><a href="/locations/${l.slug}">Garage Door Repair in ${l.city}, OR</a></li>`).join('');
  const posts = ALL_POSTS.map(p => `<li><a href="/blog/${p.slug}">${p.title}</a></li>`).join('');

  const content = `
<section>
  <div class="container" style="max-width:1000px;">
    <h1>Sitemap</h1>
    <p style="color:var(--color-gray-600);margin-bottom:2rem;">Complete index of all pages on our website.</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;">
      <div>
        <h2>Main Pages</h2>
        <ul style="line-height:2;">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/quote">Free Quote</a></li>
          <li><a href="/emergency">Emergency Service</a></li>
          <li><a href="/schedule">Schedule Service</a></li>
        </ul>
      </div>
      <div>
        <h2>Trust & Info</h2>
        <ul style="line-height:2;">
          <li><a href="/reviews">Customer Reviews</a></li>
          <li><a href="/gallery">Project Gallery</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/warranties">Warranties</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>
      <div>
        <h2>Legal</h2>
        <ul style="line-height:2;">
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/accessibility">Accessibility</a></li>
        </ul>
      </div>
    </div>
    <h2 style="margin-top:3rem;">Our Services</h2>
    <ul style="line-height:2;column-count:2;">${services}</ul>
    <h2 style="margin-top:3rem;">Service Locations</h2>
    <ul style="line-height:2;column-count:2;">${locations}</ul>
    <h2 style="margin-top:3rem;">Recent Blog Posts</h2>
    <ul style="line-height:2;">${posts}</ul>
  </div>
</section>`;

  return createHtmlResponse(Layout({
    title: 'Sitemap - All Pages | Brokentop Garage Doors',
    description: 'Complete sitemap of all pages on Brokentop Garage Doors website including services, locations, and resources.',
    content,
    path: '/sitemap',
  }));
};
