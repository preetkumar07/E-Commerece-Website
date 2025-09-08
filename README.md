# ShopHub — Modern E-commerce SPA (React + Vite + Tailwind)

Fully responsive, accessible e-commerce storefront built with React + TypeScript, Vite, Tailwind, Zustand, and shadcn/ui.  
Includes filters, search, wishlist, cart/checkout flow, About/Contact/Categories pages, pagination, SEO meta, and Vercel-ready SPA routing.

---

## 📑 Table of Contents
- [Features](#-features)
- [Tech stack](#-tech-stack)
- [Project structure](#-project-structure)
- [Getting started](#-getting-started)
- [Development scripts](#-development-scripts)
- [Environment + configuration](#-environment--configuration)
- [Accessibility and performance](#-accessibility-and-performance)
- [Pages and routes](#-pages-and-routes)
- [Data model](#-data-model)
- [Deployment](#-deployment-vercel)
- [QA checklist](#-qa-checklist)
- [Roadmap](#-roadmap)

---

## 🚀 Features
- Accessible, responsive UI (mobile-first, WCAG mindful)
- Product catalog with filters, search, sort, pagination
- Product detail with gallery, badges, features/specs, related products
- Cart with quantity management and totals (Zustand persisted)
- Wishlist toggle
- About with timeline, testimonials, team
- Categories overview linking to filtered Shop
- Contact with validated form, map, FAQ accordion
- SEO titles/meta per page
- Lazy-loaded images and performant Vite builds
- Vercel SPA rewrites for deep links

---

## 🛠️ Tech stack
- React 18 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui + lucide-react icons
- Zustand (state + persistence)
- TanStack Query provider (future-ready)

---

## 📂 Project structure

src/
components/
layout/ # Header, Footer
products/ # ProductCard, ProductFilters
sections/ # HeroSection, FeaturedProducts
ui/ # shadcn/ui primitives
data/
mockData.ts # seed products
additionalProducts.ts # extended catalog
pages/
Index.tsx # Home
Shop.tsx # Catalog
Product.tsx # PDP
Categories.tsx # Category overview
About.tsx # Company page
Contact.tsx # Contact form + map + FAQ
store/
useStore.ts # Zustand state & selectors
```bash
yaml
Copy code
---

## 🏁 Getting started

npm install
npm run dev
```
Then open 👉 http://localhost:5173

## 📜 Development scripts
```bash
Copy code
npm run dev        # Vite dev server
npm run build      # Production build (dist/)
npm run preview    # Preview production build
```
## ⚙️ Environment + configuration
- No env vars required.

- SPA uses local mock data.

- SPA routing config for Vercel is at public/vercel.json (rewrites all to /index.html).

## ♿ Accessibility and performance
- Alt text on all images; keyboard-focusable controls; proper labels

- Sufficient color contrast via theme tokens

- Semantic headings and ARIA on interactive components

- Images use loading="lazy" and decoding="async"

- Vite production builds minify and optimize assets

 ## 🗺 Pages and routes
- / Home (hero, featured)

- /shop Catalog (filters, search, sort, pagination)

- /product/:id Product detail (gallery, specs, related)

- /categories Category overview

- /about Company (timeline, testimonials, team)

- /contact Contact form (validated) + map + FAQ

## 📊 Data model (excerpt)
```bash
ts
Copy code
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


## ✅ QA checklist
- Header/Footer render across all pages

- SEO titles/meta applied on Home, Shop, Product

Catalog: search, category filter, price range slider, sort, pagination

- PDP: image gallery, wishlist toggle, add to cart, tabs

- Cart: add/update/remove; totals correct

- About: timeline, testimonials carousel, team avatars

- Categories: visible thumbnails and navigation to filtered Shop

- Contact: client-validated form, Map iframe, FAQ accordion

- Accessibility: keyboard nav OK; focus styles visible

- Performance: Lighthouse 90+ targets

## 🛤 Roadmap
- Dark mode toggle and theme tokens

- Lightbox on product images

- Analytics (Vercel Analytics or Plausible)

- Payment integration (Stripe) and real auth (Supabase)
