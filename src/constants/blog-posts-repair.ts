/**
 * Repair blog posts - Single Responsibility: Repair troubleshooting content
 * Immutable, SEO-optimized
 */

import type { BlogPost } from '../types/blog';

export const POST_DOOR_WONT_CLOSE: BlogPost = Object.freeze({
  slug: 'garage-door-wont-close-troubleshooting',
  title: 'Why Won\'t My Garage Door Close? Troubleshooting Guide',
  excerpt: 'Step-by-step troubleshooting for garage doors that won\'t close completely.',
  content: 'A garage door that won\'t close is frustrating and a security risk. Common causes: 1) Photo-eye sensors blocked or misaligned - clean lenses and check alignment lights. 2) Close limit switch needs adjustment - professional service required. 3) Broken spring reducing lifting power - dangerous, call immediately. 4) Track obstruction or damage - inspect for debris or bent rails. 5) Opener force setting too low - may need professional adjustment. 6) Remote battery dead - try wall button to test. Try these simple fixes first, but call us if the problem persists. Never bypass safety sensors.',
  category: 'Repair Guides',
  date: '2024-12-20',
  author: 'Brokentop Garage Doors',
});

export const POST_OPENER_LIFESPAN: BlogPost = Object.freeze({
  slug: 'how-long-garage-door-openers-last',
  title: 'How Long Do Garage Door Openers Last?',
  excerpt: 'Learn the typical lifespan of garage door openers and signs it\'s time for replacement.',
  content: 'Garage door openers last 10-15 years on average with proper maintenance. Factors affecting lifespan: 1) Usage frequency - more cycles means faster wear. 2) Maintenance - annual lubrication extends life. 3) Quality - belt drive openers outlast chain drive. 4) Climate - temperature extremes stress motors. Signs to replace your opener: grinding noises, slow operation, intermittent failures, excessive vibration, or age over 15 years. Modern openers offer quieter operation, smartphone control, and better safety features. We install LiftMaster, Chamberlain, and Genie openers with 5-year warranties.',
  category: 'Repair Guides',
  date: '2024-12-05',
  author: 'Brokentop Garage Doors',
});
