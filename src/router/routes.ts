/**
 * Routes configuration - Single Responsibility: Route aggregation
 * Immutable route table, DRY dynamic generation
 */

import type { Route } from '../types/core';
import { STATIC_ROUTES } from './routes-static';
import { handleNotFound } from '../handlers/notfound';
import { createServiceHandler } from '../handlers/service-detail';
import { createLocationHandler } from '../handlers/location-detail';
import { createBlogPostHandler } from '../handlers/blog-post';
import { ALL_SERVICES } from '../constants/service-data';
import { ALL_LOCATIONS } from '../constants/location-data';
import { ALL_POSTS } from '../constants/blog-posts';

const serviceRoutes: Route[] = ALL_SERVICES.map(s => ({
  path: `/services/${s.slug}`,
  handler: createServiceHandler(s),
}));

const locationRoutes: Route[] = ALL_LOCATIONS.map(l => ({
  path: `/locations/${l.slug}`,
  handler: createLocationHandler(l),
}));

const blogRoutes: Route[] = ALL_POSTS.map(p => ({
  path: `/blog/${p.slug}`,
  handler: createBlogPostHandler(p),
}));

export const ROUTES: readonly Route[] = Object.freeze([
  ...STATIC_ROUTES,
  ...serviceRoutes,
  ...locationRoutes,
  ...blogRoutes,
]);

export const findRoute = (pathname: string): Route =>
  ROUTES.find(r => r.path === pathname) ?? { path: '*', handler: handleNotFound };
