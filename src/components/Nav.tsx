"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

const linkClass =
  "text-sm uppercase tracking-[0.12em] text-muted transition-colors hover:text-accent outline-hidden focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/85 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="font-serif text-base tracking-tight text-foreground transition-colors duration-200 hover:text-accent outline-hidden focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          David Herrera
        </a>

        <div className="flex items-center gap-5">
          <ul className="hidden items-center gap-x-6 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className={`${linkClass} md:hidden`}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {open ? (
        <ul
          id="mobile-nav"
          className="border-t border-border px-6 py-4 md:hidden"
        >
          {links.map((link) => (
            <li key={link.href} className="py-2">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`${linkClass} block`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
