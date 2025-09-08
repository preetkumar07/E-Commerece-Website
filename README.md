## ShopHub — Modern E‑commerce SPA (React + Vite + Tailwind)

World‑class, responsive, accessible e‑commerce storefront built with React + TypeScript, Vite, Tailwind, Zustand, and shadcn/ui. Includes filters, search, wishlist, cart/checkout flow, About/Contact/Categories pages, pagination, SEO meta, and Vercel‑ready SPA routing.

### Preview

![Hero](src/assets/hero-banner.jpg)

<div align="center">

<img alt="Product UI" src="src/assets/products/handbag-leather.jpg" width="300"/>
<img alt="Product UI" src="src/assets/products/headphones-wireless.jpg" width="300"/>
<img alt="Product UI" src="src/assets/products/watch-luxury.jpg" width="300"/>

</div>

---

### Table of contents
- Features
- Tech stack
- Project structure
- Getting started
- Development scripts
- Environment + configuration
- Accessibility and performance
- Pages and routes
- Data model
- Screenshots
- Deployment (Vercel)
- QA checklist
- Roadmap

---

### Features
- Accessible, responsive UI (mobile‑first, WCAG mindful)
- Product catalog with filters, search, sort, pagination
- Product detail with gallery, badges, features/specs, related products
- Cart with quantity management and totals (Zustand persisted)
- Wishlist toggle
- About with timeline, testimonials, team
- Categories overview linking to filtered Shop
- Contact with validated form, map, FAQ accordion
- SEO titles/meta per page
- Lazy‑loaded images and performant Vite builds
- Vercel SPA rewrites for deep links

### Tech stack
- React 18 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui + lucide‑react icons
- Zustand (state + persistence)
- TanStack Query provider (future‑ready)

### Project structure
```
src/
  components/
    layout/            # Header, Footer
    products/          # ProductCard, ProductFilters
    sections/          # HeroSection, FeaturedProducts
    ui/                # shadcn/ui primitives
  data/
    mockData.ts        # seed products
    additionalProducts.ts # extended catalog (Unsplash images)
  pages/
    Index.tsx          # Home
    Shop.tsx           # Catalog
    Product.tsx        # PDP
    Categories.tsx     # Category overview
    About.tsx          # Company page
    Contact.tsx        # Contact form + map + FAQ
  store/
    useStore.ts        # Zustand state & selectors
```

### Getting started
```
npm install
npm run dev
```
Open http://localhost:5173

### Development scripts
```
npm run dev        # Vite dev server
npm run build      # Production build (dist/)
npm run preview    # Preview production build
```

### Environment + configuration
- No env vars required. SPA uses local mock data + Unsplash CDN images for additional products.
- SPA routing config for Vercel is at `public/vercel.json` (rewrites all to `/index.html`).

### Accessibility and performance
- Alt text on all images; keyboard‑focusable controls; proper labels
- Sufficient color contrast via theme tokens
- Semantic headings and ARIA on interactive components
- Images use `loading="lazy"` and `decoding="async"`
- Vite production builds minify and optimize assets

### Pages and routes
- `/` Home (hero, featured)
- `/shop` Catalog (filters, search, sort, pagination)
- `/product/:id` Product detail (gallery, specs, related)
- `/categories` Category overview
- `/about` Company (timeline, testimonials, team)
- `/contact` Contact form (validated) + map + FAQ

### Data model (excerpt)
```ts
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  rating: number;
  reviews: number;
  description: string;
  category: string;
  brand: string;
  inStock: boolean;
  stockCount: number;
  isNew?: boolean;
  isSale?: boolean;
  features?: string[];
  specifications?: Record<string, string>;
}
```

### Screenshots
- Hero: `src/assets/hero-banner.jpg`
- Product assets: `src/assets/products/*`
- Additional catalog uses Unsplash CDN (see `src/data/additionalProducts.ts`)

### Deployment (Vercel)
1) Push to GitHub
2) Vercel → New Project → Import repository
3) Framework preset: Vite
4) Build command: `npm run build`
5) Output directory: `dist`
6) SPA rewrite config picked from `public/vercel.json`

Post‑deploy checks:
- Visit `/`, `/shop`, `/product/101`, `/about`, `/contact`, `/categories`
- Verify images load and pagination works

### QA checklist
- Header/Footer render across all pages
- SEO titles/meta applied on Home, Shop, Product
- Catalog: search, category filter, price range slider, sort, pagination
- PDP: image gallery, wishlist toggle, add to cart, tabs
- Cart: add/update/remove; totals correct
- About: timeline, testimonials carousel, team avatars
- Categories: visible thumbnails and navigation to filtered Shop
- Contact: client‑validated form, Map iframe, FAQ accordion
- Accessibility: keyboard nav OK; focus styles visible
- Performance: images lazy‑load; Lighthouse 90+ targets

### Roadmap
- Dark mode toggle and theme tokens
- Lightbox on product images
- Analytics (Vercel Analytics or Plausible)
- Payment integration (Stripe) and real auth (Supabase)
