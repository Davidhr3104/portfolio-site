import { Reveal } from "@/components/Reveal";
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
    <section id="process" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <Reveal>
            <SectionLabel>How I Work</SectionLabel>
          </Reveal>
          <div className="max-w-2xl">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 60}>
                <div className="flex items-baseline gap-5 border-t border-border py-5 first:border-t-0">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
