/**
 * Service types - Single Responsibility: Service data structures
 * Immutable interfaces, type safety
 */

export interface ServiceDetail {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly longDescription: string;
  readonly benefits: readonly string[];
  readonly process: readonly string[];
  readonly pricing: string;
}
