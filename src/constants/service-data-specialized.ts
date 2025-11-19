/**
 * Specialized service data - Single Responsibility: Specialized service definitions
 * Immutable, SEO-optimized content
 */

import type { ServiceDetail } from '../types/service';

export const SERVICE_EMERGENCY: ServiceDetail = Object.freeze({
  slug: 'emergency-garage-door-repair',
  title: '24/7 Emergency Garage Door Repair',
  description: 'Round-the-clock emergency repair service',
  longDescription: 'Garage door emergencies don\'t wait for business hours. We provide 24/7 emergency service for broken springs, doors stuck open, security issues, and safety hazards. Fast response to get your door secured and operational.',
  benefits: ['24/7 availability', 'Fast response time', 'Fully stocked service vehicles', 'Security priority', 'Same-visit repairs'],
  process: ['Emergency call received', 'Rapid dispatch', 'On-site repair', 'Security verification'],
  pricing: 'Emergency fee $95 + standard rates',
});

export const SERVICE_MAINTENANCE: ServiceDetail = Object.freeze({
  slug: 'garage-door-maintenance',
  title: 'Preventive Garage Door Maintenance',
  description: 'Annual maintenance plans to prevent breakdowns',
  longDescription: 'Regular maintenance extends door life and prevents unexpected breakdowns. Our comprehensive service includes lubrication, spring adjustment, safety testing, hardware inspection, and minor adjustments to keep your door running smoothly.',
  benefits: ['Prevent costly repairs', 'Annual or bi-annual plans', 'Priority scheduling', 'Detailed inspection report', 'Discount on future repairs'],
  process: ['Complete inspection', 'Lubrication & adjustment', 'Safety testing', 'Written report with photos'],
  pricing: 'Starting at $99 per visit',
});

export const SERVICE_INSULATION: ServiceDetail = Object.freeze({
  slug: 'garage-door-insulation',
  title: 'Garage Door Insulation & Weatherproofing',
  description: 'Improve energy efficiency with insulation upgrades',
  longDescription: 'Reduce energy costs and improve comfort with garage door insulation. We install insulation panels, weather seals, and bottom seals to keep heat in during winter and out during summer. Especially important in Central Oregon\'s climate.',
  benefits: ['Lower energy bills', 'Temperature control', 'Noise reduction', 'R-value certification', 'Weather seal replacement'],
  process: ['Energy assessment', 'Insulation installation', 'Weather seal upgrade', 'Thermal efficiency testing'],
  pricing: 'Starting at $350',
});
