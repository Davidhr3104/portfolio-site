"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { LuArrowUpRight, LuX, LuZoomIn } from "react-icons/lu";
import type { Item } from "@/components/ProjectsCarousel";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { useLocale } from "@/components/LocaleProvider";

export function CaseModal({
  project,
  onClose,
}: {
  project: Item | null;
  onClose: () => void;
}) {
  const { locale, t } = useLocale();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<HTMLDivElement>(null);
  const [zoomOpen, setZoomOpen] = useState(false);
  const zoomOpenRef = useRef(zoomOpen);

  useEffect(() => {
    zoomOpenRef.current = zoomOpen;
  }, [zoomOpen]);

  useFocusTrap(modalRef, !!project && !zoomOpen);
  useFocusTrap(zoomRef, !!(zoomOpen && project?.hasImage));

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      if (zoomOpenRef.current) {
        setZoomOpen(false);
      } else {
        onClose();
      }
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project || typeof document === "undefined") return null;

  const sections = [
    { key: "problem", label: t.projects.sections.problem },
    { key: "approach", label: t.projects.sections.approach },
    { key: "result", label: t.projects.sections.result },
  ] as const;

  const imageAlt = project.imageAlt[locale];

  function closeModal() {
    setZoomOpen(false);
    onClose();
  }

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-modal-title"
      onClick={closeModal}
      className="fixed inset-0 z-100 flex items-center justify-center bg-background/80 p-6 backdrop-blur-xs"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] w-full max-w-3xl overflow-y-auto border border-border bg-background p-8 sm:p-10"
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-serif text-lg text-accent">{project.index}</p>
            <h2
              id="case-modal-title"
              className="mt-1 font-serif text-2xl leading-tight text-foreground sm:text-3xl"
            >
              {project.title[locale]}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeModal}
            aria-label={t.projects.closeAria}
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-border text-foreground/70 outline-hidden transition-colors hover:border-accent hover:text-accent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <LuX size={16} aria-hidden="true" />
          </button>
        </div>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-sm border border-border px-2.5 py-1 font-sans text-xs uppercase tracking-[0.08em] text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        {project.hasImage && (
          <button
            type="button"
            onClick={() => setZoomOpen(true)}
            aria-label={t.projects.zoomAria(imageAlt)}
            className="group relative mt-6 aspect-video w-full cursor-zoom-in overflow-hidden border border-border bg-surface outline-hidden focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Image
              src={`/projects/${project.image}`}
              alt={imageAlt}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-contain"
            />
            <span className="absolute right-3 bottom-3 flex h-8 w-8 items-center justify-center border border-border bg-background/80 text-foreground/70 opacity-0 backdrop-blur-xs transition-opacity duration-200 group-hover:opacity-100">
              <LuZoomIn size={15} aria-hidden="true" />
            </span>
          </button>
        )}

        <div className="mt-8 space-y-6">
          {sections.map((section) => (
            <div key={section.key}>
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-accent">
                {section.label}
              </p>
              <p className="mt-2 font-sans text-base leading-relaxed text-foreground/80">
                {project.caseStudy[section.key][locale]}
              </p>
            </div>
          ))}
        </div>

        {project.demoHref && (
          <a
            href={project.demoHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 border border-accent px-4 py-2 font-sans text-sm uppercase tracking-[0.12em] text-accent outline-hidden transition-colors hover:bg-accent hover:text-background focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            {t.projects.tryLiveDemo}
            <LuArrowUpRight size={15} aria-hidden="true" />
          </a>
        )}
      </div>

      {zoomOpen && project.hasImage && (
        <div
          ref={zoomRef}
          role="dialog"
          aria-modal="true"
          aria-label={imageAlt}
          onClick={(e) => {
            e.stopPropagation();
            setZoomOpen(false);
          }}
          className="fixed inset-0 z-110 flex items-center justify-center bg-background/95 p-6 backdrop-blur-xs"
        >
          <button
            type="button"
            onClick={() => setZoomOpen(false)}
            aria-label={t.projects.closeZoomAria}
            className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center border border-border text-foreground/70 outline-hidden transition-colors hover:border-accent hover:text-accent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <LuX size={16} aria-hidden="true" />
          </button>
          <div className="relative h-full max-h-[90vh] w-full max-w-6xl">
            <Image
              src={`/projects/${project.image}`}
              alt={imageAlt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>,
    document.body
  );
}
