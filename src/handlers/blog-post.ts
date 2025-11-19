/**
 * Blog post handler - Single Responsibility: Blog post page generator
 * Pure function factory, content display
 */

import { Layout } from '../components/layout';
import type { BlogPost } from '../types/blog';
import { createHtmlResponse } from '../utils/response';

export const createBlogPostHandler = (post: BlogPost) => (): Response => {
  const content = `
<article>
  <div class="container" style="max-width:800px;">
    <div style="text-align:center;margin-bottom:3rem;">
      <div style="color:var(--color-accent);font-size:0.875rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:1rem;">${post.category}</div>
      <h1>${post.title}</h1>
      <div style="color:var(--color-gray-600);margin-top:1rem;">
        ${new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} • By ${post.author}
      </div>
    </div>
    <div style="font-size:1.125rem;line-height:1.9;color:var(--color-gray-800);">
      ${post.content.split('. ').map(sentence => `<p>${sentence.trim()}${sentence.endsWith('.') ? '' : '.'}</p>`).join('')}
    </div>
    <div style="margin-top:3rem;padding:2rem;background:var(--color-gray-50);border-radius:var(--radius-lg);text-align:center;">
      <h3>Need Professional Help?</h3>
      <p>Our expert technicians are here to help with all your garage door needs.</p>
      <a href="/quote" class="btn btn-primary btn-large" style="margin-top:1rem;">Get Free Quote</a>
    </div>
    <div style="margin-top:2rem;text-align:center;">
      <a href="/blog" style="color:var(--color-accent);text-decoration:none;">← Back to Blog</a>
    </div>
  </div>
</article>`;

  return createHtmlResponse(Layout({
    title: `${post.title} | Brokentop Garage Doors Blog`,
    description: post.excerpt,
    content,
    path: `/blog/${post.slug}`,
  }));
};
