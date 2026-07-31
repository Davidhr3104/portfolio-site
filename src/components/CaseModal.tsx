"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { LuX } from "react-icons/lu";
import type { Project } from "@/data/projects";

const sections = [
  { key: "problem", label: "Problem" },
  { key: "approach", label: "Approach" },
  { key: "result", label: "Result" },
] as const;

export function CaseModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project || typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-100 flex items-center justify-center bg-background/80 p-6 backdrop-blur-xs"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto border border-border bg-background p-8 sm:p-10"
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-serif text-lg text-accent">{project.index}</p>
            <h2
              id="case-modal-title"
              className="mt-1 font-serif text-2xl leading-tight text-foreground sm:text-3xl"
            >
              {project.title}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
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

        <div className="mt-8 space-y-6">
          {sections.map((section) => (
            <div key={section.key}>
              <p className="font-sans text-xs uppercase tracking-[0.15em] text-accent">
                {section.label}
              </p>
              <p className="mt-2 font-sans text-base leading-relaxed text-foreground/80">
                {project.caseStudy[section.key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}
