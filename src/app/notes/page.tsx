import type { Metadata } from "next";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Notes — David Herrera",
  description: "Short technical notes — coming soon.",
};

export default function NotesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-44 pb-32 sm:pt-56 sm:pb-40 lg:pb-48">
      <SectionLabel>Notes</SectionLabel>
      <h1 className="mt-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
        Coming soon.
      </h1>
      <p className="mt-6 max-w-md font-sans text-lg leading-relaxed text-foreground/80">
        Short, practical write-ups on building AI systems — not tutorials,
        just what actually happened. Nothing published here yet.
      </p>
    </div>
  );
}
