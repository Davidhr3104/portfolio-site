import type { IconType } from "react-icons";
import {
  SiAnthropic,
  SiClaude,
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
  SiGoogle,
  SiGooglegemini,
  SiDocker,
  SiAirtable,
  SiZendesk,
} from "react-icons/si";
import {
  LuDatabase,
  LuLayers,
  LuSlidersHorizontal,
  LuPlug,
  LuWebhook,
  LuSlack,
} from "react-icons/lu";
import { TbBrandOpenai } from "react-icons/tb";
import { GoHighLevel } from "@/components/icons/GoHighLevel";
import { Antigravity } from "@/components/icons/Antigravity";
import { Reveal } from "@/components/Reveal";
import { ColorBlob } from "@/components/ColorBlob";

type StackItem = { label: string; icon?: IconType };

const categories: { label: string; items: StackItem[] }[] = [
  {
    label: "AI",
    items: [
      { label: "Claude / Anthropic API", icon: SiAnthropic },
      { label: "Claude Code", icon: SiClaudecode },
      { label: "OpenAI", icon: TbBrandOpenai },
      { label: "Gemini", icon: SiGooglegemini },
      { label: "Claude Cowork", icon: SiClaude },
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
      { label: "Docker", icon: SiDocker },
      { label: "Antigravity", icon: Antigravity },
    ],
  },
  {
    label: "CRM & Productivity",
    items: [
      { label: "HubSpot", icon: SiHubspot },
      { label: "GoHighLevel", icon: GoHighLevel },
      { label: "Notion", icon: SiNotion },
      { label: "Slack", icon: LuSlack },
      { label: "Google Workspace", icon: SiGoogle },
      { label: "Airtable", icon: SiAirtable },
      { label: "Zendesk", icon: SiZendesk },
    ],
  },
];

export function Stack() {
  return (
    <section
      id="stack"
      className="relative overflow-hidden border-t border-border bg-wash"
    >
      <ColorBlob
        className="right-0 bottom-0 translate-x-1/4 translate-y-1/3"
        size={460}
        opacity={0.17}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-28">
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
