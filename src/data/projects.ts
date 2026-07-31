export type Project = {
  slug: string;
  index: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  caseStudy: {
    problem: string;
    approach: string;
    result: string;
  };
};

export const projects: Project[] = [
  {
    slug: "confidence-extraction",
    index: "01",
    title: "Confidence-Scored Extraction Agent",
    description:
      "Pulls structured fields from unstructured documents — invoices, contracts, resumes — and attaches a confidence score plus the exact source quote behind each value, so reviewers know at a glance what to trust and what to check by hand.",
    image: "confidence-extraction.png",
    tags: ["Claude API", "TypeScript", "Next.js"],
    caseStudy: {
      problem:
        "Manual document review doesn't scale — reviewers were re-checking every extracted field by hand because there was no way to tell which values were safe to trust and which needed a second look.",
      approach:
        "Built on Claude's tool-use to force structured output per field, then required each value to carry the exact source substring it was extracted from. Confidence isn't just the model's self-reported certainty — it's checked against whether the quoted evidence actually supports the value, so a fluent but wrong answer can't pass as high-confidence.",
      result:
        "Reviewers now only open the fields flagged below threshold, cutting manual verification down to the minority of extractions that genuinely need a human — with an audit trail showing exactly why each value was trusted.",
    },
  },
  {
    slug: "lead-scoring",
    index: "02",
    title: "AI Lead Scoring System — 90% Less Qualification Time",
    description:
      "Scores inbound leads against a firm's own qualification criteria in real time, cutting manual review time by 90% while keeping a clear, inspectable rationale attached to every score.",
    image: "lead-scoring.png",
    tags: ["Claude API", "Supabase", "Next.js"],
    caseStudy: {
      problem:
        "Sales reps were spending hours a week manually triaging inbound leads against qualification criteria that lived in a spreadsheet, with no consistency between reps.",
      approach:
        "Codified the firm's own qualification rules as structured criteria, then used Claude to score each lead against them in real time and generate a plain-language rationale — not just a number, but the reasoning a rep would need to trust or challenge it.",
      result:
        "Qualification time dropped 90%, and because every score ships with its rationale, reps can spot-check the AI's judgment instead of taking it on faith.",
    },
  },
  {
    slug: "rag-assistant",
    index: "03",
    title: "Internal Knowledge Assistant",
    description:
      "A retrieval-augmented assistant that answers only from a company's internal documentation, citing the exact source and passage behind every response — and declining to answer when nothing relevant is found.",
    image: "rag-assistant.png",
    tags: ["Claude API", "Embeddings", "Supabase"],
    caseStudy: {
      problem:
        "Internal documentation existed but nobody trusted it enough to rely on — search either returned nothing or too much, with no way to know if an answer was actually grounded in the source.",
      approach:
        "A RAG pipeline (Voyage embeddings, Supabase pgvector) retrieves the actual passages behind every answer, and the assistant is instructed to answer only from what it retrieved, citing the exact document and passage — refusing outright when nothing relevant comes back instead of guessing.",
      result:
        "Every answer is traceable to a real passage, and the refusal path — arguably the more important feature — means the assistant never quietly fills a gap with a plausible-sounding fabrication.",
    },
  },
  {
    slug: "sync-dashboard",
    index: "04",
    title: "Multi-System Sync Dashboard",
    description:
      "Reconciles records across CRM, billing, and operations systems, surfaces drift field by field, and tracks which discrepancies have been reviewed versus resolved at the source.",
    image: "sync-dashboard.png",
    tags: ["Next.js", "Supabase", "TypeScript"],
    caseStudy: {
      problem:
        "CRM, billing, and an operations spreadsheet drifted out of sync silently — nobody noticed a mismatch until it caused a real problem downstream.",
      approach:
        "Field-by-field and record-level reconciliation across all three systems, run on a schedule, with discrepancies tracked by fingerprint so a fix — or a false alarm — is resolved permanently instead of re-flagging the same drift every run.",
      result:
        "Drift is caught within a day instead of being discovered by accident weeks later, with a review queue that shows exactly what changed and where.",
    },
  },
  {
    slug: "ceo-inbox",
    index: "05",
    title: "CEO Inbox Automation — $800/mo Recovered",
    description:
      "Triages and prioritizes an executive inbox automatically, surfacing what matters and drafting responses — recovering roughly $800 per month in previously missed follow-ups and opportunities.",
    image: "ceo-inbox.png",
    tags: ["Claude API", "n8n", "Node.js"],
    caseStudy: {
      problem:
        "A high-volume inbox meant real opportunities were getting buried under routine messages, and manually triaging every email cost more time than it saved.",
      approach:
        "An automation layer prioritizes messages by what actually needs a response and drafts replies for the routine cases, while surfacing the rest — deterministic rules handle sorting, the model only drafts language.",
      result:
        "Roughly $800 a month in previously missed follow-ups recovered, with response time on real opportunities cut from days to hours.",
    },
  },
];
