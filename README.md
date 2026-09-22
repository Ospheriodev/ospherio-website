# Ospherio website

Marketing site for Ospherio, built with Next.js (App Router) as a fully static, SEO-friendly export.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site is written to ./out
```

## Before going live

Replace the placeholders:

- `src/lib/site.ts`: domain (`url`), contact `email`, `bookingUrl` (e.g. Calendly), social links and the team.
  Project pages that still contain `[placeholders]` are set to `noindex` and left out of the sitemap automatically.

## Deploy

- **Vercel (recommended):** import the GitHub repo. No settings needed.
- **Netlify / Cloudflare Pages:** build command `npm run build`, publish directory `out`.
- **Any static host:** run `npm run build` and upload the `out` folder.

After deploying, add the domain in Google Search Console and submit `/sitemap.xml`.

## Structure

- `src/app/`: pages (home, services, service detail, work, project detail, about, contact), `sitemap.ts`, `robots.ts`
- `src/lib/`: site settings and the content for services and projects (edit copy here)
- `src/components/`: header, footer, logo, shared sections
- `src/app/globals.css`: brand colours, layout and all animations (CSS only; switched off for users who prefer reduced motion)

## SEO built in

- Unique title, meta description and canonical URL on every page
- Organization, WebSite, Service, FAQ, BreadcrumbList and CreativeWork structured data
- `sitemap.xml` and `robots.txt` generated at build time
- Static HTML, self-hosted fonts, no layout-shifting web fonts from third parties
