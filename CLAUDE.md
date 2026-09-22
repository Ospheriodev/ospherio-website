# Ospherio website — project context

## Company
- Ospherio is a software development and IT services company, presented as an all-in-one tech partner.
- Don't add team, headcount or "small team" content to the site.
- Target market for SEO: **global / remote clients** (US, UK, EU outsourcing).
- Portfolio projects: Goodshaul (AI warehouse solution), VoiceLedger (voice-based ledger app), ReportingGPT (RAG reporting), Bakerify (bakery e-commerce).

## Brand
- Logo: `< ı o >` code-bracket icon (white brackets and bar, cyan ring) + wordmark "Ospherıo" with a dotless ı and a cyan final "o", on dark navy.
- Header/footer use `public/brand/logo-horizontal-white.svg` (imported so it respects `basePath`); `src/components/Logo.tsx` is the animated icon. Replace with the official SVGs when available.
- Colours: navy `#0A1230`, deep navy `#070D24`, cards `#0F1840`, text `#EAF0FF`, muted `#B7C2E2`, cyan accent `#22D3EE`.
- Fonts (self-hosted via @fontsource-variable): Sora (headings), Manrope (body), JetBrains Mono (labels).
- The site is meant to feel animated and lively, not static.
- Design reference (canvas): https://claude.ai/artifact/NtK6NtFrpYi77tq5DnbbLM

## Tech
- Next.js 16 App Router + TypeScript, static export (`output: "export"`, `trailingSlash: true`) → `out/`.
- No backend. Contact is email, an optional booking link, and an optional contact form
  posting to Web3Forms — the form only renders once `site.formAccessKey` is set, and
  `contactHref` points CTAs at `/contact/` instead of `mailto:` once it is.
- Animations are CSS only (`src/app/globals.css`), plus one IntersectionObserver (`src/components/Reveal.tsx`) for scroll reveals.
  - Content stays visible without JS: the hidden state only applies once `html.js-reveal` is set.
  - All motion is disabled for `prefers-reduced-motion`.
- Build: `npm install && npm run build`. Dev: `npm run dev`.

## Deployment
- Cloudflare Pages, building from `main`. Build command `npm run build`, output directory `out`,
  `NODE_VERSION=22`. There is no GitHub Actions workflow — Cloudflare builds on push.
- Served from the domain root, so there is **no `basePath`**. If the site ever moves back under a
  subpath, `basePath` in `next.config.mjs` and `url` in `src/lib/site.ts` must match each other.
- `basePath` and `pathTo()` in `site.ts` derive from `site.url`, so changing that one value moves
  canonicals, the sitemap, `robots.txt`, every JSON-LD `@id`, the OG image and raw asset hrefs.
- `absoluteUrl()` joins onto the full base on purpose: `new URL("/about/", base)` resolves against
  the origin alone and would drop any subpath. Use it instead of bare `new URL(...)`.
- `public/_redirects` holds real 301s (Cloudflare can do what GitHub Pages could not), including the
  renamed project slugs. `public/_headers` sets caching and security headers.

## Where content lives
- `src/lib/site.ts`: domain, email, booking link, social links, tech list.
- `src/lib/process.ts`: the four "How we work" steps (`components/Process.tsx`).
- `src/components/WhyUs.tsx`: the "all-in-one tech partner" section (home and About).
- `src/lib/services.ts`: the 8 services (slug, copy, deliverables, stack, FAQs).
- `src/lib/projects.ts`: the 4 projects. `components/Showcase.tsx` renders them as
  alternating rows on the home page and `/work/`; `ProjectMedia` in `Blocks.tsx` shows a
  project's demo clip when it has one, otherwise the CSS motif from `ProjectVisual`.
- `public/media/`: demo clips and their posters. A clip needs `videoPoster`, plus
  `videoDuration`/`videoPublished` for the VideoObject JSON-LD; it is `preload="none"`
  so it never costs a page load.
- Renamed projects keep their old URL alive with a 301 in `public/_redirects`.
- Pages: `/`, `/services/`, `/services/[slug]/`, `/work/`, `/work/[slug]/`, `/about/`, `/contact/`, 404, `sitemap.ts`, `robots.ts`.

## SEO rules (keep these)
- Every page: one H1, unique title + meta description, canonical URL.
- JSON-LD: Organization + WebSite (layout), Service + FAQPage (service pages), BreadcrumbList,
  CreativeWork (projects), VideoObject (projects with a demo clip).
- A page that declares its own `openGraph` REPLACES the root one rather than merging, so every
  such page must spread in `ogImage` from `site.ts` or it ships with no share image.
- Project pages whose text still contains `[bracketed placeholders]` are auto-`noindex` and left out of the sitemap.
- Keep pages statically rendered and animations CSS-only for Core Web Vitals.

## Content placeholders
Values still to be filled in, all marked in the source and safe to search for:
- `site.ts`: booking link, social links, and `formAccessKey` for the contact form.
- Assets: official logo SVG (`public/og.png` is generated from the current brand).

## Working style
- Don't invent facts (prices, stats, testimonials, client names). Use visible `[placeholders]` instead.
- Keep copy specific to Ospherio; no generic marketing filler.
