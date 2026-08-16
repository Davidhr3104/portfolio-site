import type { Metadata } from "next";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Notes · David Herrera",
  description: "Short technical notes, coming soon.",
};

const plannedTopics = [
  "Why I score confidence on every AI output, and what happens when it's low",
  "The 90% failure I didn't expect: what a broken automation scenario taught me about silent errors",
  "Building a RAG system that says “I don’t know”",
  "Deterministic code calculates. The model only explains why.",
  "What “catching data drift before it breaks reporting” actually looks like",
];

export default function NotesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-44 pb-32 sm:pt-56 sm:pb-40 lg:pb-48">
      <SectionLabel>Notes</SectionLabel>
      <h1 className="mt-6 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
        Coming soon.
      </h1>
      <p className="mt-6 max-w-md font-sans text-lg leading-relaxed text-foreground/80">
        Short, practical write-ups on building AI systems, not tutorials,
        just what actually happened. Nothing published here yet, but here&apos;s
        what&apos;s coming:
      </p>
      <ul className="mt-10 max-w-xl space-y-5 border-t border-border pt-8">
        {plannedTopics.map((topic) => (
          <li
            key={topic}
            className="font-sans text-base leading-relaxed text-foreground/70"
          >
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}
