# Brokentop Garage Doors - Cloudflare Workers SSR

Professional garage door services website built with TypeScript SSR on Cloudflare Workers.

## Architecture

GOD-MODE atomic module design:
- **≤50 lines per module** - Single Responsibility Principle
- **Zero side effects** - Pure functional where possible
- **Full type safety** - Strict TypeScript configuration
- **Security-first** - Input sanitization, validation, CSP headers
- **SOLID principles** - DRY/KISS/YAGNI/SOC compliance

## Project Structure

```
src/
├── types/          # Type definitions (compile-time only)
│   ├── core.ts     # Core application types
│   └── business.ts # Business domain types
├── constants/      # Immutable data (Object.freeze)
│   ├── business.ts # Business info, hours, service areas
│   └── colors.ts   # Design system color palette
├── utils/          # Pure utility functions
│   ├── sanitize.ts # XSS prevention, HTML escaping
│   ├── validate.ts # Input validation predicates
│   ├── css.ts      # CSS generation utilities
│   └── response.ts # HTTP response factories
├── components/     # HTML component generators
│   ├── meta.ts     # SEO meta tags
│   ├── schema.ts   # Schema.org structured data
│   ├── header.ts   # Site header
│   ├── footer.ts   # Site footer
│   ├── hero.ts     # Homepage hero
│   └── layout.ts   # Page layout wrapper
├── styles/         # CSS modules
│   ├── base.ts     # Foundation styles
│   └── header.ts   # Header navigation styles
├── router/         # Request routing
│   └── routes.ts   # Route table
├── handlers/       # Route handlers
│   ├── home.ts     # Homepage handler
│   └── notfound.ts # 404 handler
└── index.ts        # Worker entry point
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type check
npm run typecheck

# Build for production
npm run build

# Deploy to Cloudflare
npm run deploy
```

## Security

- **CSP Headers** - Content Security Policy enforcement
- **Input Sanitization** - HTML escaping, URL validation
- **Input Validation** - Type guards, length checks
- **Zero-trust** - All inputs treated as hostile
- **OWASP/CWE** - Security best practices compliance

## SEO & E-E-A-T

- Schema.org structured data (LocalBusiness)
- Professional contractor color palette (Navy + Orange)
- YMYL compliance (trust signals, certifications)
- Human Made-level navigation design
- 4.9/5 rating, 287 reviews, 15+ years experience

## License

© 2024 Brokentop Garage Doors. All rights reserved.
