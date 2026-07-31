import { Reveal } from "@/components/Reveal";
import { ColorBlob } from "@/components/ColorBlob";
import { SectionLabel } from "@/components/SectionLabel";

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
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <Reveal>
            <SectionLabel>Impact</SectionLabel>
          </Reveal>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
            {metrics.map((metric, i) => (
              <Reveal key={metric.label} delay={i * 80}>
                <p className="font-serif text-5xl text-accent sm:text-6xl">
                  {metric.value}
                </p>
                <p className="mt-3 max-w-[220px] font-sans text-sm leading-relaxed text-muted">
                  {metric.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
