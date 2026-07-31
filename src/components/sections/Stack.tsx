import type { IconType } from "react-icons";
import {
  SiAnthropic,
  SiClaudecode,
  SiN8N,
  SiMake,
  SiZapier,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiSupabase,
  SiGithub,
  SiVercel,
  SiHubspot,
  SiNotion,
  SiAirtable,
  SiZendesk,
} from "react-icons/si";
import {
  LuDatabase,
  LuLayers,
  LuSlidersHorizontal,
  LuPlug,
  LuWebhook,
} from "react-icons/lu";
import { Reveal } from "@/components/Reveal";

type StackItem = { label: string; icon?: IconType };

const categories: { label: string; items: StackItem[] }[] = [
  {
    label: "AI",
    items: [
      { label: "Claude / Anthropic API", icon: SiAnthropic },
      { label: "Claude Code", icon: SiClaudecode },
      { label: "OpenAI" },
      { label: "Claude Cowork" },
      { label: "RAG pipelines", icon: LuDatabase },
      { label: "Embeddings (Voyage AI)", icon: LuLayers },
      { label: "Prompt design & evaluation", icon: LuSlidersHorizontal },
    ],
  },
  {
    label: "Automation",
    items: [
      { label: "n8n", icon: SiN8N },
      { label: "Make", icon: SiMake },
      { label: "Zapier", icon: SiZapier },
      { label: "Model Context Protocol (MCP)", icon: LuPlug },
      { label: "Webhooks & scheduled jobs", icon: LuWebhook },
    ],
  },
  {
    label: "Full-Stack",
    items: [
      { label: "Next.js / React", icon: SiNextdotjs },
      { label: "TypeScript", icon: SiTypescript },
      { label: "JavaScript", icon: SiJavascript },
      { label: "HTML", icon: SiHtml5 },
      { label: "CSS", icon: SiCss },
      { label: "Node.js", icon: SiNodedotjs },
      { label: "Supabase", icon: SiSupabase },
      { label: "GitHub", icon: SiGithub },
      { label: "Vercel", icon: SiVercel },
    ],
  },
  {
    label: "CRM & Productivity",
    items: [
      { label: "HubSpot", icon: SiHubspot },
      { label: "GoHighLevel" },
      { label: "Notion", icon: SiNotion },
      { label: "Slack" },
      { label: "Google Workspace" },
      { label: "Airtable", icon: SiAirtable },
      { label: "Zendesk", icon: SiZendesk },
    ],
  },
];

export function Stack() {
  return (
    <section id="stack" className="border-t border-border bg-wash">
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
                <ul className="mt-4 space-y-2.5">
                  {category.items.map((item) =>
                    item.icon ? (
                      <li
                        key={item.label}
                        className="flex items-center gap-2.5 font-sans text-base leading-snug text-foreground/80"
                      >
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                          <item.icon
                            aria-hidden="true"
                            size={14}
                            className="text-foreground/70"
                          />
                        </span>
                        {item.label}
                      </li>
                    ) : (
                      <li
                        key={item.label}
                        className="font-sans text-base leading-snug text-foreground/80"
                      >
                        {item.label}
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
