# The Local Place - Astro Website

Modern, SEO-optimized website for The Local Place pottery and candle studio in Centerville, TN.

Built with [Astro](https://astro.build) for fast, static site generation.

## Project Structure

```
astro-site/
├── src/
│   ├── components/        # Reusable Astro components
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   ├── ServiceCard.astro
│   │   └── PillarCard.astro
│   ├── layouts/           # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── ServiceLayout.astro
│   ├── pages/             # Route pages (auto-generates URLs)
│   │   ├── index.astro (Home)
│   │   ├── pottery-store.astro
│   │   ├── candle-store.astro
│   │   ├── art-studio.astro
│   │   ├── pottery-classes.astro
│   │   ├── faq.astro
│   │   ├── pottery-store/
│   │   │   ├── paint-your-own-pottery-session.astro
│   │   │   └── ... (other service pages)
│   │   ├── candle-store/
│   │   │   └── ... (service pages)
│   │   ├── art-studio/
│   │   │   └── ... (service pages)
│   │   └── pottery-classes/
│   │       └── ... (service pages)
│   └── styles/           # Global CSS
│       └── global.css
├── public/               # Static files (images, fonts, etc.)
├── astro.config.mjs      # Astro configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## Features

- ✅ **Static Site Generation (SSG)** - Fast, secure, SEO-friendly
- ✅ **Component-Based Architecture** - Reusable, maintainable code
- ✅ **SEO Optimized** - Meta tags, schema markup, semantic HTML
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Fast Performance** - Optimized for Core Web Vitals
- ✅ **Type-Safe** - TypeScript support with strict config
- ✅ **CSS Scoping** - Component-scoped styles, no CSS conflicts
- ✅ **Automatic Routing** - File-based routing system

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

1. Navigate to the project directory:
```bash
cd astro-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:3000`

## Development Commands

- `npm run dev` - Start development server (hot reload)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## File-Based Routing

Astro uses file-based routing. Files in `src/pages/` automatically become routes:

```
src/pages/index.astro          → /
src/pages/pottery-store.astro  → /pottery-store
src/pages/faq.astro            → /faq
src/pages/pottery-store/paint-your-own-pottery-session.astro
                               → /pottery-store/paint-your-own-pottery-session
```

## Creating New Pages

### Service Page Template

1. Create new file: `src/pages/[category]/[service-name].astro`

2. Use ServiceLayout:
```astro
---
import ServiceLayout from '@layouts/ServiceLayout.astro';
---

<ServiceLayout
  title="Service Name"
  description="Service description"
  price="$XX-XX"
  duration="X hours"
  location="Centerville, TN"
  keywords="pottery, candle, service keywords"
>
  <section slot="overview">
    <!-- Service content here -->
  </section>

  <section slot="testimonials">
    <!-- Testimonials here -->
  </section>

  <section slot="related">
    <!-- Related services here -->
  </section>
</ServiceLayout>
```

### Category Page Template

1. Create new file: `src/pages/[category-name].astro`

2. Use BaseLayout with ServiceCard components:
```astro
---
import BaseLayout from '@layouts/BaseLayout.astro';
import ServiceCard from '@components/ServiceCard.astro';

const services = [
  {
    title: 'Service Name',
    description: 'Service description',
    price: '$XX-XX',
    href: '/category/service',
    bgClass: 'pottery-bg'
  }
];
---

<BaseLayout title="Category Name" description="...">
  <!-- Your content here -->
  <ServiceCard {...services[0]} />
</BaseLayout>
```

## SEO Optimization

All pages use the BaseLayout which includes:

- Dynamic title tags
- Meta descriptions
- Open Graph tags (for social sharing)
- Twitter cards
- Canonical URLs
- Breadcrumb schema

### Example:
```astro
<BaseLayout
  title="Service Name"
  description="Service description for search results"
  keywords="pottery, candle, service keywords"
  ogImage="/og-image.jpg"
>
  <!-- Page content -->
</BaseLayout>
```

## Adding Images

1. Place images in `public/` folder
2. Reference in HTML:
```html
<img src="/image-name.jpg" alt="description">
```

3. Or use in CSS:
```css
.pottery-bg {
  background-image: url('/image-name.jpg');
}
```

## Customization

### Colors
Edit variables in `src/styles/global.css`:
```css
:root {
  --brown: #8b6f47;
  --red: #ff6b6b;
  --cream: #faf6f1;
  /* ... etc */
}
```

### Fonts
Google Fonts are imported in BaseLayout. To change:

1. Update link in `src/layouts/BaseLayout.astro`
2. Update font-family in `src/styles/global.css`

### Navigation
Edit links in `src/components/Navigation.astro`

### Footer
Edit content in `src/components/Footer.astro`

## Deployment

### Build for Production
```bash
npm run build
```

This creates a `dist/` folder with static HTML files ready to deploy.

### Deployment Options

**Vercel** (Recommended)
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**Traditional Hosting**
1. Run `npm run build`
2. Upload `dist/` folder to your web host
3. Set web root to `dist/` folder

## Performance

Astro provides excellent performance by default:

- ✅ Zero JavaScript by default (opt-in only)
- ✅ CSS automatically scoped to components
- ✅ Optimized image handling
- ✅ Static site generation (no server needed)
- ✅ Fast time to first byte (TTFB)

## SEO

All pages include:
- Semantic HTML
- Proper heading hierarchy (H1, H2, H3)
- Meta descriptions
- Schema markup
- Responsive design
- Fast loading speed

Search Console integration:
1. Verify site: Add verification meta tag from Google
2. Submit sitemap: `dist/sitemap.xml`
3. Monitor performance in Google Search Console

## Troubleshooting

### Development server won't start
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Build fails
```bash
# Check for syntax errors
npm run build

# View detailed error messages
npm run build -- --verbose
```

### Assets not loading in production
- Ensure all image paths are correct
- Use absolute paths: `/image.jpg` not `image.jpg`
- Check that public folder is deployed

## Best Practices

1. **Component Reusability** - Create components for repeated UI patterns
2. **Naming Conventions** - Use descriptive names for pages and components
3. **Meta Tags** - Include descriptions for all pages
4. **Images** - Use descriptive alt text for accessibility
5. **Internal Links** - Link between related pages for better UX
6. **Mobile First** - Test on mobile devices regularly
7. **Performance** - Keep component code minimal
8. **Accessibility** - Use semantic HTML, proper heading hierarchy

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Astro Integration Guides](https://docs.astro.build/en/guides/integrations-guide/)
- [File-Based Routing](https://docs.astro.build/en/core-concepts/routing/)
- [Components](https://docs.astro.build/en/basics/astro-components/)
- [Layouts](https://docs.astro.build/en/basics/layouts/)

## Analytics

Add analytics tracking:

### Google Analytics
```astro
<!-- In BaseLayout.astro -->
<script define:vars={{gtagId: "G-XXXXXXX"}}>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', gtagId);
</script>
```

## Support

For issues or questions:
- 📞 Call: (931) XXX-XXXX
- 📧 Email: info@thelocalplace.com
- 📍 Visit: 111 South Public Square, Upstairs, Centerville, TN 37033

---

Built with ❤️ for The Local Place, Centerville, TN
