import type { CSSProperties } from "react";

type SphereProps = {
  size: number;
  color: string;
  opacity?: number;
  className?: string;
  duration: number;
  delay?: number;
  floatX?: number;
  floatY?: number;
  floatScale?: number;
};

// A glossy sphere -- radial gradient fakes a top-left light source, and two
// things keep it from reading as a flat sticker cut out against the page:
// the gradient's color blends into var(--color-background) well before the
// edge, and a matching radial mask fades the whole element to fully
// transparent there too -- without the mask, the div's circular silhouette
// would still show a hard edge no matter how close the color gets to the
// background. No blur/filter: the highlight itself stays crisp.
function GlossySphere({
  size,
  color,
  opacity = 1,
  className = "",
  duration,
  delay = 0,
  floatX = -14,
  floatY = 18,
  floatScale = 1.04,
}: SphereProps) {
  const fadeMask =
    "radial-gradient(circle at 32% 28%, black 0%, black 50%, transparent 88%)";
  const style: CSSProperties & Record<string, string | number> = {
    width: size,
    height: size,
    opacity,
    // The highlight near the light source stays close to full strength so
    // the sphere still reads as glossy/3D, but the body and edge blend into
    // the page background instead of sitting on top of it as a flat,
    // contrasting disc.
    background: `radial-gradient(circle at 32% 28%, color-mix(in srgb, ${color} 55%, white) 0%, color-mix(in srgb, ${color} 55%, var(--color-background)) 40%, var(--color-background) 100%)`,
    maskImage: fadeMask,
    WebkitMaskImage: fadeMask,
    boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    "--float-x": `${floatX}px`,
    "--float-y": `${floatY}px`,
    "--float-scale": floatScale,
  };

  return (
    <div
      aria-hidden="true"
      className={`glossy-sphere pointer-events-none absolute rounded-full ${className}`}
      style={style}
    />
  );
}

const CORNER_POSITION: Record<
  "top-left" | "top-right" | "bottom-left" | "bottom-right",
  { large: string; small: string; floatX: number; floatY: number }
> = {
  "top-left": {
    large: "-top-20 -left-16",
    small: "top-16 left-32",
    floatX: 14,
    floatY: 16,
  },
  "top-right": {
    large: "-top-20 -right-16",
    small: "top-16 right-32",
    floatX: -14,
    floatY: 16,
  },
  "bottom-left": {
    large: "-bottom-20 -left-16",
    small: "bottom-16 left-32",
    floatX: 14,
    floatY: -16,
  },
  "bottom-right": {
    large: "-bottom-20 -right-16",
    small: "bottom-16 right-32",
    floatX: -14,
    floatY: -16,
  },
};

export function GlossySphereCorner({
  corner,
  primaryColor,
  secondaryColor,
  primaryOpacity = 1,
  secondaryOpacity = 0.6,
}: {
  corner: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  primaryColor: string;
  secondaryColor: string;
  primaryOpacity?: number;
  secondaryOpacity?: number;
}) {
  const pos = CORNER_POSITION[corner];

  return (
    <>
      <GlossySphere
        size={240}
        color={primaryColor}
        opacity={primaryOpacity}
        className={`z-0 ${pos.large}`}
        duration={14}
        delay={0}
        floatX={pos.floatX}
        floatY={pos.floatY}
        floatScale={1.05}
      />
      <GlossySphere
        size={120}
        color={secondaryColor}
        opacity={secondaryOpacity}
        className={`z-[1] ${pos.small}`}
        duration={10.5}
        delay={1.2}
        floatX={-pos.floatX * 0.7}
        floatY={-pos.floatY * 0.7}
        floatScale={1.07}
      />
    </>
  );
}
