"use client";

import { useState } from "react";
import { LuPause, LuPlay } from "react-icons/lu";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { useLocale } from "@/components/LocaleProvider";

export function Reviews() {
  const { t } = useLocale();
  const [paused, setPaused] = useState(false);
  const reviews = t.reviews.items;

  return (
    <section id="reviews" className="border-t border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 pt-24 sm:pt-32 lg:pt-36">
        <Reveal>
          <SectionLabel>{t.reviews.label}</SectionLabel>
        </Reveal>
        <button
          type="button"
          onClick={() => setPaused((v) => !v)}
          aria-label={paused ? t.reviews.playAria : t.reviews.pauseAria}
          className="flex h-9 w-9 items-center justify-center border border-border text-foreground/70 outline-hidden transition-colors hover:border-accent hover:text-accent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {paused ? (
            <LuPlay size={14} aria-hidden="true" />
          ) : (
            <LuPause size={14} aria-hidden="true" />
          )}
        </button>
      </div>

      <Reveal delay={80}>
        <div className="marquee-mask-x relative mx-auto mt-10 max-w-5xl overflow-hidden pb-24 sm:pb-32 lg:pb-36">
          <div
            className="marquee-track-x flex w-max"
            style={{ animationPlayState: paused ? "paused" : "running" }}
          >
            {[0, 1].map((dup) => (
              <div
                key={dup}
                aria-hidden={dup === 1 ? "true" : undefined}
                className="flex gap-6 pr-6 pl-6"
              >
                {reviews.map((review, i) => (
                  <figure
                    key={`${dup}-${i}`}
                    className="flex w-[320px] shrink-0 flex-col border border-border p-6 sm:w-[360px]"
                  >
                    <span
                      aria-hidden="true"
                      className="font-serif text-3xl leading-none text-accent"
                    >
                      &ldquo;
                    </span>
                    <blockquote className="mt-2 flex-1 font-sans text-base leading-relaxed text-foreground/85">
                      {review.quote}
                    </blockquote>
                    <figcaption className="mt-6 border-t border-border pt-4 font-sans text-xs uppercase tracking-[0.12em] text-muted">
                      {review.role}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
