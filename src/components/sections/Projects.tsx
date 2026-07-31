import { Reveal } from "@/components/Reveal";

type Project = {
  index: string;
  title: string;
  description: string;
};

const projects: Project[] = [
  {
    index: "01",
    title: "Confidence-Scored Extraction Agent",
    description:
      "Pulls structured fields from unstructured documents — invoices, contracts, resumes — and attaches a confidence score plus the exact source quote behind each value, so reviewers know at a glance what to trust and what to check by hand.",
  },
  {
    index: "02",
    title: "AI Lead Scoring System — 90% Less Qualification Time",
    description:
      "Scores inbound leads against a firm's own qualification criteria in real time, cutting manual review time by 90% while keeping a clear, inspectable rationale attached to every score.",
  },
  {
    index: "03",
    title: "Internal Knowledge Assistant",
    description:
      "A retrieval-augmented assistant that answers only from a company's internal documentation, citing the exact source and passage behind every response — and declining to answer when nothing relevant is found.",
  },
  {
    index: "04",
    title: "Multi-System Sync Dashboard",
    description:
      "Reconciles records across CRM, billing, and operations systems, surfaces drift field by field, and tracks which discrepancies have been reviewed versus resolved at the source.",
  },
  {
    index: "05",
    title: "CEO Inbox Automation — $800/mo Recovered",
    description:
      "Triages and prioritizes an executive inbox automatically, surfacing what matters and drafting responses — recovering roughly $800 per month in previously missed follow-ups and opportunities.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <Reveal>
          <h2 className="font-sans text-sm uppercase tracking-[0.2em] text-muted">
            Selected Work
          </h2>
        </Reveal>

        <div className="mt-4">
          {projects.map((project, i) => (
            <Reveal key={project.index} as="article" delay={i * 40}>
              <div className="grid grid-cols-1 items-start gap-6 border-t border-border py-14 first:border-t-0 md:grid-cols-[64px_1fr_1fr] md:gap-12">
                <span className="font-serif text-2xl text-muted">
                  {project.index}
                </span>
                <div>
                  <h3 className="font-serif text-2xl leading-tight text-foreground sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-foreground/80">
                    {project.description}
                  </p>
                </div>
                <div className="flex aspect-[4/3] w-full items-center justify-center border border-border bg-surface">
                  <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted">
                    Screenshot
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
