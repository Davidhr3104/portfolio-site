"use client";

import { useLocale } from "@/components/LocaleProvider";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="relative mt-auto border-t border-border bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-wash font-serif text-sm text-accent"
          >
            DH
          </span>
          <span className="font-serif text-foreground">David Herrera</span>
        </div>
        <span>
          © {new Date().getFullYear()} {t.footer.role}
        </span>
      </div>
    </footer>
  );
}
