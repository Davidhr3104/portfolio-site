import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-44 pb-32 sm:pt-56 sm:pb-40 lg:pb-48">
      <SectionLabel>404</SectionLabel>
      <h1 className="mt-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
        Page not found.
      </h1>
      <p className="mt-6 max-w-md font-sans text-lg leading-relaxed text-foreground/80">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.12em] text-accent outline-hidden transition-colors hover:text-gold focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        Back to home
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
