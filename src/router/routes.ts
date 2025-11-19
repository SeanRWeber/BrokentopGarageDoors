/**
 * Routes configuration - Single Responsibility: Route definitions
 * Immutable route table, zero runtime overhead
 */

import type { Route } from '../types/core.ts';
import { handleHome } from '../handlers/home.ts';
import { handleNotFound } from '../handlers/notfound.ts';

export const ROUTES: readonly Route[] = Object.freeze([
  { path: '/', handler: handleHome },
  { path: '/index.html', handler: handleHome },
]);

export const findRoute = (pathname: string): Route => {
  const normalized = pathname === '/index.html' ? '/' : pathname;
  return ROUTES.find((route) => route.path === normalized) ?? {
    path: '*',
    handler: handleNotFound,
  };
};
