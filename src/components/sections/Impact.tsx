"use client";

import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { TimeSavedEstimator } from "@/components/TimeSavedEstimator";
import { useLocale } from "@/components/LocaleProvider";

const values = ["7", "90%", "100%"];

export function Impact() {
  const { t } = useLocale();
  const metrics = t.impact.metrics.map((m, i) => ({ ...m, value: values[i] }));

  return (
    <section
      id="impact"
      className="relative overflow-hidden border-t border-border bg-wash/55 backdrop-blur-[1px]"
    >
      <div className="relative mx-auto max-w-5xl px-6 py-32 sm:py-40 lg:py-48">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl">
            {t.impact.label}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-border pt-12 sm:grid-cols-3 sm:gap-8">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 80}>
              <CountUp
                value={metric.value}
                className="font-stat-accent text-5xl text-accent sm:text-6xl"
              />
              <p className="mt-3 max-w-[220px] font-sans text-sm leading-relaxed text-muted">
                {metric.label}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={240}>
          <p className="mt-10 max-w-xl font-sans text-sm text-muted">{t.impact.subtext}</p>
        </Reveal>
        <Reveal delay={300}>
          <TimeSavedEstimator />
        </Reveal>
      </div>
    </section>
  );
}
