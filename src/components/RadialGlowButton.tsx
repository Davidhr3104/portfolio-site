// Ported from vengenceui.com's "radial-glow-button" shadcn registry entry --
// hand-adapted as a plain anchor (the one call site is a real navigational
// link, not a <button>) with the CSS recolored onto this project's own
// --color-accent/--color-gold tokens in globals.css instead of the source's
// default cyan/yellow/navy glow.
export function RadialGlowButton({
  children,
  className = "",
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={`glow-cta ${className}`} {...props}>
      <span className="glow-cta-shine" aria-hidden="true">
        <span />
      </span>
      <span className="glow-cta-label">{children}</span>
    </a>
  );
}
