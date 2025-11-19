/**
 * Static routes - Single Responsibility: Core static route definitions
 * Immutable, explicit route list
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
import { handleReviews } from '../handlers/reviews';
import { handleGallery } from '../handlers/gallery';
import { handleFaq } from '../handlers/faq';
import { handleWarranties } from '../handlers/warranties';
import { handleBlog } from '../handlers/blog';
import { handleCss } from '../handlers/css';
import { handleJs } from '../handlers/js';

export const STATIC_ROUTES: readonly Route[] = Object.freeze([
  { path: '/', handler: handleHome },
  { path: '/about', handler: handleAbout },
  { path: '/contact', handler: handleContact },
  { path: '/quote', handler: handleQuote },
  { path: '/emergency', handler: handleEmergency },
  { path: '/services', handler: handleServices },
  { path: '/reviews', handler: handleReviews },
  { path: '/gallery', handler: handleGallery },
  { path: '/faq', handler: handleFaq },
  { path: '/warranties', handler: handleWarranties },
  { path: '/blog', handler: handleBlog },
  { path: '/privacy-policy', handler: handlePrivacy },
  { path: '/terms-of-service', handler: handleTerms },
  { path: '/styles.css', handler: handleCss },
  { path: '/app.js', handler: handleJs },
]);
