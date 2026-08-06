import { LuGauge, LuUserCheck, LuRocket } from "react-icons/lu";
import { Reveal } from "@/components/Reveal";
import { ColorBlob } from "@/components/ColorBlob";
import { SectionLabel } from "@/components/SectionLabel";

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
      <div className="relative mx-auto max-w-5xl px-6 py-32 sm:py-40 lg:py-48">
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
              <Reveal delay={220}>
                <p className="font-sans text-lg leading-relaxed text-foreground/90">
                  I didn&apos;t start in tech. I spent my early career in
                  customer support and operations — BPO and call center work
                  — before moving into freelance work, first as an executive
                  and virtual assistant, then progressively into AI systems
                  and automation as I built projects on the side and started
                  landing client work.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <p className="font-sans text-lg leading-relaxed text-foreground/90">
                  Less than two years into AI and automation specifically,
                  but I&apos;ve moved fast — from self-initiated automations
                  in n8n, Make, and Zapier to architecting production AI
                  agents that businesses depend on daily.
                </p>
              </Reveal>
              <Reveal delay={340}>
                <p className="font-sans text-lg leading-relaxed text-foreground/90">
                  I care about building AI you can audit not because of one
                  dramatic failure I witnessed, but because it&apos;s the
                  engineering standard I hold myself to: if a system can&apos;t
                  show its work, I don&apos;t trust it enough to ship it —
                  and neither should you.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-3">
              {pillars.map((pillar, i) => (
                <Reveal key={pillar.title} delay={400 + i * 60}>
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
