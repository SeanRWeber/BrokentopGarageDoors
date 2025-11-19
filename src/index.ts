/**
 * Worker entry point - Single Responsibility: Request routing
 * Cloudflare Workers edge handler, zero globals
 */

import type { Env } from './types/core.ts';
import { findRoute } from './router/routes.ts';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
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
