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
- No backend. Contact uses email and an optional booking link (no form yet).
- Animations are CSS only (`src/app/globals.css`), plus one IntersectionObserver (`src/components/Reveal.tsx`) for scroll reveals.
  - Content stays visible without JS: the hidden state only applies once `html.js-reveal` is set.
  - All motion is disabled for `prefers-reduced-motion`.
- Build: `npm install && npm run build`. Dev: `npm run dev`.

## Deployment
- GitHub Pages, via `.github/workflows/deploy-pages.yml` on every push to `main`.
- Pages serves this project repo from a subpath, so `basePath` in `next.config.mjs` and
  `url` in `src/lib/site.ts` both carry `/ospherio-website` and **must stay in sync**.
- Dev therefore runs at `http://localhost:3000/ospherio-website/`, not the bare root.
- Moving to a custom domain means dropping `basePath` and the subpath in `site.url`.
- `absoluteUrl()` in `site.ts` joins onto the full base on purpose: `new URL("/about/", base)`
  resolves against the origin alone and would silently drop the subpath from the sitemap,
  `robots.txt` and every JSON-LD `@id`. Use it instead of bare `new URL(...)`.

## Where content lives
- `src/lib/site.ts`: domain, email, booking link, social links, tech list.
- `src/lib/process.ts`: the four "How we work" steps (`components/Process.tsx`).
- `src/components/WhyUs.tsx`: the "all-in-one tech partner" section (home and About).
- `src/lib/services.ts`: the 8 services (slug, copy, deliverables, stack, FAQs).
- `src/lib/projects.ts`: the 4 projects.
- Renamed projects keep their old URL alive via a `noindex` stub under
  `src/app/work/<old-slug>/` using `components/RenamedProject.tsx`, because a
  static export cannot return a 301. Delete a stub once its URL goes quiet.
- Pages: `/`, `/services/`, `/services/[slug]/`, `/work/`, `/work/[slug]/`, `/about/`, `/contact/`, 404, `sitemap.ts`, `robots.ts`.

## SEO rules (keep these)
- Every page: one H1, unique title + meta description, canonical URL.
- JSON-LD: Organization + WebSite (layout), Service + FAQPage (service pages), BreadcrumbList, CreativeWork (projects).
- Project pages whose text still contains `[bracketed placeholders]` are auto-`noindex` and left out of the sitemap.
- Keep pages statically rendered and animations CSS-only for Core Web Vitals.

## Content placeholders
Values still to be filled in, all marked in the source and safe to search for:
- `site.ts`: booking link and social links.
- Assets: official logo SVG and an Open Graph share image.

## Working style
- Don't invent facts (prices, stats, testimonials, client names). Use visible `[placeholders]` instead.
- Keep copy specific to Ospherio; no generic marketing filler.
