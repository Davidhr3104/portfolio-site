"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { GlossySphereCorner } from "@/components/GlossySphere";

type Intent = "hiring" | "partnership" | null;

const pillClass = (active: boolean) =>
  `border px-4 py-2 font-sans text-sm outline-hidden transition-colors duration-300 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
    active
      ? "border-accent bg-accent text-background"
      : "border-border text-foreground/70 hover:border-accent hover:text-accent"
  }`;

export function Hero() {
  const [intent, setIntent] = useState<Intent>(null);

  function toggle(next: Exclude<Intent, null>) {
    setIntent((current) => (current === next ? null : next));
  }

  const ctaHref = intent === "partnership" ? "#process" : "#projects";
  const ctaLabel = intent === "partnership" ? "See how I work" : "See the work";
  const subtext =
    intent === "hiring"
      ? "Good place to start — here's what I've shipped."
      : intent === "partnership"
        ? "Good place to start — here's how I approach the work."
        : null;

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="grid-texture pointer-events-none absolute inset-0 -z-20"
      />
      <GlossySphereCorner
        corner="top-left"
        primaryColor="var(--color-foreground)"
        primaryOpacity={0.85}
        secondaryColor="var(--color-accent)"
      />
      <GlossySphereCorner
        corner="top-right"
        primaryColor="var(--color-accent)"
        secondaryColor="var(--color-foreground)"
        secondaryOpacity={0.55}
      />
      <div className="relative mx-auto max-w-5xl px-6 pt-44 pb-32 sm:pt-56 sm:pb-40 lg:pb-48">
        <Reveal>
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-12 -inset-y-16 -z-10 sm:-inset-x-24"
              style={{
                background:
                  "radial-gradient(ellipse 60% 70% at 30% 45%, rgba(var(--blob-rgb),0.16), rgba(var(--blob-rgb),0) 70%)",
              }}
            />
            <h1 className="font-serif text-[clamp(2.75rem,9vw,6.5rem)] leading-[1.02] tracking-tight text-foreground">
              David Herrera
            </h1>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-5 font-serif italic text-2xl sm:text-3xl text-accent">
            AI Systems Architect
          </p>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-10 max-w-xl font-sans text-lg sm:text-xl leading-relaxed text-foreground/80">
            I build AI agents you can actually audit — evidence-backed
            extraction, automated systems, and full-stack products
            engineered for trust, not demos.
          </p>
          <p className="mt-4 max-w-xl font-sans text-base text-muted">
            For founders and teams who need AI they can actually rely on,
            not just impress with.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => toggle("hiring")}
              aria-pressed={intent === "hiring"}
              className={pillClass(intent === "hiring")}
            >
              I&apos;m hiring for a project
            </button>
            <button
              type="button"
              onClick={() => toggle("partnership")}
              aria-pressed={intent === "partnership"}
              className={pillClass(intent === "partnership")}
            >
              I&apos;m exploring a partnership
            </button>
          </div>
          {subtext && (
            <p className="mt-3 font-sans text-sm text-muted">{subtext}</p>
          )}
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-8 inline-flex items-center gap-2.5">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5f9c76] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5f9c76]" />
            </span>
            <span className="font-sans text-sm text-muted">
              Currently available — limited capacity
            </span>
          </div>
        </Reveal>
        <Reveal delay={400}>
          <a
            href={ctaHref}
            className={`mt-10 inline-flex items-center gap-2 font-sans outline-hidden transition-colors hover:text-gold focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
              intent === "hiring"
                ? "text-base font-medium text-accent sm:text-lg"
                : "text-sm text-accent"
            }`}
          >
            {ctaLabel}
            <span aria-hidden="true">↓</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
