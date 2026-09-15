import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="section grid-bg">
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 28, textAlign: "center" }}>
        <LogoMark size={110} animated />
        <h1 className="h1-page" style={{ maxWidth: "none" }}>404 — page not found</h1>
        <p className="lead">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link href="/" className="btn btn-primary">Back to home</Link>
      </div>
    </section>
  );
}
