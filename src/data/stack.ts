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

export type StackItem = { label: string; icon?: IconType };

export const stackCategories: { label: string; items: StackItem[] }[] = [
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
      { label: "Slack", icon: LuSlack },
      { label: "Google Workspace", icon: SiGoogle },
      { label: "Airtable", icon: SiAirtable },
      { label: "Zendesk", icon: SiZendesk },
    ],
  },
];

export const stackItemsWithIcon: Required<StackItem>[] = stackCategories
  .flatMap((c) => c.items)
  .filter((item): item is Required<StackItem> => Boolean(item.icon));
