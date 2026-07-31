import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { ColorBlob } from "@/components/ColorBlob";
import { SectionLabel } from "@/components/SectionLabel";

type Project = {
  index: string;
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    index: "01",
    title: "Confidence-Scored Extraction Agent",
    description:
      "Pulls structured fields from unstructured documents — invoices, contracts, resumes — and attaches a confidence score plus the exact source quote behind each value, so reviewers know at a glance what to trust and what to check by hand.",
    image: "confidence-extraction.png",
  },
  {
    index: "02",
    title: "AI Lead Scoring System — 90% Less Qualification Time",
    description:
      "Scores inbound leads against a firm's own qualification criteria in real time, cutting manual review time by 90% while keeping a clear, inspectable rationale attached to every score.",
    image: "lead-scoring.png",
  },
  {
    index: "03",
    title: "Internal Knowledge Assistant",
    description:
      "A retrieval-augmented assistant that answers only from a company's internal documentation, citing the exact source and passage behind every response — and declining to answer when nothing relevant is found.",
    image: "rag-assistant.png",
  },
  {
    index: "04",
    title: "Multi-System Sync Dashboard",
    description:
      "Reconciles records across CRM, billing, and operations systems, surfaces drift field by field, and tracks which discrepancies have been reviewed versus resolved at the source.",
    image: "sync-dashboard.png",
  },
  {
    index: "05",
    title: "CEO Inbox Automation — $800/mo Recovered",
    description:
      "Triages and prioritizes an executive inbox automatically, surfacing what matters and drafting responses — recovering roughly $800 per month in previously missed follow-ups and opportunities.",
    image: "ceo-inbox.png",
  },
];

function projectImageExists(filename: string) {
  return fs.existsSync(
    path.join(process.cwd(), "public", "projects", filename)
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden border-t border-border">
      <ColorBlob
        className="top-0 right-0 -translate-y-1/5 translate-x-[10%]"
        size={480}
        opacity={0.20}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <Reveal>
          <SectionLabel>Selected Work</SectionLabel>
        </Reveal>

        <div className="mt-4">
          {projects.map((project, i) => {
            const hasImage = projectImageExists(project.image);
            return (
              <Reveal key={project.index} as="article" delay={i * 60}>
                <div className="group grid grid-cols-1 items-start gap-6 border-t border-border px-4 py-14 -mx-4 first:border-t-0 transition-colors duration-300 hover:bg-wash lg:grid-cols-[64px_1fr_1fr] lg:gap-12">
                  <span className="font-serif text-2xl text-accent transition-transform duration-300 group-hover:translate-x-1">
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
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-surface transition-colors duration-300 group-hover:border-accent/50">
                    {hasImage ? (
                      <Image
                        src={`/projects/${project.image}`}
                        alt={`${project.title} — screenshot`}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted">
                          Screenshot
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
