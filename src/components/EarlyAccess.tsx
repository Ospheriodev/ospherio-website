"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { site } from "@/lib/site";
import { goodshaul } from "@/lib/goodshaul";

type State = "idle" | "sending" | "sent" | "error";

const mailto =
  `mailto:${site.email}?subject=${encodeURIComponent(goodshaul.earlyAccessSubject)}` +
  `&body=${encodeURIComponent(
    "Company:\nCountry:\nNumber of reps and vans:\nWhat we use today:\n"
  )}`;

/**
 * GoodsHaul early-access request. Like ContactForm it posts to Web3Forms, so it
 * only renders as a form once site.formAccessKey is set; until then the same
 * slot is an email card with the questions pre-filled in the message body.
 */
export function EarlyAccess() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  if (!site.formAccessKey) {
    return (
      <div className="card contact-card">
        <span className="kicker">Request early access</span>
        <a href={mailto} className="big">
          {site.email}
        </a>
        <p>
          Tell us your company, country, how many reps and vans you run, and what you use today. We&apos;ll reply
          to arrange a demo.
        </p>
        <a href={mailto} className="btn btn-primary pulse" style={{ alignSelf: "flex-start" }}>
          Email us to join <Icon name="arrow" size={16} />
        </a>
      </div>
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Something went wrong.");
      setState("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="card contact-card">
        <span className="kicker">Request sent</span>
        <h3 className="h3">Thanks. We&apos;ll be in touch to arrange a demo.</h3>
        <p>
          If it&apos;s urgent, email <a href={`mailto:${site.email}`} className="link">{site.email}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="card contact-card" onSubmit={onSubmit}>
      <span className="kicker">Request early access</span>
      <input type="hidden" name="access_key" value={site.formAccessKey} />
      <input type="hidden" name="subject" value={`${goodshaul.earlyAccessSubject} — ospherio.com`} />
      {/* Spam trap: bots fill it, people never see it. */}
      <input type="checkbox" name="botcheck" className="sr-only" tabIndex={-1} autoComplete="off" />

      <div className="field-row">
        <label className="field">
          <span>Your name</span>
          <input name="name" type="text" required autoComplete="name" />
        </label>
        <label className="field">
          <span>Work email</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <div className="field-row">
        <label className="field">
          <span>Company</span>
          <input name="company" type="text" required autoComplete="organization" />
        </label>
        <label className="field">
          <span>Country</span>
          <input name="country" type="text" required autoComplete="country-name" />
        </label>
      </div>
      <label className="field">
        <span>Reps and vans</span>
        <input name="reps_and_vans" type="text" placeholder="e.g. 4 reps, 2 vans" />
      </label>
      <label className="field">
        <span>
          What do you use today? <i>(optional)</i>
        </span>
        <textarea name="message" rows={3} placeholder="Current software, spreadsheets or paper, and what you'd change first." />
      </label>

      <button type="submit" className="btn btn-primary" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Join early access"} <Icon name="arrow" size={16} />
      </button>

      {state === "error" && (
        <p className="form-error" role="alert">
          {error} You can also email <a href={`mailto:${site.email}`} className="link">{site.email}</a>.
        </p>
      )}
    </form>
  );
}
