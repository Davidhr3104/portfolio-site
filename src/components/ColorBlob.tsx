export function ColorBlob({
  className = "",
  size = 420,
  opacity = 0.16,
}: {
  className?: string;
  size?: number;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 rounded-full blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(30,58,95,${opacity}) 0%, rgba(30,58,95,0) 72%)`,
      }}
    />
  );
}
