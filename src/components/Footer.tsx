"use client";

import { useLocale } from "@/components/LocaleProvider";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <span className="font-serif">David Herrera</span>
        <span>
          © {new Date().getFullYear()} {t.footer.role}
        </span>
      </div>
    </footer>
  );
}
