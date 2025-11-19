/**
 * Worker entry point - Single Responsibility: Request routing
 * Cloudflare Workers edge handler, zero globals
 */

import { findRoute } from './router/routes';

export default {
  async fetch(request: Request): Promise<Response> {
    try {
      const url = new URL(request.url);
      const route = findRoute(url.pathname);
      return await route.handler(request);
    } catch (error) {
      console.error('Worker error:', error);
      return new Response('Internal Server Error', { status: 500 });
    }
  },
};
