# Cannabis Clubs Spain - Complete Next.js 16 Project

A comprehensive guide website for cannabis social clubs across Spain, built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Project Overview

**Live Domain**: cannabisclubsspain.com

This is a full-featured SEO-optimized content site with:
- 12 main content pages + homepage
- City guides: Barcelona, Madrid, Valencia, Málaga, Ibiza, Seville
- Educational guides: Cannabis Laws, How to Join, Prices, Spain vs Amsterdam, Tourism
- Structured data (JSON-LD) for SEO
- Sitemap and robots.txt
- Editorial design with forest green + gold theme
- Full responsive mobile-first design
- Dark mode support

## Tech Stack

- **Framework**: Next.js 16.1.6
- **React**: 19.2.3
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + Custom CSS variables
- **Fonts**: Google Fonts (Fraunces + Inter)
- **Images**: Cloudinary CDN-ready
- **Linting**: ESLint 9

## Project Structure

```
/cannabis-clubs-spain/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with metadata
│   │   ├── globals.css             # Global styles + design tokens
│   │   ├── page.tsx                # Homepage with city grid
│   │   ├── robots.ts               # SEO robots.txt generation
│   │   ├── sitemap.ts              # SEO sitemap generation
│   │   ├── barcelona/page.tsx       # City guides
│   │   ├── madrid/page.tsx
│   │   ├── valencia/page.tsx
│   │   ├── malaga/page.tsx
│   │   ├── ibiza/page.tsx
│   │   ├── seville/page.tsx
│   │   ├── cannabis-laws-spain/page.tsx      # Educational guides
│   │   ├── how-to-join/page.tsx
│   │   ├── prices/page.tsx
│   │   ├── spain-vs-amsterdam/page.tsx
│   │   └── cannabis-tourism-guide/page.tsx
│   └── components/
│       ├── Header.tsx              # Sticky nav with dropdowns
│       ├── Footer.tsx              # Editorial footer
│       ├── SchemaMarkup.tsx        # JSON-LD utilities
│       ├── ArticleLayout.tsx       # Article template with hero
│       ├── CityCard.tsx            # Reusable city card
│       ├── CTA.tsx                 # Call-to-action variants
│       └── FAQSection.tsx          # Accordion FAQ component
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── .gitignore
```

## Design System

### Color Palette
- **Forest Green**: `#1a4731` (primary brand)
- **Forest Light**: `#245a3f` (hover states)
- **Forest Dark**: `#0f2e1f` (deep backgrounds)
- **Cream**: `#faf5eb` (light backgrounds)
- **Gold**: `#d4a853` (accents, CTA)
- **Gold Light**: `#e4c070` (hover states)

CSS variables are defined in `globals.css` with automatic dark mode support.

### Typography
- **Serif**: Fraunces (headings, editorial)
- **Sans-serif**: Inter (body text, UI)

Both fonts are loaded via Google Fonts API with `display: swap`.

## Features

### SEO & Metadata
- Comprehensive metadata for each page
- Open Graph tags for social sharing
- Twitter Card integration
- Structured data (JSON-LD) for Organization, Article, FAQ, Breadcrumbs
- Auto-generated sitemap.xml
- robots.txt with CDN reference
- Semantic HTML5

### Components

**Header**
- Sticky positioned with blur effect
- Dropdown navigation (Cities, Guides)
- Mobile hamburger menu
- Logo with branding

**Footer**
- 4-column grid layout
- City links + educational guides
- CTA section
- Copyright + partner links

**ArticleLayout**
- Hero image with gradient overlay
- Breadcrumb navigation
- Article content area with prose styling
- Integrated CTA at bottom
- Schema markup injection

**CityCard**
- Image with hover zoom effect
- Badge support (e.g., "Most Popular")
- Responsive grid layout
- Link-wrapped for navigation

**CTA Component**
- 3 variants: invitation, guide, join
- Invitation variant: external link to WeedMadrid
- Guide variant: internal navigation
- Join variant: simple button link

**FAQSection**
- Accordion-style expanded/collapsed
- FAQ schema markup
- Smooth interactions
- Fully accessible

### Pages

**Homepage** (`/`)
- Hero section with gradient background
- City discovery grid (6 cities)
- Essential guides quick links (4 links)
- Invitation CTA

**City Guides** (Barcelona, Madrid, Valencia, Málaga, Ibiza, Seville)
- Placeholder content (ready for full articles)
- Optimized metadata for local SEO
- Hero image support
- ArticleLayout ready

**Educational Guides**
- Cannabis Laws Spain
- How to Join a Club
- Prices & Costs
- Spain vs Amsterdam
- Cannabis Tourism Guide
- Placeholder content with SEO metadata

## Getting Started

### Installation

```bash
cd cannabis-clubs-spain
npm install
```

### Development

```bash
npm run dev
```

Server runs on `http://localhost:3000`

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## SEO & Performance

### Implemented Features
- Static site generation (SSG) for all pages
- Image optimization via Cloudinary
- Font optimization with `display: swap`
- Mobile-first responsive design
- Semantic HTML
- Breadcrumb navigation
- Internal linking structure
- Optimized metadata

### Next Steps
1. Create Cloudinary account and upload hero images
2. Update image URLs in components (currently use placeholder paths)
3. Add full article content to placeholder pages
4. Configure analytics (Vercel Web Analytics or Google Analytics)
5. Set up monitoring/alerting

## Deployment

### Vercel (Recommended)

```bash
vercel deploy
```

All routes are pre-rendered as static content, enabling instant CDN delivery.

### Environment Variables

No API keys or secrets required for baseline functionality.

For future enhancements (CMS, analytics):
- Add `.env.local` for local development
- Configure in Vercel dashboard for production

## Customization

### Adding New Pages

1. Create new route folder: `src/app/new-page/page.tsx`
2. Add metadata in page component
3. Update Header/Footer links if needed
4. Update sitemap.ts priorities
5. Rebuild: `npm run build`

### Updating Design

All colors are CSS variables in `src/app/globals.css`:
```css
:root {
  --color-forest: #1a4731;
  --color-gold: #d4a853;
  /* etc */
}
```

Update theme by modifying variable values.

### Adding FAQ/Schema Markup

Use `FAQSection` and `SchemaMarkup` components:

```tsx
import FAQSection from "@/components/FAQSection";

<FAQSection faqs={[
  { question: "Q1?", answer: "A1." },
  { question: "Q2?", answer: "A2." }
]} />
```

## Best Practices

1. **Images**: Always use Cloudinary URLs with transformations (`f_auto,q_auto`)
2. **Links**: Use Next.js `Link` component for internal navigation
3. **Metadata**: Update page metadata for each new route
4. **TypeScript**: Maintain strict mode - no `any` types
5. **Components**: Keep components focused and reusable
6. **Content**: Use `.tsx` files for JSX, `.ts` for utilities

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Performance Metrics (Target)

- Lighthouse Performance: 90+
- Lighthouse SEO: 100
- Core Web Vitals: All green
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

## License

Proprietary - All rights reserved

## Support

For issues or questions, contact the development team.
