import { Icon } from "./Icon";
import { processSteps } from "@/lib/process";

/**
 * "How we work": a simple four-step timeline. When it scrolls into view the
 * line fills and each step lights up in turn (CSS only).
 */
export function Process() {
  return (
    <div className="process reveal" style={{ ["--steps" as string]: processSteps.length }}>
      <div className="process-line" aria-hidden="true">
        <span className="process-fill" />
        <i className="process-spark" />
      </div>
      <ol className="process-steps">
        {processSteps.map((s, i) => (
          <li key={s.title} className="p-step" style={{ ["--i" as string]: i }}>
            <span className="p-node" aria-hidden="true">
              <Icon name={s.icon} size={24} />
            </span>
            <div className="p-body">
              <span className="p-num">Step {String(i + 1).padStart(2, "0")}</span>
              <h3 className="p-title">{s.title}</h3>
              <p className="p-text">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
