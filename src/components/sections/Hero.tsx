import { Reveal } from "@/components/Reveal";
import { ColorBlob } from "@/components/ColorBlob";

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-5xl overflow-hidden px-6 pt-44 pb-28 sm:pt-56 sm:pb-36"
    >
      <div
        aria-hidden="true"
        className="grid-texture pointer-events-none absolute inset-0 -z-20"
      />
      <ColorBlob
        className="top-0 right-0 -translate-y-1/5 translate-x-[10%]"
        size={560}
        opacity={0.26}
      />
      <Reveal>
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-12 -inset-y-16 -z-10 sm:-inset-x-24"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 30% 45%, rgba(88,133,182,0.16), rgba(88,133,182,0) 70%)",
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
