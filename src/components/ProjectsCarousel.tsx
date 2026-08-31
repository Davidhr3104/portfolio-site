"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent, PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { PROBLEM_TYPES, type Project, type ProblemType } from "@/data/projects";
import { CaseModal } from "@/components/CaseModal";
import { useLocale } from "@/components/LocaleProvider";
import { SectionLabel } from "@/components/SectionLabel";
import { PROJECT_IMAGE_BLUR_DATA_URL } from "@/lib/image-placeholder";

export type Item = Project & { hasImage: boolean };

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

const arrowClass =
  "relative flex h-9 w-9 items-center justify-center border border-muted text-foreground/70 outline-hidden transition-colors before:absolute before:-inset-1 before:content-[''] hover:border-accent hover:text-accent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-30 disabled:hover:border-muted disabled:hover:text-foreground/70";

const filterPillClass = (active: boolean) =>
  `glossy-pill px-3.5 py-1.5 font-sans text-xs uppercase tracking-[0.1em] outline-hidden ${
    active ? "glossy-pill--active" : ""
  }`;

export function ProjectsCarousel({ projects }: { projects: Item[] }) {
  const { locale, t } = useLocale();
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [caseOpen, setCaseOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<ProblemType | null>(null);
  const dragState = useRef({ startX: 0, startScroll: 0, dragging: false, moved: false });
  const isProgrammaticScroll = useRef(false);
  const programmaticScrollTimeout = useRef<number | undefined>(undefined);

  // Track which card is active by finding the one closest to the track's
  // horizontal center -- but only in response to free-form scrolling (drag,
  // wheel). Explicit navigation (arrows, clicking a card) sets `active`
  // directly instead of relying on this, because the first/last card can
  // never be scrolled to true center (the track hits its scroll bounds
  // first), so a pure "closest to center" reading would never select them.
  // An earlier IntersectionObserver-based version had the same class of bug:
  // the active card's own scale-110 transform shifts neighbors' visibility
  // ratios, so it could latch onto the wrong card, especially on mount.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function updateActiveFromScroll() {
      if (!track) return;
      const trackRect = track.getBoundingClientRect();
      const trackCenter = trackRect.left + trackRect.width / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const cardRect = el.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const dist = Math.abs(cardCenter - trackCenter);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      });
      setActive(bestIdx);
    }

    let raf = 0;
    function onScroll() {
      if (isProgrammaticScroll.current) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateActiveFromScroll);
    }

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      window.clearTimeout(programmaticScrollTimeout.current);
    };
  }, [projects.length]);

  function scrollToIndex(i: number) {
    const clamped = Math.max(0, Math.min(projects.length - 1, i));
    setActive(clamped);

    const track = trackRef.current;
    isProgrammaticScroll.current = true;
    window.clearTimeout(programmaticScrollTimeout.current);
    function clearProgrammaticFlag() {
      // A short grace period after the scroll actually settles: the browser
      // recomputes :hover (and can fire mouseenter) on the next frame after
      // scrollend for whatever card the stationary cursor ends up over, so
      // clearing the flag exactly on scrollend still lets that late hover
      // through and overwrite the index we just navigated to.
      window.setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 150);
      track?.removeEventListener("scrollend", clearProgrammaticFlag);
    }
    // Prefer the native "scrollend" event over a guessed timeout -- a fixed
    // timeout races the actual (variable-length) smooth-scroll animation: if
    // the animation runs long, a late scroll event slips through and can
    // overwrite the just-set active index with a mid-flight reading.
    track?.addEventListener("scrollend", clearProgrammaticFlag, { once: true });
    programmaticScrollTimeout.current = window.setTimeout(clearProgrammaticFlag, 1200);

    cardRefs.current[clamped]?.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  function selectFilter(filter: ProblemType | null) {
    setActiveFilter(filter);
    if (!filter) return;
    const firstMatch = projects.findIndex((p) =>
      p.problemTypes.includes(filter)
    );
    if (firstMatch !== -1) scrollToIndex(firstMatch);
  }

  function handlePointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse" || !trackRef.current) return;
    dragState.current = {
      startX: e.clientX,
      startScroll: trackRef.current.scrollLeft,
      dragging: true,
      moved: false,
    };
    // Pointer capture is intentionally NOT acquired here. Capturing on every
    // press (even a plain click) retargets the resulting `click` event's
    // compatibility target to this track element instead of the card button
    // underneath the cursor, so the button's onClick never fires. Capture is
    // acquired lazily in handlePointerMove, only once real drag movement is
    // confirmed -- a plain click never crosses that threshold, so it's
    // never captured and reaches the card's onClick normally.
  }

  function handlePointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (!dragState.current.dragging || !trackRef.current) return;
    const delta = e.clientX - dragState.current.startX;
    if (Math.abs(delta) > 5 && !dragState.current.moved) {
      dragState.current.moved = true;
      trackRef.current.setPointerCapture(e.pointerId);
    }
    if (dragState.current.moved) {
      trackRef.current.scrollLeft = dragState.current.startScroll - delta;
    }
  }

  function handlePointerUp(e: ReactPointerEvent<HTMLDivElement>) {
    dragState.current.dragging = false;
    if (trackRef.current?.hasPointerCapture(e.pointerId)) {
      trackRef.current.releasePointerCapture(e.pointerId);
    }
  }

  function handleTrackKeyDown(e: ReactKeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollToIndex(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollToIndex(active - 1);
    }
  }

  function handleCardClick(i: number) {
    if (dragState.current.moved) {
      // This click was the tail end of a drag, not an intentional select/open.
      dragState.current.moved = false;
      return;
    }
    if (i !== active) {
      scrollToIndex(i);
    } else {
      setCaseOpen(true);
    }
  }

  const activeProject = projects[active];

  return (
    <div className="mt-8" role="region" aria-label={t.projects.carouselAria}>
      <SectionLabel>{t.projects.label}</SectionLabel>
      <span className="sr-only" aria-live="polite">
        {t.projects.positionAnnouncement(activeProject.title[locale], active + 1, projects.length)}
      </span>
      <div className="mt-6 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => selectFilter(null)}
          aria-pressed={activeFilter === null}
          className={filterPillClass(activeFilter === null)}
        >
          {t.projects.filterAll}
        </button>
        {PROBLEM_TYPES.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => selectFilter(type)}
            aria-pressed={activeFilter === type}
            className={filterPillClass(activeFilter === type)}
          >
            {t.projects.problemTypeLabels[type]}
          </button>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="font-sans text-sm text-muted">
          <span className="text-foreground">
            {String(active + 1).padStart(2, "0")}
          </span>{" "}
          / {String(projects.length).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={t.projects.prevAria}
            disabled={active === 0}
            onClick={() => scrollToIndex(active - 1)}
            className={arrowClass}
          >
            <CaretLeft size={16} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={t.projects.nextAria}
            disabled={active === projects.length - 1}
            onClick={() => scrollToIndex(active + 1)}
            className={arrowClass}
          >
            <CaretRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onKeyDown={handleTrackKeyDown}
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
            onMouseEnter={() => {
              // Ignore hover while a programmatic scroll is animating: the
              // cursor can stay put on screen while content slides under it,
              // and the browser fires mouseenter for whatever card ends up
              // there -- silently overriding the index we just navigated to.
              if (isProgrammaticScroll.current) return;
              setActive(i);
            }}
            style={{ scrollSnapAlign: "center" }}
            aria-label={
              i === active
                ? t.projects.openCaseAria(project.title[locale])
                : t.projects.viewAria(project.title[locale])
            }
            aria-current={i === active}
            className={`group relative aspect-3/4 w-[220px] shrink-0 origin-center overflow-hidden border bg-surface outline-hidden transition-all duration-300 ease-out focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-[260px] ${
              i === active
                ? "z-10 scale-110 border-accent opacity-100"
                : "scale-[0.85] border-border opacity-45 hover:opacity-70"
            }`}
          >
            {project.hasImage ? (
              <Image
                src={`/projects/${project.image}`}
                alt={project.imageAlt[locale]}
                fill
                sizes="260px"
                placeholder="blur"
                blurDataURL={PROJECT_IMAGE_BLUR_DATA_URL}
                className="object-contain"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-surface">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted">
                  {t.projects.screenshotPlaceholder}
                </span>
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-background/95 via-background/50 to-transparent p-4 pt-12 text-left">
              <span className="font-serif text-lg text-accent">
                {project.index}
              </span>
              <p className="mt-1 line-clamp-2 font-serif text-base leading-snug text-foreground">
                {project.title[locale]}
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
          {activeProject.title[locale]}
        </h3>
        <p className="mt-4 font-sans text-base leading-relaxed text-foreground/80">
          {activeProject.description[locale]}
        </p>
        <button
          type="button"
          onClick={() => setCaseOpen(true)}
          className="mt-5 inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.12em] text-accent outline-hidden transition-colors hover:text-gold focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {t.projects.viewFullCase}
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
