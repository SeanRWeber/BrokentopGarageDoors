/**
 * Routes configuration - Single Responsibility: Route definitions
 * Immutable route table, zero runtime overhead, complete site map
 */

import type { Route } from '../types/core';
import { handleHome } from '../handlers/home';
import { handleServices } from '../handlers/services';
import { handleAbout } from '../handlers/about';
import { handleContact } from '../handlers/contact';
import { handleNotFound } from '../handlers/notfound';
import { handleCss } from '../handlers/css';
import { handleJs } from '../handlers/js';

export const ROUTES: readonly Route[] = Object.freeze([
  { path: '/', handler: handleHome },
  { path: '/index.html', handler: handleHome },
  { path: '/services', handler: handleServices },
  { path: '/about', handler: handleAbout },
  { path: '/contact', handler: handleContact },
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
