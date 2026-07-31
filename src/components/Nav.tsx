const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/85 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4">
        <a
          href="#top"
          className="font-serif text-base tracking-tight text-foreground transition-colors duration-200 hover:text-accent outline-hidden focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          David Herrera
        </a>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm uppercase tracking-[0.12em] text-muted transition-colors hover:text-accent outline-hidden focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
