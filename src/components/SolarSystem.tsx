"use client";

import React, { useState, type ComponentType } from "react";
import { Planet } from "@phosphor-icons/react";
import { SiAnthropic, SiClaudecode, SiN8N, SiNextdotjs, SiTypescript, SiSupabase, SiVercel } from "react-icons/si";
import { GoHighLevel } from "@/components/icons/GoHighLevel";
import { cn } from "@/lib/utils";

// Adapted from a vengenceui.com "solar-system" registry component (the
// published /r/solar-system.json URL 404s -- verified against the site's
// own registry index, which has no matching entry either -- so this was
// ported from source pasted directly, not fetched). Simplified from the
// source's fully generic OrbitConfig/SolarSystemItem API down to this
// project's one real use case (its flagship stack, not an arbitrary list),
// and recolored: the teal sun-glow and 7-color rainbow of "cosmic dust"
// particles are replaced with this project's own accent/gold pair, per the
// one-accent-per-project rule already applied everywhere else on the site.
// The default logos (React, Next.js, Flutter, Vue, Rust, Go...) are swapped
// for tools this project's stack.ts already imports, instead of hand-drawn
// SVGs for tools that were never actually used here.

type OrbitItem = { label: string; icon: ComponentType<{ className?: string }> };
type OrbitRing = { id: string; radiusVar: string; speed: number; items: OrbitItem[] };

const ORBITS: OrbitRing[] = [
  {
    id: "inner",
    radiusVar: "var(--orbit-radius-inner)",
    speed: 22,
    items: [
      { label: "Claude", icon: SiAnthropic },
      { label: "n8n", icon: SiN8N },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "GoHighLevel", icon: GoHighLevel },
    ],
  },
  {
    id: "mid",
    radiusVar: "var(--orbit-radius-mid)",
    speed: 34,
    items: [
      { label: "Claude Code", icon: SiClaudecode },
      { label: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    id: "outer",
    radiusVar: "var(--orbit-radius-outer)",
    speed: 46,
    items: [
      { label: "Supabase", icon: SiSupabase },
      { label: "Vercel", icon: SiVercel },
    ],
  },
];

// Cosmic dust: two tones only (accent + gold), not the source's 7-color
// rainbow -- see the color-consistency note above.
const DUST = [
  { delay: "-4s", radiusVar: "var(--orbit-radius-inner)", tone: "accent" as const },
  { delay: "-11s", radiusVar: "var(--orbit-radius-mid)", tone: "gold" as const },
  { delay: "-19s", radiusVar: "var(--orbit-radius-outer)", tone: "accent" as const },
  { delay: "-7s", radiusVar: "var(--orbit-radius-mid)", tone: "gold" as const },
];

export function SolarSystem({ className }: { className?: string }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div
      className={cn(
        // overflow-hidden (rather than the source's overflow-visible)
        // contains the 3D-projected orbit within its box -- the tilted
        // plane's on-screen bounding box doesn't shrink to match a smaller
        // container, so left uncontained it bled out past its own section.
        // This component is only rendered from md: up (see Tools.tsx) --
        // the 3D orbit projection doesn't have room to stay legible below
        // that, so there's no separate mobile sizing to maintain here.
        "relative flex h-[360px] w-full max-w-[480px] items-center justify-center overflow-hidden [perspective:1200px]",
        className
      )}
    >
      <div
        className="absolute flex h-[520px] w-[520px] items-center justify-center"
        style={{ transform: "rotateX(65deg) rotateY(-10deg)", transformStyle: "preserve-3d" }}
      >
        {/* Sun core */}
        <div
          className="pointer-events-none absolute z-20 flex h-[92px] w-[92px] items-center justify-center"
          style={{ transform: "rotateY(10deg) rotateX(-65deg)", transformStyle: "preserve-3d" }}
        >
          <div className="solar-sun-pulse absolute z-10 h-[84px] w-[84px] rounded-full bg-accent/20 blur-md" />
          <div className="relative z-20 flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent/40 bg-background p-2 shadow-[0_0_30px_rgba(var(--accent-rgb),0.3)]">
            <Planet className="h-7 w-7 animate-spin text-accent" style={{ animationDuration: "12s" }} />
          </div>
          <div className="solar-spin-cw pointer-events-none absolute h-[104px] w-[104px] rounded-full border border-dashed border-accent/20" />
          <div className="solar-spin-ccw pointer-events-none absolute h-[138px] w-[138px] rounded-full border border-dashed border-accent/10" />
        </div>

        {/* Cosmic dust */}
        {DUST.map((dust, i) => (
          <div
            key={i}
            className={cn(
              "solar-orbit pointer-events-none absolute top-1/2 left-1/2 h-1 w-1 rounded-full opacity-50",
              dust.tone === "accent" ? "bg-accent shadow-[0_0_6px_rgba(var(--accent-rgb),0.8)]" : "bg-gold"
            )}
            style={
              {
                animationDelay: dust.delay,
                animationDuration: "26s",
                "--orbit-radius": dust.radiusVar,
                "--orbit-duration": "26s",
                "--orbit-play-state": "running",
              } as React.CSSProperties
            }
          />
        ))}

        {/* Orbit rings + planets */}
        {ORBITS.map((orbit) => (
          <React.Fragment key={orbit.id}>
            <div
              className="pointer-events-none absolute rounded-full border border-dashed border-border"
              style={{ width: `calc(2 * ${orbit.radiusVar})`, height: `calc(2 * ${orbit.radiusVar})` }}
            />
            {orbit.items.map((item, idx) => {
              const delay = -(orbit.speed / orbit.items.length) * idx;
              const isHovered = hoveredId === item.label;
              return (
                <div
                  key={item.label}
                  className="solar-orbit pointer-events-none absolute top-1/2 left-1/2 h-0 w-0"
                  style={
                    {
                      animationDelay: `${delay}s`,
                      animationDuration: `${orbit.speed}s`,
                      "--orbit-radius": orbit.radiusVar,
                      "--orbit-duration": `${orbit.speed}s`,
                      "--orbit-play-state": "running",
                      transformStyle: "preserve-3d",
                      zIndex: isHovered ? 30 : 10,
                    } as React.CSSProperties
                  }
                >
                  <div
                    onMouseEnter={() => setHoveredId(item.label)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={cn(
                      "solar-billboard solar-planet-card",
                      isHovered && "!border-accent !shadow-[0_0_20px_rgba(0,0,0,0.3),0_0_15px_rgba(var(--accent-rgb),0.35)]"
                    )}
                    style={
                      {
                        animationDelay: `${delay}s`,
                        animationDuration: `${orbit.speed}s`,
                        "--orbit-duration": `${orbit.speed}s`,
                        "--orbit-play-state": "running",
                        scale: isHovered ? 1.08 : 1,
                      } as React.CSSProperties
                    }
                  >
                    <item.icon className={cn("h-3.5 w-3.5 shrink-0 transition-colors", isHovered ? "text-accent" : "text-foreground/60")} />
                    <span className="text-xs tracking-tight">{item.label}</span>
                  </div>
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
