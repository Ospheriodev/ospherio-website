import Link from "next/link";
import { Icon } from "./Icon";
import { ProjectMedia } from "./Blocks";
import type { Project } from "@/lib/projects";

/**
 * Products as full-width alternating rows rather than a card grid: each one
 * gets room for its artwork, its pitch and what it actually does.
 *
 * The title link is stretched over the whole row, so the row is clickable
 * without adding a second link to the accessibility tree. `.sc-media` sits
 * above that overlay so video controls stay usable.
 */
export function Showcase({ items, level: H = "h3" }: { items: Project[]; level?: "h2" | "h3" }) {
  return (
    <div className="showcase">
      {items.map((p, i) => (
        <article key={p.slug} className="sc reveal" style={{ ["--d" as string]: `${i * 80}ms` }}>
          <div className="sc-media">
            <ProjectMedia p={p} />
          </div>

          <div className="sc-body">
            <span className="kicker">{p.category}</span>
            <H className="sc-title">
              <Link href={`/work/${p.slug}/`} className="sc-link">
                {p.name}
              </Link>
            </H>
            <p className="sc-sum">{p.summary}</p>
            <ul className="sc-feats">
              {p.features.slice(0, 3).map((f) => (
                <li key={f}>
                  <Icon name="check" size={16} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <span className="sc-cta">
              {p.video ? "Watch the demo" : "View project"} <Icon name="arrow" size={16} />
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
