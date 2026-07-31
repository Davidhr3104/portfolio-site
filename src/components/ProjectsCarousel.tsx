"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import type { Project } from "@/data/projects";
import { CaseModal } from "@/components/CaseModal";

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
  const [caseOpen, setCaseOpen] = useState(false);
  const dragState = useRef({ startX: 0, startScroll: 0, dragging: false, moved: false });

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

  // Native (non-passive) wheel listener so vertical mouse-wheel scroll
  // moves the carousel horizontally instead of scrolling the page --
  // React's synthetic onWheel is passive by default and can't preventDefault.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    function onWheel(e: WheelEvent) {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      e.preventDefault();
      track!.scrollLeft += e.deltaY;
    }
    track.addEventListener("wheel", onWheel, { passive: false });
    return () => track.removeEventListener("wheel", onWheel);
  }, []);

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
      moved: false,
    };
    trackRef.current.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (!dragState.current.dragging || !trackRef.current) return;
    const delta = e.clientX - dragState.current.startX;
    if (Math.abs(delta) > 5) dragState.current.moved = true;
    trackRef.current.scrollLeft = dragState.current.startScroll - delta;
  }

  function handlePointerUp(e: ReactPointerEvent<HTMLDivElement>) {
    dragState.current.dragging = false;
    if (trackRef.current?.hasPointerCapture(e.pointerId)) {
      trackRef.current.releasePointerCapture(e.pointerId);
    }
  }

  function handleCardClick(i: number) {
    if (dragState.current.moved) {
      // This click was the tail end of a drag, not an intentional select/open.
      dragState.current.moved = false;
      return;
    }
    if (i !== active) {
      setActive(i);
      scrollToIndex(i);
    } else {
      setCaseOpen(true);
    }
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
        className="no-scrollbar mt-10 flex cursor-grab items-center gap-6 overflow-x-auto scroll-smooth px-4 py-6 active:cursor-grabbing"
        style={{ scrollSnapType: "x proximity" }}
      >
        {projects.map((project, i) => (
          <button
            key={project.slug}
            type="button"
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            onClick={() => handleCardClick(i)}
            onMouseEnter={() => setActive(i)}
            style={{ scrollSnapAlign: "center" }}
            aria-label={
              i === active ? `Open case study for ${project.title}` : `View ${project.title}`
            }
            aria-current={i === active}
            className={`group relative aspect-3/4 w-[220px] shrink-0 origin-center overflow-hidden border outline-hidden transition-all duration-300 ease-out focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-[260px] ${
              i === active
                ? "z-10 scale-110 border-accent opacity-100"
                : "scale-[0.85] border-border opacity-45 hover:opacity-70"
            }`}
          >
            {project.hasImage ? (
              <Image
                src={`/projects/${project.image}`}
                alt={`${project.title} — screenshot`}
                fill
                sizes="260px"
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

      <div className="mt-6 max-w-2xl">
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
        <button
          type="button"
          onClick={() => setCaseOpen(true)}
          className="mt-5 inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.12em] text-accent outline-hidden transition-colors hover:text-gold focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          View full case
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <CaseModal
        project={caseOpen ? activeProject : null}
        onClose={() => setCaseOpen(false)}
      />
    </div>
  );
}
