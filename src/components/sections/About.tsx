import {
  LuGauge,
  LuUserCheck,
  LuRocket,
  LuHeadset,
  LuBriefcase,
  LuBot,
  LuBlocks,
  LuSearchCheck,
} from "react-icons/lu";
import { Reveal } from "@/components/Reveal";
import { GlossySphereCorner } from "@/components/GlossySphere";
import { SectionLabel } from "@/components/SectionLabel";

const focus = [
  {
    icon: LuBlocks,
    title: "What I Build",
    text: "AI agents that do real work inside a business — pulling structured data from documents, qualifying leads, answering questions from internal knowledge, keeping systems in sync.",
  },
  {
    icon: LuSearchCheck,
    title: "My Approach",
    text: "Audit the process before automating it. Deterministic logic wherever correctness matters — the model only for the parts that genuinely require judgment.",
  },
];

const pillars = [
  {
    icon: LuGauge,
    title: "Confidence-scored AI",
    text: "If the model isn't sure, you'll know before it matters.",
  },
  {
    icon: LuUserCheck,
    title: "Human-in-the-loop by design",
    text: "The decisions that can hurt you always get a second pair of eyes.",
  },
  {
    icon: LuRocket,
    title: "Full-stack delivery",
    text: "One person, start to finish — no handoffs where things get lost.",
  },
];

const stages = [
  {
    icon: LuHeadset,
    title: "Customer Support & Operations",
    text: "Started in BPO and call center work — the early stretch of my career, well before tech.",
  },
  {
    icon: LuBriefcase,
    title: "Executive & Virtual Assistant",
    text: "Moved into freelance work, then started building AI and automation projects on the side.",
  },
  {
    icon: LuBot,
    title: "AI Systems & Automation",
    text: "Less than two years in, but moved fast — from self-initiated automations in n8n, Make, and Zapier to architecting production AI agents businesses depend on daily.",
  },
];

const labelClass =
  "font-sans text-xs font-medium uppercase tracking-[0.15em] text-muted";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border bg-wash"
    >
      <GlossySphereCorner
        corner="bottom-left"
        primaryColor="var(--color-accent)"
        secondaryColor="var(--color-foreground)"
        secondaryOpacity={0.55}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-32 sm:py-40 lg:py-48">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <Reveal>
            <SectionLabel>About</SectionLabel>
          </Reveal>
          <div>
            <Reveal>
              <p className={labelClass}>What I Do</p>
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
                <p className={labelClass}>How I Got Here</p>
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
                  <p className={labelClass}>Why It Matters</p>
                </Reveal>
                <Reveal delay={260 + stages.length * 80 + 40}>
                  <p className="mt-3 font-serif text-xl leading-relaxed text-foreground/90 italic">
                    I care about building AI you can audit not because of one
                    dramatic failure I witnessed, but because it&apos;s the
                    engineering standard I hold myself to: if a system can&apos;t
                    show its work, I don&apos;t trust it enough to ship it —
                    and neither should you.
                  </p>
                </Reveal>
              </div>
            </div>

            <div className="mt-12 border-t border-border pt-10">
              <Reveal delay={260 + stages.length * 80 + 60}>
                <p className={labelClass}>Principles</p>
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
