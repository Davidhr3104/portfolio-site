import { stackItemsWithIcon } from "@/data/stack";

export function ToolMarquee() {
  return (
    <div className="border-y border-border bg-background">
      <div className="mx-auto max-w-5xl px-6 pt-6">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted">
          Tools I use daily
        </p>
      </div>
      <div className="marquee-mask overflow-hidden py-6">
        <div className="marquee-track flex w-max items-center gap-10">
          {[0, 1].map((dup) => (
            <div
              key={dup}
              aria-hidden={dup === 1 ? "true" : undefined}
              className="flex items-center gap-10"
            >
              {stackItemsWithIcon.map((item, i) => (
                <div
                  key={`${dup}-${i}`}
                  className="flex items-center gap-2.5 whitespace-nowrap"
                >
                  <item.icon
                    aria-hidden="true"
                    size={18}
                    className="shrink-0 text-foreground/55"
                  />
                  <span className="font-sans text-sm text-foreground/55">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
