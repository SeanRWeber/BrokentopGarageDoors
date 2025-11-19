/**
 * XML Sitemap handler - Single Responsibility: SEO sitemap generation
 * Pure function, dynamic generation
 */

import { ALL_SERVICES } from '../constants/service-data';
import { ALL_LOCATIONS } from '../constants/location-data';
import { ALL_POSTS } from '../constants/blog-posts';

const BASE_URL = 'https://brokentopgaragedoors.com';

export const handleSitemapXml = (): Response => {
  const staticUrls = ['/', '/about', '/contact', '/quote', '/emergency', '/services', '/reviews', '/gallery', '/faq', '/warranties', '/blog', '/schedule', '/privacy-policy', '/terms-of-service', '/accessibility', '/sitemap'];
  const serviceUrls = ALL_SERVICES.map(s => `/services/${s.slug}`);
  const locationUrls = ALL_LOCATIONS.map(l => `/locations/${l.slug}`);
  const blogUrls = ALL_POSTS.map(p => `/blog/${p.slug}`);
  const allUrls = [...staticUrls, ...serviceUrls, ...locationUrls, ...blogUrls];

  const urls = allUrls.map(path => `  <url>
    <loc>${BASE_URL}${path}</loc>
    <changefreq>${path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
