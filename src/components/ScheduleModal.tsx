"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { LuX } from "react-icons/lu";
import { useFocusTrap } from "@/lib/useFocusTrap";

// Calendly's current booking UI doesn't honor the legacy embed customization
// params (background_color/text_color/primary_color/hide_gdpr_banner) --
// tested and confirmed they're silently ignored, so it renders in Calendly's
// own light theme with its own cookie banner regardless. Not worth carrying
// dead query params that imply theming that isn't actually happening.
const CALENDLY_EMBED_URL = "https://calendly.com/andreshr4578/ai-automation-call";

export function ScheduleModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useFocusTrap(modalRef, open);

  useEffect(() => {
    if (!open) return;

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
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Schedule a call"
      onClick={onClose}
      className="fixed inset-0 z-100 flex items-center justify-center bg-background/80 p-4 backdrop-blur-xs sm:p-6"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative h-[85vh] w-full max-w-3xl border border-border bg-background"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center border border-border bg-background text-foreground/70 outline-hidden transition-colors hover:border-accent hover:text-accent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <LuX size={16} aria-hidden="true" />
        </button>
        <iframe
          src={CALENDLY_EMBED_URL}
          title="Schedule a call with David Herrera"
          className="h-full w-full"
          style={{ border: 0 }}
        />
        {/* Calendly's iframe is cross-origin, so the keydown-based trap above
            can't intercept Tab while focus is inside it -- the browser's own
            input routing hands keyboard events to the embedded document, out
            of reach of this page's JS. Once focus returns to this document
            (tabbing forward past the iframe), it lands here; redirect it back
            to the close button instead of letting it continue into the page. */}
        <div
          tabIndex={0}
          onFocus={() => closeButtonRef.current?.focus()}
          className="sr-only"
        />
      </div>
    </div>,
    document.body
  );
}
