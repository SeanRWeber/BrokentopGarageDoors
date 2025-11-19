/**
 * Core type definitions - Single Responsibility: Type contracts only
 * Zero runtime overhead, compile-time safety only
 */

export interface Env {
  readonly ENVIRONMENT: 'production' | 'development';
}

export interface Route {
  readonly path: string;
  readonly handler: RouteHandler;
}

export type RouteHandler = (req: Request) => Promise<Response> | Response;

export interface HtmlProps {
  readonly [key: string]: string | number | boolean | readonly string[];
}

export interface ComponentProps extends HtmlProps {
  readonly class?: string;
  readonly id?: string;
}
