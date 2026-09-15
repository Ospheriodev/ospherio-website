/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export: every page is pre-rendered for fast, crawlable SEO.
  output: "export",
  // GitHub Pages serves a project repo from /<repo>/. next/link, next/image and
  // the _next/ asset URLs all pick this up. Keep in sync with `url` in
  // src/lib/site.ts, which has to carry the same subpath.
  basePath: "/ospherio-website",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
