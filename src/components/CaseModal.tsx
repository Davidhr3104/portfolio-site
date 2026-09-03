"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  ArrowUpRight,
  X,
  MagnifyingGlassPlus,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";
import type { Item } from "@/components/ProjectsCarousel";
import type { LocalizedText, MediaItem } from "@/data/projects";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { useLocale } from "@/components/LocaleProvider";
import { PROJECT_IMAGE_BLUR_DATA_URL } from "@/lib/image-placeholder";

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
  const [mediaIndex, setMediaIndex] = useState(0);

  useEffect(() => {
    zoomOpenRef.current = zoomOpen;
  }, [zoomOpen]);

  // Cover image (if present) plus any gallery photos/video, in order. Built with
  // useMemo (not computed after the early-return below) because hooks must run
  // unconditionally on every render.
  const media = useMemo<MediaItem[]>(() => {
    if (!project) return [];
    const cover: MediaItem[] = project.hasImage
      ? [{ type: "image", src: project.image, alt: project.imageAlt }]
      : [];
    return [...cover, ...(project.gallery ?? [])];
  }, [project]);

  // Reset to the first slide whenever a different project opens.
  useEffect(() => {
    setMediaIndex(0);
  }, [project?.slug]);

  const activeMedia = media[mediaIndex];

  useFocusTrap(modalRef, !!project && !zoomOpen);
  useFocusTrap(zoomRef, !!(zoomOpen && activeMedia?.type === "image"));

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (zoomOpenRef.current) {
          setZoomOpen(false);
        } else {
          onClose();
        }
        return;
      }
      if (zoomOpenRef.current) return;
      if (e.key === "ArrowLeft") {
        setMediaIndex((i) => (i - 1 + media.length) % media.length);
      } else if (e.key === "ArrowRight") {
        setMediaIndex((i) => (i + 1) % media.length);
      }
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose, media.length]);

  if (!project || typeof document === "undefined") return null;

  const sections = [
    { key: "problem", label: t.projects.sections.problem },
    { key: "approach", label: t.projects.sections.approach },
    { key: "result", label: t.projects.sections.result },
  ] as const;

  const imageAlt = project.imageAlt[locale];
  const zoomAlt: LocalizedText | undefined = activeMedia?.alt;

  function closeModal() {
    setZoomOpen(false);
    onClose();
  }

  function goPrev() {
    setMediaIndex((i) => (i - 1 + media.length) % media.length);
  }

  function goNext() {
    setMediaIndex((i) => (i + 1) % media.length);
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
            className="x-close-fill flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-muted text-foreground/70 outline-hidden transition-colors hover:border-accent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <X size={16} aria-hidden="true" />
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

        {activeMedia && (
          <div className="relative mt-6">
            <div className="relative aspect-video w-full overflow-hidden border border-muted bg-surface">
              {activeMedia.type === "video" ? (
                <video
                  key={activeMedia.src}
                  src={`/projects/${activeMedia.src}`}
                  controls
                  playsInline
                  className="h-full w-full object-contain"
                  aria-label={activeMedia.alt[locale]}
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setZoomOpen(true)}
                  aria-label={t.projects.zoomAria(activeMedia.alt[locale])}
                  className="group relative block h-full w-full cursor-zoom-in outline-hidden focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <Image
                    src={`/projects/${activeMedia.src}`}
                    alt={activeMedia.alt[locale]}
                    fill
                    sizes="(min-width: 768px) 768px, 100vw"
                    placeholder="blur"
                    blurDataURL={PROJECT_IMAGE_BLUR_DATA_URL}
                    className="object-contain"
                  />
                  <span className="absolute right-3 bottom-3 flex h-8 w-8 items-center justify-center border border-border bg-background/80 text-foreground/70 opacity-0 backdrop-blur-xs transition-opacity duration-200 group-hover:opacity-100">
                    <MagnifyingGlassPlus size={15} aria-hidden="true" />
                  </span>
                </button>
              )}

              {media.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label={t.projects.prevMediaAria}
                    className="absolute top-1/2 left-2 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-border bg-background/80 text-foreground/70 backdrop-blur-xs outline-hidden transition-colors hover:border-accent hover:text-accent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <CaretLeft size={16} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label={t.projects.nextMediaAria}
                    className="absolute top-1/2 right-2 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-border bg-background/80 text-foreground/70 backdrop-blur-xs outline-hidden transition-colors hover:border-accent hover:text-accent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <CaretRight size={16} aria-hidden="true" />
                  </button>
                </>
              )}
            </div>

            {media.length > 1 && (
              <div className="mt-3 flex items-center justify-center gap-1.5">
                {media.map((item, i) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setMediaIndex(i)}
                    aria-label={t.projects.goToMediaAria(i + 1)}
                    aria-current={i === mediaIndex}
                    className={`h-1.5 rounded-full transition-all ${
                      i === mediaIndex
                        ? "w-5 bg-accent"
                        : "w-1.5 bg-muted hover:bg-foreground/40"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
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
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        )}
      </div>

      {zoomOpen && activeMedia?.type === "image" && (
        <div
          ref={zoomRef}
          role="dialog"
          aria-modal="true"
          aria-label={zoomAlt?.[locale] ?? imageAlt}
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
            className="x-close-fill absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-muted text-foreground/70 outline-hidden transition-colors hover:border-accent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <X size={16} aria-hidden="true" />
          </button>
          <div className="relative h-full max-h-[90vh] w-full max-w-6xl">
            <Image
              src={`/projects/${activeMedia.src}`}
              alt={activeMedia.alt[locale]}
              fill
              sizes="100vw"
              placeholder="blur"
              blurDataURL={PROJECT_IMAGE_BLUR_DATA_URL}
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>,
    document.body
  );
}
