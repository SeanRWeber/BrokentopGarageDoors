/**
 * Residential service data - Single Responsibility: Residential service definitions
 * Immutable, SEO-optimized content
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

export const SERVICE_RESIDENTIAL_INSTALL: ServiceDetail = Object.freeze({
  slug: 'residential-garage-door-installation',
  title: 'Residential Garage Door Installation',
  description: 'Professional installation of new garage doors for homes',
  longDescription: 'Upgrade your home with a new garage door. We install all major brands with expert precision, ensuring smooth operation and lasting durability. Our installation includes removal of old doors, professional installation, and complete testing.',
  benefits: ['Free in-home consultation', 'All brands available', 'Professional installation', 'Warranty included', 'Insulation options'],
  process: ['Free consultation & measurement', 'Door selection & ordering', 'Professional installation', 'Final testing & cleanup'],
  pricing: 'Starting at $1,200 installed',
});

export const SERVICE_TRACK_REPAIR: ServiceDetail = Object.freeze({
  slug: 'garage-door-track-repair',
  title: 'Garage Door Track Repair & Alignment',
  description: 'Fix bent, misaligned, or damaged door tracks',
  longDescription: 'Damaged or misaligned tracks cause your door to stick, make noise, or operate unsafely. We straighten bent tracks, realign crooked rails, and replace damaged sections to restore smooth, quiet operation.',
  benefits: ['Same-day repairs', 'Track straightening', 'Full replacement if needed', 'Roller inspection included', 'Alignment guaranteed'],
  process: ['Track inspection', 'Straightening or replacement', 'Alignment adjustment', 'Roller check & lubrication'],
  pricing: 'Starting at $145',
});

export const SERVICE_PANEL_REPLACEMENT: ServiceDetail = Object.freeze({
  slug: 'garage-door-panel-replacement',
  title: 'Garage Door Panel Replacement',
  description: 'Replace damaged or dented door panels',
  longDescription: 'Damaged panels affect your home\'s curb appeal and door function. We replace individual panels to restore appearance and operation without the cost of a full door replacement. Perfect for accident damage or weather-related issues.',
  benefits: ['Cost-effective solution', 'Color matching available', 'Single or multiple panels', 'Same-day service often available', 'Maintains existing door'],
  process: ['Panel assessment', 'Matching panel sourcing', 'Professional replacement', 'Paint touch-up if needed'],
  pricing: 'Starting at $200 per panel',
});
