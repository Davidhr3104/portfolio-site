"use client";

import { useRef, useState } from "react";
import { LuCheck, LuCopy } from "react-icons/lu";
import { Reveal } from "@/components/Reveal";
import { ColorBlob } from "@/components/ColorBlob";
import { SectionLabel } from "@/components/SectionLabel";
import { useSchedule } from "@/components/ScheduleProvider";

const UPWORK_URL = "https://www.upwork.com/freelancers/~01cbe720b774ffd4c6";
const EMAIL = "andreshr4578@gmail.com";

const primaryButtonClass =
  "inline-flex items-center gap-3 border border-accent px-6 py-3 font-sans text-sm uppercase tracking-[0.15em] text-accent outline-hidden transition-colors duration-300 hover:bg-accent hover:text-background focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export function Contact() {
  const openSchedule = useSchedule();
  const [copied, setCopied] = useState(false);
  const copiedTimeout = useRef<number | undefined>(undefined);

  async function copyEmail() {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    window.clearTimeout(copiedTimeout.current);
    copiedTimeout.current = window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="relative overflow-hidden border-t border-border">
      <ColorBlob
        className="top-0 left-0 -translate-x-[10%] -translate-y-1/5"
        size={440}
        opacity={0.24}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-32 sm:py-40 lg:py-48">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <Reveal>
            <SectionLabel>Contact</SectionLabel>
          </Reveal>
          <div className="max-w-xl">
            <Reveal>
              <p className="font-serif text-2xl leading-snug text-foreground sm:text-3xl">
                Currently available for select freelance and contract
                engagements.
              </p>
              <p className="mt-3 font-sans text-sm text-muted">
                Usually responds within 24 hours.
              </p>
              <p className="mt-1 font-sans text-sm text-muted">
                Based in Bogotá, Colombia — strong overlap with US business
                hours.
              </p>
              <p className="mt-4 max-w-md font-sans text-sm text-muted">
                Not the right fit if you&apos;re looking for a chatbot demo by
                Friday — I build systems meant to run in production, not
                prototypes.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a href={`mailto:${EMAIL}`} className={primaryButtonClass}>
                  Get in touch
                  <span aria-hidden="true">→</span>
                </a>
                <button
                  type="button"
                  onClick={openSchedule}
                  className={primaryButtonClass}
                >
                  Schedule a call
                  <span aria-hidden="true">→</span>
                </button>
                <a
                  href={UPWORK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.12em] text-accent outline-hidden transition-colors hover:text-gold focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  View my Upwork profile
                  <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="mt-5 flex items-center gap-2">
                <span className="font-sans text-sm text-muted">{EMAIL}</span>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label={copied ? "Email copied" : "Copy email address"}
                  className="flex h-7 w-7 items-center justify-center text-muted outline-hidden transition-colors hover:text-accent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {copied ? (
                    <LuCheck size={14} aria-hidden="true" className="text-accent" />
                  ) : (
                    <LuCopy size={14} aria-hidden="true" />
                  )}
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
