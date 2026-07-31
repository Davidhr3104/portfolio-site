import { stackCategories } from "@/data/stack";
import { Reveal } from "@/components/Reveal";
import { ColorBlob } from "@/components/ColorBlob";
import { SectionLabel } from "@/components/SectionLabel";

export function Stack() {
  return (
    <section
      id="stack"
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
            <SectionLabel>Stack</SectionLabel>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {stackCategories.map((category, i) => (
              <Reveal key={category.label} delay={i * 60}>
                <h3 className="font-sans text-sm uppercase tracking-[0.12em] text-accent">
                  {category.label}
                </h3>
                <ul className="mt-4 -mx-2 space-y-1">
                  {category.items.map((item) =>
                    item.icon ? (
                      <li key={item.label}>
                        <div className="group flex items-center gap-2.5 rounded-sm px-2 py-1.5 font-sans text-base leading-snug text-foreground/80 transition-colors duration-200 hover:bg-background hover:text-foreground">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                            <item.icon
                              aria-hidden="true"
                              size={14}
                              className="text-foreground/70 transition-colors duration-200 group-hover:text-accent"
                            />
                          </span>
                          {item.label}
                        </div>
                      </li>
                    ) : (
                      <li key={item.label}>
                        <div className="rounded-sm px-2 py-1.5 font-sans text-base leading-snug text-foreground/80 transition-colors duration-200 hover:bg-background hover:text-foreground">
                          {item.label}
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
