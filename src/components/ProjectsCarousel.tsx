"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import type { Project } from "@/data/projects";

type Item = Project & { hasImage: boolean };

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

const arrowClass =
  "flex h-9 w-9 items-center justify-center border border-border text-foreground/70 outline-hidden transition-colors hover:border-accent hover:text-accent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-30 disabled:hover:border-border disabled:hover:text-foreground/70";

export function ProjectsCarousel({ projects }: { projects: Item[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const dragState = useRef({ startX: 0, startScroll: 0, dragging: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = cardRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) setActive(idx);
          }
        }
      },
      { root: track, threshold: 0.6 }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [projects.length]);

  function scrollToIndex(i: number) {
    const clamped = Math.max(0, Math.min(projects.length - 1, i));
    cardRefs.current[clamped]?.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  function handlePointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse" || !trackRef.current) return;
    dragState.current = {
      startX: e.clientX,
      startScroll: trackRef.current.scrollLeft,
      dragging: true,
    };
    trackRef.current.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (!dragState.current.dragging || !trackRef.current) return;
    trackRef.current.scrollLeft =
      dragState.current.startScroll - (e.clientX - dragState.current.startX);
  }

  function handlePointerUp() {
    dragState.current.dragging = false;
  }

  const activeProject = projects[active];

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <span className="font-sans text-sm text-muted">
          <span className="text-foreground">
            {String(active + 1).padStart(2, "0")}
          </span>{" "}
          / {String(projects.length).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous project"
            disabled={active === 0}
            onClick={() => scrollToIndex(active - 1)}
            className={arrowClass}
          >
            <LuChevronLeft size={16} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next project"
            disabled={active === projects.length - 1}
            onClick={() => scrollToIndex(active + 1)}
            className={arrowClass}
          >
            <LuChevronRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="no-scrollbar mt-6 flex cursor-grab gap-5 overflow-x-auto scroll-smooth pb-2 active:cursor-grabbing"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {projects.map((project, i) => (
          <button
            key={project.index}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            type="button"
            onClick={() => scrollToIndex(i)}
            style={{ scrollSnapAlign: "center" }}
            aria-label={`View ${project.title}`}
            aria-current={i === active}
            className={`group relative aspect-3/4 w-[240px] shrink-0 overflow-hidden border outline-hidden transition-all duration-300 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-[280px] ${
              i === active
                ? "border-accent opacity-100"
                : "border-border opacity-60 hover:opacity-90"
            }`}
          >
            {project.hasImage ? (
              <Image
                src={`/projects/${project.image}`}
                alt={`${project.title} — screenshot`}
                fill
                sizes="280px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-surface">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted">
                  Screenshot
                </span>
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-background/95 via-background/50 to-transparent p-4 pt-12 text-left">
              <span className="font-serif text-lg text-accent">
                {project.index}
              </span>
              <p className="mt-1 line-clamp-2 font-serif text-base leading-snug text-foreground">
                {project.title}
              </p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-10 max-w-2xl">
        <ul className="flex flex-wrap gap-2">
          {activeProject.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-sm border border-border px-2.5 py-1 font-sans text-xs uppercase tracking-[0.08em] text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
        <h3 className="mt-4 font-serif text-2xl leading-tight text-foreground sm:text-3xl">
          {activeProject.title}
        </h3>
        <p className="mt-4 font-sans text-base leading-relaxed text-foreground/80">
          {activeProject.description}
        </p>
      </div>
    </div>
  );
}
