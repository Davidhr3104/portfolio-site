import fs from "node:fs";
import path from "node:path";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { ColorBlob } from "@/components/ColorBlob";
import { SectionLabel } from "@/components/SectionLabel";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";

function projectImageExists(filename: string) {
  return fs.existsSync(
    path.join(process.cwd(), "public", "projects", filename)
  );
}

export function Projects() {
  const items = projects.map((project) => ({
    ...project,
    hasImage: projectImageExists(project.image),
  }));

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-border"
    >
      <ColorBlob
        className="top-0 right-0 -translate-y-1/5 translate-x-[10%]"
        size={480}
        opacity={0.2}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-32 sm:py-40 lg:py-48">
        <Reveal>
          <SectionLabel>Selected Work</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <ProjectsCarousel projects={items} />
        </Reveal>
      </div>
    </section>
  );
}
