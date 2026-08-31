"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function CountUp({
  value,
  duration = 1200,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  // useSyncExternalStore (rather than reading matchMedia in a useState
  // initializer or effect) is the React-sanctioned way to read this kind of
  // browser state: it renders the server snapshot (false) on the client's
  // first pass for hydration parity, then reconciles to the real value --
  // without the hydration-mismatch warning a diverging useState would cause.
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const ref = useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = useState(() => (target === null ? value : `0${suffix}`));

  useEffect(() => {
    // Nothing to animate: either not a number, or the user wants it static.
    // Rendered value falls back to `value` directly below in that case, so
    // there's no unsubscribed setState call here -- this effect only ever
    // fires as part of setting up the IntersectionObserver subscription.
    if (target === null || reducedMotion) return;
    const node = ref.current;
    if (!node) return;

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        function tick(now: number) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(`${Math.round(eased * (target as number))}${suffix}`);
          if (progress < 1) raf = requestAnimationFrame(tick);
        }
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, suffix, duration, reducedMotion]);

  const shown = target === null || reducedMotion ? value : display;

  return (
    <p ref={ref} className={className}>
      {shown}
    </p>
  );
}
