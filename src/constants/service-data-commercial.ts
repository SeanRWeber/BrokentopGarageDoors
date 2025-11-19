/**
 * Commercial service data - Single Responsibility: Commercial service definitions
 * Immutable, SEO-optimized content
 */

import type { ServiceDetail } from '../types/service';

export const SERVICE_COMMERCIAL_REPAIR: ServiceDetail = Object.freeze({
  slug: 'commercial-garage-door-repair',
  title: 'Commercial Garage Door Repair',
  description: 'Fast commercial door repair to minimize downtime',
  longDescription: 'Commercial doors require specialized expertise. We service overhead doors, roll-up doors, and loading dock equipment for warehouses, shops, and businesses. Minimize downtime with our fast response and professional repairs.',
  benefits: ['24/7 emergency service', 'Minimize business disruption', 'All commercial door types', 'Preventive maintenance plans', 'Fleet service available'],
  process: ['Emergency response', 'On-site diagnosis', 'Repair with commercial-grade parts', 'Safety certification'],
  pricing: 'Starting at $195 + parts',
});

export const SERVICE_COMMERCIAL_INSTALL: ServiceDetail = Object.freeze({
  slug: 'commercial-garage-door-installation',
  title: 'Commercial Garage Door Installation',
  description: 'New commercial door installation for businesses',
  longDescription: 'Equip your business with durable, professional-grade commercial doors. We install overhead sectional doors, rolling steel doors, high-speed doors, and fire-rated doors to meet your business needs and code requirements.',
  benefits: ['Code-compliant installation', 'Heavy-duty commercial grade', 'Custom sizing available', 'Fire-rated options', 'Warranty coverage'],
  process: ['Site assessment', 'Custom specification', 'Professional installation', 'Code inspection & certification'],
  pricing: 'Starting at $2,500 per door',
});

export const SERVICE_LOADING_DOCK: ServiceDetail = Object.freeze({
  slug: 'loading-dock-equipment',
  title: 'Loading Dock Equipment Service',
  description: 'Dock levelers, seals, and door maintenance',
  longDescription: 'Keep your loading dock operating efficiently. We service dock levelers, dock seals, bumpers, and high-speed doors. Regular maintenance prevents costly downtime and ensures worker safety.',
  benefits: ['Minimize shipping delays', 'Safety compliance', 'Preventive maintenance', 'Emergency repairs', 'All brands serviced'],
  process: ['Equipment inspection', 'Repair or adjustment', 'Safety testing', 'Compliance documentation'],
  pricing: 'Starting at $225 per service call',
});
