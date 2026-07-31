export function ColorBlob({
  className = "",
  size = 480,
  opacity = 0.3,
}: {
  className?: string;
  size?: number;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 rounded-full blur-3xl transition-[background] duration-300 ${className}`}
      style={{
        width: size,
        height: size,
        background: `
          radial-gradient(circle at 32% 38%, rgba(var(--blob-rgb),${opacity}) 0%, rgba(var(--blob-rgb),0) 58%),
          radial-gradient(circle at 66% 62%, rgba(var(--blob-rgb),${opacity * 0.65}) 0%, rgba(var(--blob-rgb),0) 62%)
        `,
      }}
    />
  );
}
