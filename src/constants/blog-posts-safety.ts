/**
 * Safety blog posts - Single Responsibility: Safety and prevention content
 * Immutable, SEO-optimized
 */

import type { BlogPost } from '../types/blog';

export const POST_DIY_DANGERS: BlogPost = Object.freeze({
  slug: 'garage-door-repair-never-attempt-diy',
  title: 'DIY Garage Door Repair: What You Should NEVER Attempt',
  excerpt: 'Critical safety warning about dangerous DIY garage door repairs that can cause serious injury.',
  content: 'Garage door injuries send thousands to hospitals annually. NEVER attempt these repairs yourself: 1) Spring replacement - springs under 200+ pounds of tension can cause severe injury or death. 2) Cable repair - cables can snap with deadly force. 3) Bracket adjustment - torsion spring brackets are under extreme pressure. 4) Roller replacement on tensioned springs - requires releasing spring tension safely. 5) Track modification - improper work causes door collapse. Safe DIY tasks: lubrication, cleaning tracks, replacing remote batteries, tightening loose hardware. For everything else, call professionals. We carry $2M liability insurance and proper safety equipment. Your safety is worth the service call.',
  category: 'Safety',
  date: '2024-11-20',
  author: 'Brokentop Garage Doors',
});

export const POST_SAFETY_FEATURES: BlogPost = Object.freeze({
  slug: 'how-to-test-garage-door-safety-features',
  title: 'How to Test Your Garage Door Safety Features',
  excerpt: 'Monthly safety tests every homeowner should perform to prevent accidents and injuries.',
  content: 'Test these safety features monthly: 1) Photo-eye sensors: Place object in door path while closing - door should reverse immediately. Clean sensor lenses with soft cloth. 2) Auto-reverse: Place 2x4 board flat under door while closing - door should reverse on contact. If it doesn\'t, call for service immediately. 3) Manual release: Pull red emergency cord - door should disconnect from opener and move freely. Practice this during power outage preparation. 4) Visual inspection: Look for frayed cables, rusted springs, bent tracks. These tests take 5 minutes and could save a life. Failed tests require professional service - don\'t delay.',
  category: 'Safety',
  date: '2024-11-15',
  author: 'Brokentop Garage Doors',
});
