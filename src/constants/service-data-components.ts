/**
 * Component service data - Single Responsibility: Component-specific services
 * Immutable, SEO-optimized content
 */

import type { ServiceDetail } from '../types/service';

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

export const SERVICE_CABLE_REPAIR: ServiceDetail = Object.freeze({
  slug: 'garage-door-cable-repair',
  title: 'Garage Door Cable Repair',
  description: 'Emergency cable repair and replacement',
  longDescription: 'Broken or frayed cables make your garage door unsafe to operate. We provide emergency cable replacement to restore safe operation. Cables work with springs to lift your door smoothly and safely.',
  benefits: ['Emergency service available', 'High-strength cables', 'Safety inspection included', 'Both sides replaced', 'Tested for proper tension'],
  process: ['Safety assessment', 'Spring tension release', 'Cable replacement', 'Tension adjustment & testing'],
  pricing: 'Starting at $165',
});

export const SERVICE_SMART_OPENERS: ServiceDetail = Object.freeze({
  slug: 'smart-garage-door-openers',
  title: 'Smart Garage Door Opener Installation',
  description: 'Upgrade to WiFi-enabled smart opener systems',
  longDescription: 'Control your garage door from anywhere with a smart opener. Monitor status, receive alerts, and integrate with your smart home. We install and configure LiftMaster MyQ, Chamberlain, and other smart systems.',
  benefits: ['Phone app control', 'Real-time alerts', 'Smart home integration', 'Guest access codes', 'Activity history'],
  process: ['System selection', 'Professional installation', 'WiFi configuration', 'App setup & training'],
  pricing: 'Starting at $495 installed',
});
