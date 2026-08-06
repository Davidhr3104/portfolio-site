"use client";

import { useEffect } from "react";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-5xl px-6 pt-44 pb-32 sm:pt-56 sm:pb-40 lg:pb-48">
      <SectionLabel>Error</SectionLabel>
      <h1 className="mt-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
        Something went wrong.
      </h1>
      <p className="mt-6 max-w-md font-sans text-lg leading-relaxed text-foreground/80">
        An unexpected error occurred. You can try again, or head back home.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.12em] text-accent outline-hidden transition-colors hover:text-gold focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          Try again
          <span aria-hidden="true">→</span>
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.12em] text-accent outline-hidden transition-colors hover:text-gold focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          Back to home
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
