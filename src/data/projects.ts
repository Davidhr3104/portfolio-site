export type Project = {
  slug: string;
  index: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
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
      "Teams pulling data from documents by hand had no way to know what was actually safe to trust. This extracts structured fields from invoices, contracts, and resumes — scoring each value's confidence and citing the exact source it came from.",
    image: "confidence-extraction.png",
    imageAlt:
      "Confidence Extraction Demo interface showing structured invoice fields with per-field confidence scores and cited source text",
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
      "A sales team was losing hours a week manually reviewing every inbound lead against criteria that lived in a spreadsheet. This scores and filters leads in real time against the firm's own rules, attaching the reasoning behind each call — cutting qualification time by 90%.",
    image: "lead-scoring.png",
    imageAlt:
      "AI Lead Qualifier automation workflow showing lead scoring, a Google Sheets logging step, and a conditional branch into AI-drafted follow-up emails",
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
      "Answers to internal questions lived scattered across documents nobody had time to search through. This retrieval-augmented assistant answers only from that documentation, citing the exact source and passage — and says so when nothing relevant is found.",
    image: "rag-assistant.png",
    imageAlt:
      "Internal Knowledge Assistant chat interface showing a sourced answer with cited SOP passages and retrieval-match percentages",
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
      "A business running multiple systems had no way to catch when records drifted out of sync. This reconciles CRM, billing, and operations data, surfacing drift field by field and tracking what's been reviewed versus resolved.",
    image: "sync-dashboard.png",
    imageAlt:
      "Sync and Drift Dashboard showing CRM, Billing, and Ops Tracker discrepancies alongside a sync health chart over time",
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
      "An executive was spending hours a week just sorting through email before getting to anything that mattered. This classifies and prioritizes messages automatically, drafting responses for the routine ones and surfacing the rest — recovering roughly $800/month in previously missed follow-ups.",
    image: "ceo-inbox.png",
    imageAlt:
      "CEO inbox automation workflow showing a new email triggering AI analysis and branching into urgent, spam, client, and internal paths",
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
