# Cannabis Clubs Spain - Quick Start Guide

## Project Created: 2026-03-09

Your complete Next.js 16 scaffold is ready at:
```
/sessions/wizardly-magical-hopper/cannabis-clubs-spain/
```

## What's Included

✓ **Full Next.js 16 Setup**
- TypeScript strict mode
- Tailwind CSS 4
- App Router (no Pages directory)
- ESLint configuration
- All dependencies installed

✓ **12 Pre-Configured Pages**
- Homepage with city grid + guides
- 6 city guides (Barcelona, Madrid, Valencia, Málaga, Ibiza, Seville)
- 5 educational guides
- Robots.txt + Sitemap.xml (auto-generated)

✓ **7 Reusable Components**
- Header (sticky, with dropdowns)
- Footer (4-column layout)
- ArticleLayout (hero + breadcrumbs)
- CityCard (responsive grid)
- CTA (3 variants)
- FAQSection (accordion)
- SchemaMarkup (JSON-LD utilities)

✓ **Design System**
- Forest green + gold color scheme
- Dark mode support
- Mobile-first responsive
- CSS variables for easy theming
- Fraunces + Inter typography

✓ **SEO-Ready**
- Structured data (Article, FAQ, Breadcrumb, Organization)
- OpenGraph tags
- Twitter Card integration
- Dynamic sitemap + robots.txt
- Optimized metadata for all routes

## Start Development

```bash
cd /sessions/wizardly-magical-hopper/cannabis-clubs-spain

# Install (if needed)
npm install

# Development server
npm run dev
# Opens http://localhost:3000
```

## Build for Production

```bash
npm run build   # Creates optimized static site
npm start       # Runs production server
npm run lint    # Check code quality
```

## File Guide

**Key Files to Edit:**

1. **Update Logo/Branding**
   - `src/components/Header.tsx` - Logo emoji + text
   - `src/app/layout.tsx` - Site title + description

2. **Update Colors**
   - `src/app/globals.css` - CSS variables (--color-forest, --color-gold, etc)

3. **Add Content**
   - Each page file: `src/app/[route]/page.tsx`
   - Update metadata (title, description)
   - Add article content inside placeholder divs
   - Use `<ArticleLayout>` component for consistent styling

4. **Add Images**
   - Update Cloudinary URLs in:
     - `src/components/CityCard.tsx` (placeholder images)
     - Homepage image references
     - Hero images for each page

5. **Update Links**
   - External links in `src/components/Footer.tsx`
   - WeedMadrid invitation link in `src/components/CTA.tsx`

## Deployment (Vercel)

```bash
# Connect to GitHub first, then:
vercel deploy

# Or integrate with Vercel dashboard and push to git
git push origin main
```

All pages are pre-rendered as static HTML for instant CDN delivery.

## Page Metadata

Each page has SEO-optimized metadata. Update here:

```tsx
export const metadata: Metadata = {
  title: "Your SEO Title (60 chars)",
  description: "Your meta description (160 chars)",
};
```

## Using Components

### ArticleLayout (for guides/articles)
```tsx
import ArticleLayout from "@/components/ArticleLayout";

export default function Page() {
  return (
    <ArticleLayout
      title="Page Title"
      description="Short summary"
      heroImage="https://res.cloudinary.com/..."
      heroAlt="Alt text"
      breadcrumb={[
        { name: "Guides", href: "/guides" },
        { name: "Current Page", href: "/current-page" },
      ]}
      ctaVariant="guide"
    >
      <h2>Your Heading</h2>
      <p>Your content here</p>
    </ArticleLayout>
  );
}
```

### CTA Component
```tsx
import CTA from "@/components/CTA";

// Three variants:
<CTA variant="join" />           {/* Simple button link */}
<CTA variant="guide" />          {/* Informational box */}
<CTA variant="invitation" />     {/* External invitation link */}
```

### FAQSection
```tsx
import FAQSection from "@/components/FAQSection";

const faqs = [
  { question: "Q1?", answer: "A1." },
  { question: "Q2?", answer: "A2." },
];

<FAQSection faqs={faqs} title="Common Questions" />
```

## Customization Checklist

- [ ] Update site title in `layout.tsx`
- [ ] Update logo in Header component
- [ ] Update footer links (WeedMadrid, etc)
- [ ] Review/adjust color scheme in `globals.css`
- [ ] Add real images to Cloudinary
- [ ] Write content for each page
- [ ] Add internal cross-links
- [ ] Test on mobile
- [ ] Run Lighthouse audit
- [ ] Deploy to Vercel

## Important Notes

1. **Images**: All image URLs use Cloudinary placeholders. Replace with real URLs:
   ```
   https://res.cloudinary.com/YOUR_CLOUD/image/upload/f_auto,q_auto,w_600,h_450,c_fill/path-to-image
   ```

2. **TypeScript**: Strict mode enabled. No `any` types allowed.

3. **Mobile**: 44px minimum touch targets. Responsive tested.

4. **Dark Mode**: Automatically supported via CSS variables. No extra work needed.

5. **SEO**: All schema markup is ready. Just fill content.

## Troubleshooting

**Build fails with font errors?**
- Already fixed - fonts are loaded via `<link>` in head

**Images not showing?**
- Update Cloudinary URLs in component image strings
- Ensure remote pattern is whitelisted in `next.config.ts`

**TypeScript errors?**
- Run `npm run build` to see all type errors
- Check tsconfig.json strict settings

**Components not found?**
- Verify import paths use `@/components/`
- Check file names match exactly

## What's Next?

1. **Write Content**
   - Article content for each page
   - Club information (names, neighborhoods, prices)
   - How to join process

2. **Add Images**
   - Hero images for each city (1200x600 recommended)
   - City skylines/atmospheres
   - Club interiors (if available)

3. **SEO Optimization**
   - Target keywords for each page
   - Internal linking strategy
   - Schema markup review

4. **Analytics**
   - Vercel Web Analytics (1-click setup)
   - Google Analytics 4 (optional)
   - Conversion tracking

5. **Testing**
   - Lighthouse audits
   - Mobile responsiveness
   - Cross-browser testing

## Stack Overview

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5 (strict)
- **Styling**: Tailwind CSS 4 + CSS variables
- **Build**: Turbopack (ultra-fast)
- **Deployment**: Static optimization (SSG)
- **Performance**: 95+ Lighthouse score target

## Support Files

- `README.md` - Comprehensive documentation
- `build-verification.txt` - Build report
- This file - Quick start guide

---

**Project Status**: Ready for content development and deployment

**Build Time**: ~1.4 seconds (Turbopack)

**Last Verified**: 2026-03-09
