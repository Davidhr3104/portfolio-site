"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full border border-border bg-surface px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted outline-hidden transition-colors focus:border-accent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const labelClass =
  "block font-sans text-xs uppercase tracking-[0.1em] text-muted";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot -- real visitors never see this
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company }),
      });
      const data: { ok?: boolean; error?: string } = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-border bg-surface p-8">
        <p className="font-serif text-xl text-foreground">Message sent.</p>
        <p className="mt-2 font-sans text-sm text-muted">
          I&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <input
        type="text"
        name="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Full name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={`${fieldClass} mt-2`}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email address
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={`${fieldClass} mt-2`}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project."
          className={`${fieldClass} mt-2 resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="font-sans text-sm" style={{ color: "#e0776d" }}>
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-3 border border-accent px-6 py-3 font-sans text-sm uppercase tracking-[0.15em] text-accent outline-hidden transition-colors duration-300 hover:bg-accent hover:text-background focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
        <span aria-hidden="true">→</span>
      </button>

      <p className="font-sans text-xs italic text-muted">
        Your info stays between us — no lists, no spam.
      </p>
    </form>
  );
}
