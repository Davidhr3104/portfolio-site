"use client";

import { useEffect, useRef } from "react";

const DESKTOP_STAR_COUNT = 170;
const MOBILE_STAR_COUNT = 90;
const MOBILE_BREAKPOINT = 640;

const SCROLL_PARALLAX_STRENGTH = 0.05;
const SCROLL_PARALLAX_MAX = 70;
const POINTER_PARALLAX_STRENGTH = 22;
const NEBULA_SCROLL_STRENGTH = 0.03;
const NEBULA_SCROLL_MAX = 50;
const NEBULA_POINTER_STRENGTH = 16;

type StarHue = "foreground" | "accent";

type Star = {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  vx: number;
  vy: number;
  depth: number;
  hue: StarHue;
};

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

// A single canvas layer (slow drifting + twinkling stars, with parallax
// depth) plus two blurred CSS "nebula" clouds, sitting fixed behind every
// section so the whole page reads as one continuous backdrop instead of a
// per-section decoration. Scroll position and pointer position both nudge
// the field -- different star "depths" and the two nebula clouds move at
// different rates -- so the background visibly responds as you move
// between sections instead of just ambiently drifting in place. Star
// colors are read from the live --color-* custom properties (not
// hardcoded) so a theme toggle re-tints them instantly via the
// MutationObserver below, without needing to re-seed the field.
export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nebulaARef = useRef<HTMLDivElement>(null);
  const nebulaBRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let rafId = 0;
    let paused = document.hidden;
    let scrollY = window.scrollY;
    let pointerX = 0; // -1..1 from viewport center
    let pointerY = 0;
    const colors: Record<StarHue, string> = {
      foreground: "#eeece6",
      accent: "#7fa8d6",
    };

    function readColors() {
      const styles = getComputedStyle(document.documentElement);
      colors.foreground =
        styles.getPropertyValue("--color-foreground").trim() ||
        colors.foreground;
      colors.accent =
        styles.getPropertyValue("--color-accent").trim() || colors.accent;
    }

    function seed() {
      const count = width < MOBILE_BREAKPOINT ? MOBILE_STAR_COUNT : DESKTOP_STAR_COUNT;
      stars = Array.from({ length: count }, () => {
        const roll = Math.random();
        const hue: StarHue = roll > 0.78 ? "accent" : "foreground";
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.1 + 0.35,
          baseAlpha: Math.random() * 0.5 + 0.35,
          twinkleSpeed: Math.random() * 0.5 + 0.15,
          twinklePhase: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 0.01,
          vy: Math.random() * 0.01 + 0.003,
          // 0.3 (far, barely shifts with parallax) .. 1 (near, shifts fully)
          depth: Math.random() * 0.7 + 0.3,
          hue,
        };
      });
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function applyNebulaParallax() {
      if (reduceMotion) return;
      const scrollShift = clamp(
        scrollY * NEBULA_SCROLL_STRENGTH,
        -NEBULA_SCROLL_MAX,
        NEBULA_SCROLL_MAX
      );
      const a = nebulaARef.current;
      const b = nebulaBRef.current;
      if (a) {
        const x = pointerX * NEBULA_POINTER_STRENGTH;
        const y = scrollShift * -0.6 + pointerY * NEBULA_POINTER_STRENGTH;
        a.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (b) {
        const x = pointerX * -NEBULA_POINTER_STRENGTH * 0.8;
        const y = scrollShift + pointerY * -NEBULA_POINTER_STRENGTH * 0.8;
        b.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    }

    function draw(time: number) {
      ctx!.clearRect(0, 0, width, height);

      const camX = reduceMotion ? 0 : pointerX * POINTER_PARALLAX_STRENGTH;
      const camY = reduceMotion
        ? 0
        : clamp(scrollY * SCROLL_PARALLAX_STRENGTH, -SCROLL_PARALLAX_MAX, SCROLL_PARALLAX_MAX) +
          pointerY * POINTER_PARALLAX_STRENGTH;

      for (const s of stars) {
        if (!reduceMotion) {
          s.x += s.vx;
          s.y += s.vy;
          if (s.x < -2) s.x = width + 2;
          else if (s.x > width + 2) s.x = -2;
          if (s.y > height + 2) s.y = -2;
        }
        const twinkle = reduceMotion
          ? s.baseAlpha
          : s.baseAlpha *
            (0.55 + 0.45 * Math.sin(time * 0.0011 * s.twinkleSpeed + s.twinklePhase));
        ctx!.beginPath();
        ctx!.arc(s.x - camX * s.depth, s.y - camY * s.depth, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = colors[s.hue];
        ctx!.globalAlpha = twinkle;
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
      if (!reduceMotion && !paused) {
        rafId = requestAnimationFrame(draw);
      }
    }

    function start() {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(draw);
    }

    readColors();
    resize();
    applyNebulaParallax();
    if (!reduceMotion) {
      start();
    } else {
      draw(0);
    }

    function handleResize() {
      resize();
      if (!reduceMotion && !paused) start();
      else draw(0);
    }

    function handleVisibility() {
      paused = document.hidden;
      if (!paused && !reduceMotion) start();
      else cancelAnimationFrame(rafId);
    }

    let scrollTicking = false;
    function handleScroll() {
      if (reduceMotion || scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(() => {
        scrollY = window.scrollY;
        applyNebulaParallax();
        scrollTicking = false;
      });
    }

    let pointerTicking = false;
    function handlePointerMove(e: PointerEvent) {
      if (reduceMotion || !hasFinePointer || pointerTicking) return;
      pointerTicking = true;
      requestAnimationFrame(() => {
        pointerX = clamp((e.clientX / width - 0.5) * 2, -1, 1);
        pointerY = clamp((e.clientY / height - 0.5) * 2, -1, 1);
        applyNebulaParallax();
        pointerTicking = false;
      });
    }

    // Re-tint stars immediately when the Nav theme toggle flips
    // data-theme, instead of waiting for the next resize/reseed.
    const themeObserver = new MutationObserver(() => {
      readColors();
      if (reduceMotion || paused) draw(performance.now());
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);
    if (!reduceMotion) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      if (hasFinePointer) {
        window.addEventListener("pointermove", handlePointerMove, { passive: true });
      }
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointermove", handlePointerMove);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="starfield-bg pointer-events-none fixed inset-0 overflow-hidden bg-background"
    >
      <div ref={nebulaARef} className="nebula-parallax">
        <div className="nebula-cloud nebula-cloud-a" />
      </div>
      <div ref={nebulaBRef} className="nebula-parallax">
        <div className="nebula-cloud nebula-cloud-b" />
      </div>
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
