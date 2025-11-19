/**
 * Service data - Single Responsibility: Service content definitions
 * Immutable service catalog, SEO-optimized content
 */

import type { ServiceDetail } from '../types/service';

export const SERVICE_RESIDENTIAL_REPAIR: ServiceDetail = Object.freeze({
  slug: 'residential-garage-door-repair',
  title: 'Residential Garage Door Repair',
  description: 'Expert repair services for all residential garage door issues',
  longDescription: 'Our technicians diagnose and repair all types of residential garage door problems, from broken springs to malfunctioning openers. We arrive prepared with common parts and tools to complete most repairs in a single visit.',
  benefits: ['Same-day service available', 'Honest diagnostics', 'Upfront pricing', 'Quality parts', '90-day warranty on labor'],
  process: ['Schedule appointment', 'Diagnosis & quote', 'Repair completed', 'Testing & cleanup'],
  pricing: 'Starting at $125 + parts',
});

export const SERVICE_SPRING_REPLACEMENT: ServiceDetail = Object.freeze({
  slug: 'garage-door-spring-replacement',
  title: 'Garage Door Spring Replacement',
  description: 'Fast, safe spring replacement by certified technicians',
  longDescription: 'Broken garage door springs are dangerous and require professional replacement. Our certified technicians safely remove old springs and install high-cycle replacement springs that last 2-3x longer than standard springs.',
  benefits: ['High-cycle springs standard', 'Same-day service', 'Safety tested', 'Lifetime warranty available', 'Both torsion & extension springs'],
  process: ['Safety inspection', 'Old spring removal', 'New spring installation', 'Balance testing'],
  pricing: 'Starting at $195 (single), $275 (pair)',
});

export const SERVICE_OPENER_REPAIR: ServiceDetail = Object.freeze({
  slug: 'garage-door-opener-repair',
  title: 'Garage Door Opener Repair',
  description: 'Opener troubleshooting, repair, and replacement',
  longDescription: 'Is your garage door opener making noise, not responding, or failing to close? We service all major brands including LiftMaster, Chamberlain, and Genie. From simple adjustments to complete replacement, we get your opener working smoothly.',
  benefits: ['All brands serviced', 'Smart opener upgrades', 'Safety sensor alignment', 'Remote programming', '5-year motor warranty'],
  process: ['Diagnostic testing', 'Repair or replacement recommendation', 'Installation if needed', 'Programming & testing'],
  pricing: 'Repair from $125, New openers from $395',
});

export const ALL_SERVICES: readonly ServiceDetail[] = Object.freeze([
  SERVICE_RESIDENTIAL_REPAIR,
  SERVICE_SPRING_REPLACEMENT,
  SERVICE_OPENER_REPAIR,
]);
