/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export: every page is pre-rendered for fast, crawlable SEO.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
