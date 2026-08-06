"use client";

import { useEffect, useRef, useState } from "react";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
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

  const ref = useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = useState(() =>
    target === null || prefersReducedMotion() ? value : `0${suffix}`
  );

  useEffect(() => {
    if (target === null || prefersReducedMotion()) return;
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
  }, [target, suffix, duration]);

  return (
    <p ref={ref} className={className}>
      {display}
    </p>
  );
}
