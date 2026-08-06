import { Reveal } from "@/components/Reveal";
import { ColorBlob } from "@/components/ColorBlob";
import { SectionLabel } from "@/components/SectionLabel";
import { CountUp } from "@/components/CountUp";

const metrics = [
  {
    value: "5",
    label: "Production AI systems built and shipped",
  },
  {
    value: "90%",
    label: "Avg. reduction in manual review time",
  },
  {
    value: "100%",
    label: "High-stakes decisions kept human-reviewed by design",
  },
];

export function Impact() {
  return (
    <section
      id="impact"
      className="relative overflow-hidden border-t border-border bg-wash"
    >
      <ColorBlob
        className="right-0 bottom-0 translate-x-[10%] translate-y-1/5"
        size={500}
        opacity={0.3}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-32 sm:py-40 lg:py-48">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <Reveal>
            <SectionLabel>Impact</SectionLabel>
          </Reveal>
          <div>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
              {metrics.map((metric, i) => (
                <Reveal key={metric.label} delay={i * 80}>
                  <CountUp
                    value={metric.value}
                    className="font-serif text-5xl text-accent sm:text-6xl"
                  />
                  <p className="mt-3 max-w-[220px] font-sans text-sm leading-relaxed text-muted">
                    {metric.label}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={240}>
              <p className="mt-10 font-sans text-sm text-muted">
                Real numbers from delivered systems, not projected outcomes.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
