export type Project = {
  index: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Confidence-Scored Extraction Agent",
    description:
      "Pulls structured fields from unstructured documents — invoices, contracts, resumes — and attaches a confidence score plus the exact source quote behind each value, so reviewers know at a glance what to trust and what to check by hand.",
    image: "confidence-extraction.png",
    tags: ["Claude API", "TypeScript", "Next.js"],
  },
  {
    index: "02",
    title: "AI Lead Scoring System — 90% Less Qualification Time",
    description:
      "Scores inbound leads against a firm's own qualification criteria in real time, cutting manual review time by 90% while keeping a clear, inspectable rationale attached to every score.",
    image: "lead-scoring.png",
    tags: ["Claude API", "Supabase", "Next.js"],
  },
  {
    index: "03",
    title: "Internal Knowledge Assistant",
    description:
      "A retrieval-augmented assistant that answers only from a company's internal documentation, citing the exact source and passage behind every response — and declining to answer when nothing relevant is found.",
    image: "rag-assistant.png",
    tags: ["Claude API", "Embeddings", "Supabase"],
  },
  {
    index: "04",
    title: "Multi-System Sync Dashboard",
    description:
      "Reconciles records across CRM, billing, and operations systems, surfaces drift field by field, and tracks which discrepancies have been reviewed versus resolved at the source.",
    image: "sync-dashboard.png",
    tags: ["Next.js", "Supabase", "TypeScript"],
  },
  {
    index: "05",
    title: "CEO Inbox Automation — $800/mo Recovered",
    description:
      "Triages and prioritizes an executive inbox automatically, surfacing what matters and drafting responses — recovering roughly $800 per month in previously missed follow-ups and opportunities.",
    image: "ceo-inbox.png",
    tags: ["Claude API", "n8n", "Node.js"],
  },
];
