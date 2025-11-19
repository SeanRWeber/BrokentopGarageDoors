/**
 * Business domain types - Single Responsibility: Business entity contracts
 */

export interface BusinessInfo {
  readonly name: string;
  readonly phone: string;
  readonly email: string;
  readonly address: string;
  readonly foundingYear: number;
  readonly rating: number;
  readonly reviewCount: number;
}

export interface Service {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export interface Testimonial {
  readonly name: string;
  readonly location: string;
  readonly text: string;
  readonly rating: number;
}
