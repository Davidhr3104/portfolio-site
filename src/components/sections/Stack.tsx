import { Reveal } from "@/components/Reveal";

const categories = [
  {
    label: "AI",
    items: [
      "Claude / Anthropic API",
      "Agentic tool-use workflows",
      "RAG pipelines",
      "Embeddings (Voyage AI)",
      "Prompt design & evaluation",
    ],
  },
  {
    label: "Automation",
    items: [
      "n8n",
      "Model Context Protocol (MCP)",
      "Webhooks & scheduled jobs",
      "Zapier",
    ],
  },
  {
    label: "Full-Stack",
    items: ["TypeScript", "Next.js / React", "Node.js", "PostgreSQL / Supabase"],
  },
  {
    label: "CRM",
    items: [
      "HubSpot",
      "GoHighLevel",
      "Custom CRM integrations",
      "Data sync & reconciliation",
    ],
  },
];

export function Stack() {
  return (
    <section id="stack" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <Reveal>
            <h2 className="font-sans text-sm uppercase tracking-[0.2em] text-muted">
              Stack
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4">
            {categories.map((category, i) => (
              <Reveal key={category.label} delay={i * 60}>
                <h3 className="font-sans text-sm uppercase tracking-[0.12em] text-accent">
                  {category.label}
                </h3>
                <ul className="mt-4 space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="font-sans text-base leading-snug text-foreground/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
