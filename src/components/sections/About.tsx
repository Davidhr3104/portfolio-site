import { Reveal } from "@/components/Reveal";
import { ColorBlob } from "@/components/ColorBlob";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border bg-wash"
    >
      <ColorBlob
        className="bottom-0 left-0 -translate-x-1/3 translate-y-1/3"
        size={420}
        opacity={0.16}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <Reveal>
            <h2 className="font-sans text-sm uppercase tracking-[0.2em] text-muted">
              About
            </h2>
          </Reveal>
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
                My approach: audit the process before automating it. I favor
                deterministic logic wherever correctness matters, and reserve
                the model for the parts that genuinely require judgment.
                High-stakes decisions keep a human in the loop by design, not
                as an afterthought.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="font-sans text-lg leading-relaxed text-foreground/90">
                Beyond the AI layer, I work full-stack — from database schema
                to production UI — so the systems I design are ones I can
                also ship, integrate, and maintain end to end.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
