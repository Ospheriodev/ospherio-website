import type { Metadata, Viewport } from "next";
import "@fontsource-variable/sora";
import "@fontsource-variable/manrope";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/Reveal";
import { JsonLd } from "@/components/Blocks";
import { ogImage, site } from "@/lib/site";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Ospherio — Software Development & IT Services Company",
    template: "%s | Ospherio",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "software development company",
    "IT services",
    "web app development",
    "mobile app development",
    "custom ERP software",
    "inventory management software",
    "AI development services",
    "outsource software development",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: "Ospherio — Software Development & IT Services",
    description: site.description,
    locale: "en_US",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ospherio — Software Development & IT Services",
    description: site.description,
    images: [ogImage.url],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A1230",
  colorScheme: "dark",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.svg`,
  email: site.email,
  description: site.description,
  sameAs: Object.values(site.social).filter(Boolean),
  knowsAbout: services.map((s) => s.name),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  publisher: { "@id": `${site.url}/#organization` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
        <JsonLd data={orgSchema} />
        <JsonLd data={websiteSchema} />
      </body>
    </html>
  );
}
