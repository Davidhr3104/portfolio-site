"use client";

import { useState } from "react";
import Link from "next/link";
import { SpotlightNavLinks } from "@/components/SpotlightNavLinks";
import { useSchedule } from "@/components/ScheduleProvider";
import { useTheme } from "@/components/ThemeProvider";
import { useLocale } from "@/components/LocaleProvider";

const linkClass =
  "text-sm uppercase tracking-[0.12em] text-muted transition-colors hover:text-accent outline-hidden focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export function Nav() {
  const [open, setOpen] = useState(false);
  const openSchedule = useSchedule();
  const { theme, toggleTheme } = useTheme();
  const { locale, toggleLocale, t } = useLocale();

  const links = [
    { href: "/#about", label: t.nav.links.about },
    { href: "/#projects", label: t.nav.links.projects },
    { href: "/#impact", label: t.nav.links.impact },
    { href: "/#contact", label: t.nav.links.contact },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/85 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="shrink-0 whitespace-nowrap font-serif text-base tracking-tight text-foreground transition-colors duration-200 hover:text-accent outline-hidden focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          David Herrera
        </Link>

        <div className="flex items-center gap-3 sm:gap-5">
          <SpotlightNavLinks links={links} />

          <button
            type="button"
            onClick={openSchedule}
            className="fill-expand-btn hidden text-xs uppercase tracking-[0.12em] sm:inline-block"
          >
            {t.nav.schedule}
          </button>

          <label className="theme-switch">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
              aria-label={theme === "dark" ? t.nav.toLightMode : t.nav.toDarkMode}
            />
            <span className="theme-switch-slider" aria-hidden="true" />
          </label>

          <button
            type="button"
            onClick={toggleLocale}
            aria-label={
              locale === "en" ? "Switch language to Spanish" : "Switch language to English"
            }
            className="relative flex h-8 items-center gap-1 rounded-full border border-muted px-2.5 font-sans text-xs tracking-[0.05em] text-foreground/70 outline-hidden transition-colors duration-200 before:absolute before:-inset-y-1.5 before:inset-x-0 before:content-[''] hover:border-accent hover:text-accent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span className={locale === "en" ? "text-accent" : ""}>EN</span>
            <span aria-hidden="true" className="text-border">
              /
            </span>
            <span className={locale === "es" ? "text-accent" : ""}>ES</span>
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className={`${linkClass} md:hidden`}
          >
            {open ? t.nav.close : t.nav.menu}
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
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`${linkClass} block`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="py-2 sm:hidden">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openSchedule();
              }}
              className={`${linkClass} block`}
            >
              {t.nav.schedule}
            </button>
          </li>
        </ul>
      ) : null}
    </header>
  );
}
