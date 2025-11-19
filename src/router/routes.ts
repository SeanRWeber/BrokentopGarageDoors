/**
 * Routes configuration - Single Responsibility: Route definitions
 * Immutable route table, zero runtime overhead, complete site map
 */

import type { Route } from '../types/core';
import { handleHome } from '../handlers/home';
import { handleServices } from '../handlers/services';
import { handleAbout } from '../handlers/about';
import { handleContact } from '../handlers/contact';
import { handleQuote } from '../handlers/quote';
import { handleEmergency } from '../handlers/emergency';
import { handlePrivacy } from '../handlers/privacy';
import { handleTerms } from '../handlers/terms';
import { handleNotFound } from '../handlers/notfound';
import { handleCss } from '../handlers/css';
import { handleJs } from '../handlers/js';
import { createServiceHandler } from '../handlers/service-detail';
import { createLocationHandler } from '../handlers/location-detail';
import { SERVICE_RESIDENTIAL_REPAIR, SERVICE_SPRING_REPLACEMENT, SERVICE_OPENER_REPAIR } from '../constants/service-data';
import { LOCATION_BEND, LOCATION_REDMOND, LOCATION_SISTERS } from '../constants/location-data';

export const ROUTES: readonly Route[] = Object.freeze([
  { path: '/', handler: handleHome },
  { path: '/index.html', handler: handleHome },
  { path: '/about', handler: handleAbout },
  { path: '/contact', handler: handleContact },
  { path: '/quote', handler: handleQuote },
  { path: '/emergency', handler: handleEmergency },
  { path: '/services', handler: handleServices },
  { path: `/services/${SERVICE_RESIDENTIAL_REPAIR.slug}`, handler: createServiceHandler(SERVICE_RESIDENTIAL_REPAIR) },
  { path: `/services/${SERVICE_SPRING_REPLACEMENT.slug}`, handler: createServiceHandler(SERVICE_SPRING_REPLACEMENT) },
  { path: `/services/${SERVICE_OPENER_REPAIR.slug}`, handler: createServiceHandler(SERVICE_OPENER_REPAIR) },
  { path: `/locations/${LOCATION_BEND.slug}`, handler: createLocationHandler(LOCATION_BEND) },
  { path: `/locations/${LOCATION_REDMOND.slug}`, handler: createLocationHandler(LOCATION_REDMOND) },
  { path: `/locations/${LOCATION_SISTERS.slug}`, handler: createLocationHandler(LOCATION_SISTERS) },
  { path: '/privacy-policy', handler: handlePrivacy },
  { path: '/terms-of-service', handler: handleTerms },
  { path: '/styles.css', handler: handleCss },
  { path: '/app.js', handler: handleJs },
]);

export const findRoute = (pathname: string): Route => {
  const normalized = pathname === '/index.html' ? '/' : pathname;
  return ROUTES.find((route) => route.path === normalized) ?? {
    path: '*',
    handler: handleNotFound,
  };
};
