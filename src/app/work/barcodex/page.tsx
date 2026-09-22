import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/site";

/**
 * BarcodeX was renamed Goodshaul. This slug already shipped in the sitemap, so
 * the URL is kept alive and sent to the new one — a static export cannot return
 * a 301. Safe to delete once the old URL stops getting traffic.
 */
const TARGET = "/work/goodshaul/";

export const metadata: Metadata = {
  title: "BarcodeX is now Goodshaul",
  description: "BarcodeX has been renamed Goodshaul, Ospherio's complete AI warehouse solution.",
  alternates: { canonical: TARGET },
  robots: { index: false, follow: true },
};

export default function BarcodeXRenamed() {
  return (
    <>
      {/* React hoists this into <head>; it is what actually performs the redirect. */}
      <meta httpEquiv="refresh" content={`0; url=${absoluteUrl(TARGET)}`} />
      <section className="section">
        <div className="container stack-gap">
          <h1 className="h1-page">BarcodeX is now Goodshaul</h1>
          <p className="lead">
            Taking you to the project now. If nothing happens,{" "}
            <Link href={TARGET} className="link">open Goodshaul</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
