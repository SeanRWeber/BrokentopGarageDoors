/**
 * Location types - Single Responsibility: Location data structures
 * Immutable interfaces, type safety
 */

export interface LocationDetail {
  readonly slug: string;
  readonly city: string;
  readonly zip: readonly string[];
  readonly landmarks: readonly string[];
  readonly driveTime: string;
}
