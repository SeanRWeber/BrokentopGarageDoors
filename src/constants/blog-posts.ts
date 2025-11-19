/**
 * Blog posts - Single Responsibility: Blog content definitions
 * Immutable, SEO-optimized content
 */

import type { BlogPost } from '../types/blog';

export const POST_MAINTENANCE_CHECKLIST: BlogPost = Object.freeze({
  slug: 'annual-garage-door-maintenance-checklist',
  title: 'Annual Garage Door Maintenance Checklist',
  excerpt: 'Keep your garage door running smoothly with this comprehensive annual maintenance checklist.',
  content: 'Regular maintenance extends the life of your garage door and prevents costly emergency repairs. Follow this annual checklist: 1) Visually inspect all hardware for wear. 2) Test safety reversal features. 3) Lubricate moving parts with white lithium grease. 4) Check weather sealing. 5) Test door balance. 6) Tighten all bolts and brackets. 7) Inspect cables for fraying. 8) Clean tracks and sensors. Schedule professional service if you notice any issues.',
  category: 'Maintenance Tips',
  date: '2025-01-15',
  author: 'Brokentop Garage Doors',
});

export const POST_SPRING_SIGNS: BlogPost = Object.freeze({
  slug: 'signs-garage-door-spring-breaking',
  title: '7 Signs Your Garage Door Spring is Breaking',
  excerpt: 'Learn the warning signs of spring failure before your door fails completely.',
  content: 'Garage door springs don\'t last forever. Watch for these signs: 1) Door feels heavy to lift manually. 2) Door opens unevenly or crooked. 3) Loud bang from garage (spring broke). 4) Visible gaps in torsion spring. 5) Door won\'t stay open when partially raised. 6) Opener strains or won\'t lift door. 7) Cables hanging loose. If you see these signs, call immediately. Broken springs are dangerous to replace yourself.',
  category: 'Repair Guides',
  date: '2025-01-10',
  author: 'Brokentop Garage Doors',
});

export const POST_LUBRICATION_GUIDE: BlogPost = Object.freeze({
  slug: 'how-to-lubricate-garage-door',
  title: 'How to Lubricate Your Garage Door (Step-by-Step)',
  excerpt: 'A simple DIY guide to lubricating your garage door for smooth, quiet operation.',
  content: 'Proper lubrication reduces noise and extends door life. Here\'s how: 1) Clean tracks with damp cloth (don\'t lubricate tracks). 2) Apply white lithium grease or garage door lubricant to rollers, hinges, and springs. 3) Lubricate the top of the chain/belt on opener. 4) Wipe excess to prevent dust buildup. 5) Operate door several times to distribute lubricant. Do this every 6 months or when you hear squeaking. Takes just 10 minutes!',
  category: 'Maintenance Tips',
  date: '2025-01-05',
  author: 'Brokentop Garage Doors',
});

export const ALL_POSTS: readonly BlogPost[] = Object.freeze([
  POST_MAINTENANCE_CHECKLIST,
  POST_SPRING_SIGNS,
  POST_LUBRICATION_GUIDE,
]);
