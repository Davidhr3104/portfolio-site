import { stackItemsWithIcon } from "@/data/stack";
import { Reveal } from "@/components/Reveal";
import { GlossySphereCorner } from "@/components/GlossySphere";
import { SectionLabel } from "@/components/SectionLabel";

export function Tools() {
  return (
    <section id="tools" className="relative overflow-hidden border-t border-border">
      <GlossySphereCorner
        corner="bottom-right"
        primaryColor="var(--color-foreground)"
        primaryOpacity={0.85}
        secondaryColor="var(--color-accent)"
      />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:py-36">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <Reveal>
            <div className="marquee-mask-y relative h-[420px] overflow-hidden">
              <div className="marquee-track-y">
                {[0, 1].map((dup) => (
                  <div key={dup} aria-hidden={dup === 1 ? "true" : undefined}>
                    {stackItemsWithIcon.map((item, i) => (
                      <div
                        key={`${dup}-${i}`}
                        className="flex items-center gap-3 py-2.5"
                      >
                        <item.icon
                          aria-hidden="true"
                          size={18}
                          className="shrink-0 text-foreground/50"
                        />
                        <span className="font-sans text-lg text-foreground/70">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <SectionLabel>Tools I Use</SectionLabel>
            <p className="mt-6 max-w-sm font-sans text-lg leading-relaxed text-foreground/80">
              A working set, not a badge wall — AI, automation, and
              full-stack tools I reach for daily to actually ship what&apos;s
              on this page.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
