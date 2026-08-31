"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/components/LocaleProvider";

const stepNumbers = ["01", "02", "03", "04", "05"];

function Sparkle({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      style={style}
      className={`text-accent drop-shadow-[0_0_10px_var(--color-accent)] ${className}`}
      fill="currentColor"
    >
      <path d="M12 0c0 5.5 1 8.5 3 10.5S22 12 24 12c-5.5 0-8.5 1-10.5 3S12 22 12 24c0-5.5-1-8.5-3-10.5S2 12 0 12c5.5 0 8.5-1 10.5-3S12 2 12 0Z" />
    </svg>
  );
}

export function HowIWork() {
  const { t } = useLocale();
  const [active, setActive] = useState(0);
  const steps = t.howIWork.steps.map((step, i) => ({ ...step, number: stepNumbers[i] }));

  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const hoveringRef = useRef(false);
  const [sparkleY, setSparkleY] = useState(0);

  // Keep the sparkle glued to the vertical center of whichever row is active.
  useEffect(() => {
    const el = itemRefs.current[active];
    if (!el) return;
    setSparkleY(el.offsetTop + el.offsetHeight / 2);
  }, [active, steps.length]);

  // While the section is on screen and nothing is being hovered/focused, let
  // scroll position drive which step is "active" -- the sparkle drifts down
  // the list as you scroll past the section. Driven by IntersectionObserver
  // against a thin band at the vertical center of the viewport rather than a
  // raw scroll listener, so it's a passive browser callback instead of a
  // per-frame handler.
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (hoveringRef.current) return;
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const center = window.innerHeight / 2;
        const closest = visible.reduce((best, entry) => {
          const dist = Math.abs(entry.boundingClientRect.top + entry.boundingClientRect.height / 2 - center);
          const bestDist = Math.abs(best.boundingClientRect.top + best.boundingClientRect.height / 2 - center);
          return dist < bestDist ? entry : best;
        });
        const idx = itemRefs.current.findIndex((el) => el === closest.target);
        if (idx !== -1) setActive(idx);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [steps.length]);

  function lockTo(i: number) {
    hoveringRef.current = true;
    setActive(i);
  }

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-border"
    >
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:py-36">
        <h2 className="sr-only">{t.howIWork.label}</h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-10 lg:gap-16">
          <Reveal delay={60}>
            <p className="font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              {t.howIWork.heading}
            </p>
            <p className="mt-5 max-w-sm font-sans text-base leading-relaxed text-muted">
              {t.howIWork.subtext}
            </p>
            <a
              href="#contact"
              className="glossy-pill mt-8 inline-flex items-center gap-2 px-5 py-2.5 font-sans text-sm outline-hidden"
            >
              {t.howIWork.cta}
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div
              ref={listRef}
              onMouseLeave={() => {
                hoveringRef.current = false;
              }}
              className="relative border-l border-border pl-8 sm:pl-10"
            >
              <Sparkle
                className="pointer-events-none absolute -left-[13px] h-6 w-6 -translate-y-1/2 transition-[top] duration-500 ease-out sm:-left-[15px] sm:h-7 sm:w-7"
                style={{ top: sparkleY }}
              />
              {steps.map((step, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={step.number}
                    type="button"
                    ref={(el) => {
                      itemRefs.current[i] = el;
                    }}
                    onMouseEnter={() => lockTo(i)}
                    onFocus={() => lockTo(i)}
                    aria-current={isActive}
                    className="block w-full border-t border-border py-5 text-left outline-hidden first:border-t-0 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    <span
                      className={`font-sans text-xs uppercase tracking-[0.15em] transition-colors duration-300 ${
                        isActive ? "text-accent" : "text-muted/50"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`mt-1 block font-serif text-xl transition-colors duration-300 sm:text-2xl ${
                        isActive ? "text-foreground" : "text-foreground/25"
                      }`}
                    >
                      {step.title}
                    </span>
                    <span
                      className={`mt-1.5 block max-w-sm font-sans text-sm leading-relaxed transition-colors duration-300 ${
                        isActive ? "text-foreground/70" : "text-muted/40"
                      }`}
                    >
                      {step.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
