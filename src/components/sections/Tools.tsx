"use client";

import { stackCategories } from "@/data/stack";
import { Reveal } from "@/components/Reveal";
import { SolarSystem } from "@/components/SolarSystem";
import { useLocale } from "@/components/LocaleProvider";

export function Tools() {
  const { t } = useLocale();

  return (
    <section id="tools" className="relative overflow-hidden border-t border-border">
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:py-36">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-8">
          <Reveal>
            <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              {t.tools.label}
            </h2>
            <p className="mt-4 max-w-lg font-sans text-lg leading-relaxed text-foreground/80">
              {t.tools.description}
            </p>
          </Reveal>
          <Reveal delay={80} className="hidden md:flex md:justify-end">
            <SolarSystem />
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-border pt-10 sm:grid-cols-2">
          {stackCategories.map((category, i) => (
            <Reveal key={category.label} delay={i * 60}>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-muted">
                {category.label}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) =>
                  item.icon ? (
                    <span key={item.label} className="tool-chip">
                      <item.icon
                        aria-hidden="true"
                        size={16}
                        className="shrink-0 text-foreground/50"
                      />
                      <span className="font-sans text-sm text-foreground/70">
                        {item.label}
                      </span>
                    </span>
                  ) : null
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
