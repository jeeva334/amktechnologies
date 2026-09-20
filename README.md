# Sri Amman Technologies — Website

A multi-page React + Vite + Tailwind CSS + GSAP business website for Sri Amman
Technologies (educational technology & classroom solutions), built from the
brand's existing flyer and reworked into a modern, product-focused B2B site.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build into /dist
npm run preview   # preview the production build
```

## Project structure

```
src/
  components/   Reusable UI (Navbar, Footer, ProductCard, EnquiryForm, ...)
  data/         Single source of truth: company.js, products.js, services.js,
                projects.js, gallery.js
  hooks/        useSEO.js — per-page title/meta/canonical/OG tags
  pages/        One file per route (Home, About, Products, ProductDetail, ...)
  utils/        placeholder.js — inline SVG placeholders used until real
                product/project photography is added
```

## Adding a new product or service

Everything is data-driven. To add a product, add one object to
`src/data/products.js` with a unique `slug` — a page automatically becomes
available at `/products/<slug>` with no extra routing code needed. Services
work the same way via `src/data/services.js`.

## Replacing placeholder images

Product, project and gallery images currently use generated placeholder
graphics (`src/utils/placeholder.js`) so the site never shows a broken image.
Swap them for real photography by putting files in `public/images/` and
pointing the relevant `image` / `gallery` fields at those paths, e.g.
`image: '/images/products/lcd-projector.jpg'`.

## Contact form

`EnquiryForm` (used on the Contact and Enquiry pages) currently only shows a
success state locally — wire the `handleSubmit` function up to an email or
CRM service (e.g. Formspree, EmailJS, or your own serverless function) to
actually deliver enquiries to nklperiasamy@gmail.com.

## Map

`src/data/company.js` contains a `mapEmbedUrl` built from the business
address. Verify/replace it with the exact Google Maps embed link once the
precise location pin is confirmed.
