import type { ComponentType } from "react";
import {
  SiAnthropic,
  SiClaude,
  SiClaudecode,
  SiN8N,
  SiMake,
  SiZapier,
  SiNextdotjs,
  SiTypescript,
  SiPython,
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
  SiCursor,
  SiQwen,
  SiAsana,
} from "react-icons/si";
import { TbBrandOpenai, TbBrandSlack } from "react-icons/tb";
import {
  Database,
  Stack as StackIcon,
  Sliders,
  Plugs,
  Lightning,
} from "@phosphor-icons/react";
import { GoHighLevel } from "@/components/icons/GoHighLevel";
import { Antigravity } from "@/components/icons/Antigravity";

type StackIconComponent = ComponentType<{
  size?: number;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}>;

export type StackItem = { label: string; icon?: StackIconComponent };

export const stackCategories: { label: string; items: StackItem[] }[] = [
  {
    label: "AI",
    items: [
      { label: "Claude / Anthropic API", icon: SiAnthropic },
      { label: "Claude Code", icon: SiClaudecode },
      { label: "OpenAI", icon: TbBrandOpenai },
      { label: "Gemini", icon: SiGooglegemini },
      { label: "Claude Cowork", icon: SiClaude },
      { label: "Cursor", icon: SiCursor },
      { label: "Qwen", icon: SiQwen },
      { label: "RAG pipelines", icon: Database },
      { label: "Embeddings (Voyage AI)", icon: StackIcon },
      { label: "Prompt design & evaluation", icon: Sliders },
    ],
  },
  {
    label: "Automation",
    items: [
      { label: "n8n", icon: SiN8N },
      { label: "Make", icon: SiMake },
      { label: "Zapier", icon: SiZapier },
      { label: "Model Context Protocol (MCP)", icon: Plugs },
      { label: "Webhooks & scheduled jobs", icon: Lightning },
    ],
  },
  {
    label: "Full-Stack",
    items: [
      { label: "Next.js / React", icon: SiNextdotjs },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Python", icon: SiPython },
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
      { label: "Slack", icon: TbBrandSlack },
      { label: "Asana", icon: SiAsana },
      { label: "Google Workspace", icon: SiGoogle },
      { label: "Airtable", icon: SiAirtable },
      { label: "Zendesk", icon: SiZendesk },
    ],
  },
];

export const stackItemsWithIcon: Required<StackItem>[] = stackCategories
  .flatMap((c) => c.items)
  .filter((item): item is Required<StackItem> => Boolean(item.icon));
