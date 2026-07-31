import { Reveal } from "@/components/Reveal";
import { ColorBlob } from "@/components/ColorBlob";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="grid-texture pointer-events-none absolute inset-0 -z-20"
      />
      <ColorBlob
        className="top-0 right-0 -translate-y-1/5 translate-x-[10%]"
        size={560}
        opacity={0.26}
      />
      <div className="relative mx-auto max-w-5xl px-6 pt-44 pb-32 sm:pt-56 sm:pb-40 lg:pb-48">
        <Reveal>
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-12 -inset-y-16 -z-10 sm:-inset-x-24"
              style={{
                background:
                  "radial-gradient(ellipse 60% 70% at 30% 45%, rgba(var(--blob-rgb),0.16), rgba(var(--blob-rgb),0) 70%)",
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
            extraction, automated systems, and full-stack products
            engineered for trust, not demos.
          </p>
          <p className="mt-4 max-w-xl font-sans text-base text-muted">
            For founders and teams who need AI they can actually rely on,
            not just impress with.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-8 inline-flex items-center gap-2.5">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5f9c76] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5f9c76]" />
            </span>
            <span className="font-sans text-sm text-muted">
              Currently available — limited capacity
            </span>
          </div>
        </Reveal>
        <Reveal delay={400}>
          <a
            href="#projects"
            className="mt-10 inline-flex items-center gap-2 font-sans text-sm text-accent outline-hidden transition-colors hover:text-gold focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            See the work
            <span aria-hidden="true">↓</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
