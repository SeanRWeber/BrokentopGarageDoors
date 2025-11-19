/**
 * Seasonal blog posts - Single Responsibility: Seasonal content
 * Immutable, SEO-optimized
 */

import type { BlogPost } from '../types/blog';

export const POST_WINTER_CARE: BlogPost = Object.freeze({
  slug: 'winter-garage-door-care-central-oregon',
  title: 'Winter Garage Door Care in Central Oregon',
  excerpt: 'Protect your garage door from harsh Central Oregon winters with these essential maintenance tips.',
  content: 'Central Oregon winters are tough on garage doors. Cold temperatures cause metal to contract, lubricants to thicken, and weather seals to crack. Prevent winter failures with these steps: 1) Replace worn weather stripping before first snow. 2) Switch to low-temperature lubricant. 3) Keep tracks clear of ice and snow. 4) Test safety sensors monthly. 5) Clear snow away from door bottom. 6) Never force a frozen door open. If your door won\'t open in winter, call us for emergency service before causing damage.',
  category: 'Seasonal Tips',
  date: '2024-11-01',
  author: 'Brokentop Garage Doors',
});

export const POST_CHOOSING_DOOR: BlogPost = Object.freeze({
  slug: 'how-to-choose-right-garage-door',
  title: 'How to Choose the Right Garage Door for Your Bend Home',
  excerpt: 'Expert guide to selecting the perfect garage door style, material, and features for Central Oregon homes.',
  content: 'Choosing a garage door is a major decision that impacts curb appeal and home value. Consider these factors: 1) Material: Steel is durable and low-maintenance, wood offers natural beauty but needs upkeep, aluminum is lightweight and rust-proof. 2) Insulation: R-value of 12-18 recommended for Central Oregon climate. 3) Style: Match your home architecture - traditional, carriage house, or modern. 4) Windows: Add natural light but reduce privacy. 5) Color: Light colors show dirt less, dark colors absorb heat. Budget $1,200-$3,500 for quality residential doors. We offer free in-home consultations to help you choose.',
  category: 'Buying Guides',
  date: '2024-12-15',
  author: 'Brokentop Garage Doors',
});
