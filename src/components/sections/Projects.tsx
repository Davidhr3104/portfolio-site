import fs from "node:fs";
import path from "node:path";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { GlossySphereCorner } from "@/components/GlossySphere";
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
      <GlossySphereCorner
        corner="top-right"
        primaryColor="var(--color-accent)"
        secondaryColor="var(--color-foreground)"
        secondaryOpacity={0.55}
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
