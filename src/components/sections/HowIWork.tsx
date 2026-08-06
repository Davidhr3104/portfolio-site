import { Reveal } from "@/components/Reveal";
import { ColorBlob } from "@/components/ColorBlob";
import { SectionLabel } from "@/components/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Audit",
    description: "Map what's actually happening before proposing anything.",
  },
  {
    number: "02",
    title: "Architect",
    description: "Decide what's deterministic and what needs a model.",
  },
  {
    number: "03",
    title: "Build",
    description: "Ship working systems, not prototypes.",
  },
  {
    number: "04",
    title: "Validate",
    description: "Test against real edge cases, not just the happy path.",
  },
  {
    number: "05",
    title: "Document & Handoff",
    description: "Leave something the team can run without me.",
  },
];

export function HowIWork() {
  return (
    <section id="process" className="relative overflow-hidden border-t border-border">
      <ColorBlob
        className="top-0 left-0 -translate-x-[10%] -translate-y-1/5"
        size={440}
        opacity={0.22}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:py-36">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <Reveal>
            <SectionLabel>How I Work</SectionLabel>
          </Reveal>
          <div className="max-w-2xl">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="border-t border-border first:border-t-0"
              >
                <Reveal delay={i * 60}>
                  <div className="flex items-baseline gap-5 py-5">
                    <span className="font-serif text-lg text-accent">
                      {step.number}
                    </span>
                    <p className="font-sans text-base leading-relaxed text-foreground/80">
                      <span className="font-medium text-foreground">
                        {step.title}
                      </span>{" "}
                      — {step.description}
                    </p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
