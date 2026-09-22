"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { site } from "@/lib/site";

type State = "idle" | "sending" | "sent" | "error";

/**
 * Posts to Web3Forms, which emails the submission to site.email. The site is a
 * static export with no backend, so a third-party endpoint is the only way to
 * take a message without standing up a server. The access key is a public
 * identifier by design — it only lets a sender deliver to the address the key
 * was registered with.
 */
export function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

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
      <div className="card contact-card reveal">
        <span className="kicker">Message sent</span>
        <h2 className="h3">Thanks — we&apos;ll be in touch.</h2>
        <p>
          We read everything that comes in and usually reply within a working day. If it&apos;s urgent,
          email <a href={`mailto:${site.email}`} className="link">{site.email}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="card contact-card reveal" onSubmit={onSubmit} noValidate={false}>
      <span className="kicker">Tell us about your project</span>
      <input type="hidden" name="access_key" value={site.formAccessKey} />
      <input type="hidden" name="subject" value="New project enquiry — ospherio.com" />
      {/* Spam trap: bots fill it, people never see it. */}
      <input type="checkbox" name="botcheck" className="sr-only" tabIndex={-1} autoComplete="off" />

      <div className="field-row">
        <label className="field">
          <span>Your name</span>
          <input name="name" type="text" required autoComplete="name" placeholder="Jane Cooper" />
        </label>
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" required autoComplete="email" placeholder="jane@company.com" />
        </label>
      </div>
      <label className="field">
        <span>
          Company <i>(optional)</i>
        </span>
        <input name="company" type="text" autoComplete="organization" placeholder="Company name" />
      </label>
      <label className="field">
        <span>What are you building?</span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="What you want to build and who it's for, any systems it must work with, and your rough timeline."
        />
      </label>

      <button type="submit" className="btn btn-primary" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Send message"} <Icon name="arrow" size={16} />
      </button>

      {state === "error" && (
        <p className="form-error" role="alert">
          {error} You can also email <a href={`mailto:${site.email}`} className="link">{site.email}</a>.
        </p>
      )}
      <p className="form-note">
        Goes straight to our inbox. Prefer email?{" "}
        <a href={`mailto:${site.email}`} className="link">{site.email}</a>
      </p>
    </form>
  );
}
