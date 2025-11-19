/**
 * Blog types - Single Responsibility: Blog data structures
 * Immutable interfaces, type safety
 */

export interface BlogPost {
  readonly slug: string;
  readonly title: string;
  readonly excerpt: string;
  readonly content: string;
  readonly category: string;
  readonly date: string;
  readonly author: string;
}
