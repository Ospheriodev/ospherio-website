type MarkProps = { size?: number; animated?: boolean; className?: string };

/** The Ospherio `< ı o >` mark. `animated` builds it in on load. */
export function LogoMark({ size = 40, animated = false, className }: MarkProps) {
  const a = animated ? " mk-anim" : "";
  return (
    <svg
      className={className}
      width={size}
      height={(size * 90) / 120}
      viewBox="0 0 120 90"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path className={"mk mk-l" + a} d="M34 6L8 45l26 39" stroke="#FFFFFF" strokeWidth="10" />
      <path className={"mk mk-r" + a} d="M86 6l26 39-26 39" stroke="#FFFFFF" strokeWidth="10" />
      <path className={"mk mk-bar" + a} d="M50 30v28" stroke="#FFFFFF" strokeWidth="10" />
      <circle className={"mk mk-o" + a} cx="70" cy="50" r="9.5" stroke="#22D3EE" strokeWidth="6" />
    </svg>
  );
}

/** Wordmark with the brand's dotless ı and cyan final o. Screen readers get "Ospherio". */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={"wordmark " + (className ?? "")} aria-label="Ospherio">
      <span aria-hidden="true">
        Ospherı<span className="accent">o</span>
      </span>
    </span>
  );
}
