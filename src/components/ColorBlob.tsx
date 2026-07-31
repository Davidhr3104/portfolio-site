export function ColorBlob({
  className = "",
  size = 480,
  opacity = 0.3,
  color = "88,133,182",
}: {
  className?: string;
  size?: number;
  opacity?: number;
  color?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 rounded-full blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background: `
          radial-gradient(circle at 32% 38%, rgba(${color},${opacity}) 0%, rgba(${color},0) 58%),
          radial-gradient(circle at 66% 62%, rgba(${color},${opacity * 0.65}) 0%, rgba(${color},0) 62%)
        `,
      }}
    />
  );
}
