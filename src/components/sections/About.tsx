"use client";

import {
  Gauge,
  UserCheck,
  Rocket,
  Headset,
  Briefcase,
  Robot,
  SquaresFour,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/components/LocaleProvider";

const focusIcons = [SquaresFour, MagnifyingGlass];
const pillarIcons = [Gauge, UserCheck, Rocket];
const stageIcons = [Headset, Briefcase, Robot];

const labelClass =
  "font-sans text-xs font-medium uppercase tracking-[0.15em] text-muted";

export function About() {
  const { t } = useLocale();
  const focus = t.about.focus.map((item, i) => ({ ...item, icon: focusIcons[i] }));
  const pillars = t.about.pillars.map((item, i) => ({ ...item, icon: pillarIcons[i] }));
  const stages = t.about.stages.map((item, i) => ({ ...item, icon: stageIcons[i] }));

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border bg-wash/55 backdrop-blur-[1px]"
    >
      <div className="relative mx-auto max-w-5xl px-6 py-32 sm:py-40 lg:py-48">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <Reveal>
            <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              {t.about.label}
            </h2>
          </Reveal>
          <div>
            <Reveal>
              <p className={labelClass}>{t.about.whatIDo}</p>
            </Reveal>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {focus.map((item, i) => (
                <Reveal key={item.title} delay={60 + i * 80}>
                  <item.icon aria-hidden="true" size={20} className="text-accent" />
                  <h3 className="mt-3 font-sans text-base font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 font-sans text-sm leading-relaxed text-foreground/80">
                    {item.text}
                  </p>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 max-w-2xl border-t border-border pt-10">
              <Reveal delay={220}>
                <p className={labelClass}>{t.about.howIGotHere}</p>
              </Reveal>
              <div className="mt-6">
                {stages.map((stage, i) => (
                  <Reveal key={stage.title} delay={260 + i * 80}>
                    <div className="relative flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-accent">
                          <stage.icon size={16} aria-hidden="true" />
                        </span>
                        {i < stages.length - 1 && (
                          <span
                            aria-hidden="true"
                            className="mt-1 w-px flex-1 bg-border"
                          />
                        )}
                      </div>
                      <div className="pb-8">
                        <h3 className="pt-1.5 font-sans text-base font-medium text-accent">
                          {stage.title}
                        </h3>
                        <p className="mt-1.5 font-sans text-sm leading-relaxed text-foreground/80">
                          {stage.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="mt-10 border-t border-border pt-8">
                <Reveal delay={260 + stages.length * 80}>
                  <p className={labelClass}>{t.about.whyItMatters}</p>
                </Reveal>
                <Reveal delay={260 + stages.length * 80 + 40}>
                  <p className="mt-3 font-serif text-xl leading-relaxed text-foreground/90 italic">
                    {t.about.quote}
                  </p>
                </Reveal>
              </div>
            </div>

            <div className="mt-12 border-t border-border pt-10">
              <Reveal delay={260 + stages.length * 80 + 60}>
                <p className={labelClass}>{t.about.principles}</p>
              </Reveal>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
                {pillars.map((pillar, i) => (
                  <Reveal
                    key={pillar.title}
                    delay={260 + stages.length * 80 + 120 + i * 60}
                  >
                    <pillar.icon
                      aria-hidden="true"
                      size={20}
                      className="text-accent"
                    />
                    <h3 className="mt-3 font-sans text-sm font-medium tracking-tight text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 font-sans text-sm leading-relaxed text-foreground/70">
                      {pillar.text}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
