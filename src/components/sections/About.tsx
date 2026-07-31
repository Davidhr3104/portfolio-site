import { LuGauge, LuUserCheck, LuRocket } from "react-icons/lu";
import { Reveal } from "@/components/Reveal";
import { ColorBlob } from "@/components/ColorBlob";
import { SectionLabel } from "@/components/SectionLabel";

const pillars = [
  {
    icon: LuGauge,
    title: "Confidence-scored AI",
    text: "Every output carries a confidence score — never a blind answer.",
  },
  {
    icon: LuUserCheck,
    title: "Human-in-the-loop by design",
    text: "High-stakes decisions always go through human review.",
  },
  {
    icon: LuRocket,
    title: "Full-stack delivery",
    text: "From architecture to deploy, no hand-offs in between.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border bg-wash"
    >
      <ColorBlob
        className="bottom-0 left-0 -translate-x-[10%] translate-y-1/5"
        size={470}
        opacity={0.28}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <Reveal>
            <SectionLabel>About</SectionLabel>
          </Reveal>
          <div>
            <div className="max-w-2xl space-y-6">
              <Reveal>
                <p className="font-sans text-lg leading-relaxed text-foreground/90">
                  I design and build AI agents that do real work inside a
                  business: pulling structured data out of messy documents,
                  qualifying leads, answering questions from internal
                  knowledge, and keeping systems in sync — each one built to
                  show its reasoning, not just its output.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p className="font-sans text-lg leading-relaxed text-foreground/90">
                  My approach: audit the process before automating it. I
                  favor deterministic logic wherever correctness matters, and
                  reserve the model for the parts that genuinely require
                  judgment. High-stakes decisions keep a human in the loop by
                  design, not as an afterthought.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p className="font-sans text-lg leading-relaxed text-foreground/90">
                  Beyond the AI layer, I work full-stack — from database
                  schema to production UI — so the systems I design are ones
                  I can also ship, integrate, and maintain end to end.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-3">
              {pillars.map((pillar, i) => (
                <Reveal key={pillar.title} delay={240 + i * 60}>
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
    </section>
  );
}
