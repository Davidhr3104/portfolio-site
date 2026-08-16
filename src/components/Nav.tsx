"use client";

import { useState } from "react";
import Link from "next/link";
import { LuSun, LuMoon } from "react-icons/lu";
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
          className="font-serif text-base tracking-tight text-foreground transition-colors duration-200 hover:text-accent outline-hidden focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          David Herrera
        </Link>

        <div className="flex items-center gap-5">
          <ul className="hidden items-center gap-x-6 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={openSchedule}
            className="border border-accent px-4 py-1.5 font-sans text-xs uppercase tracking-[0.12em] text-accent outline-hidden transition-colors duration-300 hover:bg-accent hover:text-background focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            {t.nav.schedule}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t.nav.toLightMode : t.nav.toDarkMode}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-foreground/70 outline-hidden transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {theme === "dark" ? (
              <LuSun size={15} aria-hidden="true" />
            ) : (
              <LuMoon size={15} aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={toggleLocale}
            aria-label={
              locale === "en" ? "Switch language to Spanish" : "Switch language to English"
            }
            className="flex h-8 items-center gap-1 rounded-full border border-border px-2.5 font-sans text-xs tracking-[0.05em] text-foreground/70 outline-hidden transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
        </ul>
      ) : null}
    </header>
  );
}
