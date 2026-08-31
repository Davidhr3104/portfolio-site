"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import Link from "next/link";
import { animate } from "motion";

export type NavLinkItem = { href: string; label: string };

// Adapted from vengenceui.com's "spotlight-navbar" registry component --
// ported by hand (not via the shadcn CLI, which this project doesn't use)
// and rebuilt around real <Link> navigation instead of the source's
// preventDefault()-and-fake-state click handling, with active-section
// tracking driven by IntersectionObserver (matching this codebase's
// scroll-spy pattern elsewhere, e.g. HowIWork) instead of only reacting to
// clicks. Spotlight/ambience colors use --accent-rgb so they follow the
// site's real accent and theme, rather than the source's black/white-only
// light/dark switch (which also looked for a `.dark` class this project's
// data-theme attribute never sets).
export function SpotlightNavLinks({ links }: { links: NavLinkItem[] }) {
  const containerRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const ambienceX = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const ids = links.map((link) => link.href.replace("/#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((best, entry) =>
          entry.boundingClientRect.top < best.boundingClientRect.top ? entry : best
        );
        const idx = ids.indexOf(topMost.target.id);
        if (idx !== -1) setActiveIndex(idx);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [links]);

  useEffect(() => {
    const container = containerRef.current;
    const item = itemRefs.current[activeIndex];
    if (!container || !item) return;

    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const target = itemRect.left - containerRect.left + itemRect.width / 2;

    const controls = animate(ambienceX.current, target, {
      type: "spring",
      stiffness: 200,
      damping: 24,
      onUpdate: (value) => {
        ambienceX.current = value;
        container.style.setProperty("--ambience-x", `${value}px`);
      },
    });
    return () => controls.stop();
  }, [activeIndex]);

  function handlePointerMove(e: ReactPointerEvent<HTMLUListElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    containerRef.current?.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
  }

  return (
    <ul
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={() => setHovering(false)}
      className="glossy-pill spotlight-nav-links relative hidden h-9 items-center gap-0 overflow-hidden px-1 md:flex"
    >
      <span
        aria-hidden="true"
        className="spotlight-nav-glow pointer-events-none absolute inset-0 rounded-full transition-opacity duration-300"
        style={{ opacity: hovering ? 1 : 0 }}
      />
      <span aria-hidden="true" className="spotlight-nav-ambience pointer-events-none absolute inset-x-0 bottom-0 h-0.5" />
      {links.map((link, i) => (
        <li
          key={link.href}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          className="relative z-10 h-full"
        >
          <Link
            href={link.href}
            onClick={() => setActiveIndex(i)}
            className={`flex h-full items-center px-3.5 text-sm uppercase tracking-[0.12em] transition-colors outline-hidden focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              activeIndex === i ? "text-accent" : "text-muted hover:text-accent"
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
