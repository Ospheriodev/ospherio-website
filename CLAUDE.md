# Ospherio website — project context

Context carried over from the Cowork chat where this site was designed and built (Sept 2026).

## Company
- Ospherio is a 3-person tech startup offering software development and IT services.
- Target market for SEO: **global / remote clients** (US, UK, EU outsourcing).
- Portfolio projects: BarcodeX (stock/warehouse management), Voice Khata (voice-based ledger app), Warehouse Management System, Bakerify, RAG Reporting System.
- Note: a UK company, BarcodeX Limited, uses the same name, which may affect UK search visibility for BarcodeX.

## Brand
- Logo: `< ı o >` code-bracket icon (white brackets and bar, cyan ring) + wordmark "Ospherıo" with a dotless ı and a cyan final "o", on dark navy.
- The logo in `src/components/Logo.tsx` and `public/logo.svg` is a hand-redrawn approximation. Replace it with the official SVG when available.
- Colours: navy `#0A1230`, deep navy `#070D24`, cards `#0F1840`, text `#EAF0FF`, muted `#B7C2E2`, cyan accent `#22D3EE`.
- Fonts (self-hosted via @fontsource-variable): Sora (headings), Manrope (body), JetBrains Mono (labels).
- The client asked for a "catchy, animated" site.
- Design reference (canvas): https://claude.ai/artifact/NtK6NtFrpYi77tq5DnbbLM

## Tech
- Next.js 16 App Router + TypeScript, static export (`output: "export"`, `trailingSlash: true`) → `out/`.
- No backend. Contact uses email and an optional booking link (no form yet).
- Animations are CSS only (`src/app/globals.css`), plus one IntersectionObserver (`src/components/Reveal.tsx`) for scroll reveals.
  - Content stays visible without JS: the hidden state only applies once `html.js-reveal` is set.
  - All motion is disabled for `prefers-reduced-motion`.
- Build: `npm install && npm run build`. Dev: `npm run dev`.
- Deploy target: Vercel (import repo) or any static host serving `out/`.

## Where content lives
- `src/lib/site.ts`: domain, email, booking link, social links, team, tech list.
- `src/lib/services.ts`: the 8 services (slug, copy, deliverables, stack, FAQs).
- `src/lib/projects.ts`: the 5 projects.
- Pages: `/`, `/services/`, `/services/[slug]/`, `/work/`, `/work/[slug]/`, `/about/`, `/contact/`, 404, `sitemap.ts`, `robots.ts`.

## SEO rules (keep these)
- Every page: one H1, unique title + meta description, canonical URL.
- JSON-LD: Organization + WebSite (layout), Service + FAQPage (service pages), BreadcrumbList, CreativeWork (projects).
- Project pages whose text still contains `[bracketed placeholders]` are auto-`noindex` and left out of the sitemap.
- Keep pages statically rendered and animations CSS-only for Core Web Vitals.

## Still to do
- [ ] Real domain in `site.ts` (placeholder `https://www.ospherio.com`).
- [ ] Real contact email (placeholder `hello@ospherio.com`) and booking link.
- [ ] Social links (LinkedIn, GitHub, Clutch).
- [ ] Team names, roles, photos.
- [ ] Descriptions for Warehouse Management System, Bakerify, RAG Reporting System; one more BarcodeX feature.
- [ ] Official logo SVG, and an Open Graph share image.
- [ ] Insights/blog section (only once there are real posts).
- [ ] Contact form (needs a form service or API route, which requires moving off static export or using a third-party endpoint).
- [ ] After deploy: Google Search Console + submit `/sitemap.xml`.

## Working style
- Don't invent facts (prices, stats, testimonials, client names). Use visible `[placeholders]` instead.
- Keep copy specific to Ospherio; no generic marketing filler.
