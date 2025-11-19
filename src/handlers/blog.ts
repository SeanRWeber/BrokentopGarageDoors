/**
 * Blog index handler - Single Responsibility: Blog listing page
 * Pure function, content marketing display
 */

import { Layout } from '../components/layout';
import { ALL_POSTS } from '../constants/blog-posts';
import { createHtmlResponse } from '../utils/response';

export const handleBlog = (): Response => {
  const posts = ALL_POSTS.map(p =>
    `<div class="service-card">
      <div style="color:var(--color-accent);font-size:0.875rem;font-weight:600;margin-bottom:0.5rem;">${p.category}</div>
      <h3><a href="/blog/${p.slug}" style="color:var(--color-gray-900);text-decoration:none;">${p.title}</a></h3>
      <p style="color:var(--color-gray-600);margin:1rem 0;">${p.excerpt}</p>
      <div style="font-size:0.875rem;color:var(--color-gray-500);">${new Date(p.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
      <a href="/blog/${p.slug}" class="btn btn-secondary" style="margin-top:1rem;">Read More</a>
    </div>`
  ).join('');

  const content = `
<section>
  <div class="container">
    <div class="section-header">
      <span class="section-badge">Blog</span>
      <h1 class="section-title">Garage Door Tips & Guides</h1>
      <p class="section-description">
        Expert advice on garage door maintenance, repair, and upgrades from Central Oregon's trusted professionals.
      </p>
    </div>
    <div class="services-grid">${posts}</div>
  </div>
</section>`;

  return createHtmlResponse(Layout({
    title: 'Garage Door Blog - Tips, Guides & Advice | Brokentop',
    description: 'Expert garage door maintenance tips, repair guides, and buying advice from Brokentop Garage Doors in Central Oregon.',
    content,
    path: '/blog',
  }));
};
