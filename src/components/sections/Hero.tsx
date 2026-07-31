import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-5xl px-6 pt-44 pb-28 sm:pt-56 sm:pb-36"
    >
      <Reveal>
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-12 -inset-y-16 -z-10 sm:-inset-x-24"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 30% 45%, rgba(30,58,95,0.10), rgba(30,58,95,0) 70%)",
            }}
          />
          <h1 className="font-serif text-[clamp(2.75rem,9vw,6.5rem)] leading-[1.02] tracking-tight text-foreground">
            David Herrera
          </h1>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <p className="mt-5 font-serif italic text-2xl sm:text-3xl text-accent">
          AI Systems Architect
        </p>
      </Reveal>
      <Reveal delay={240}>
        <p className="mt-10 max-w-xl font-sans text-lg sm:text-xl leading-relaxed text-foreground/80">
          I build AI agents you can actually audit — evidence-backed
          extraction, automated systems, and full-stack products engineered
          for trust, not demos.
        </p>
      </Reveal>
    </section>
  );
}
