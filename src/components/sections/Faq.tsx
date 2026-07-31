"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

const faqs = [
  {
    question: "Do you work solo or with a team?",
    answer:
      "I work as an individual — direct communication, no hand-off loss, though it means being realistic about pacing on larger projects.",
  },
  {
    question: "What's your typical engagement length?",
    answer:
      "Ranges from focused 1–2 week builds to ongoing monthly work, depending on scope. I usually start with a smaller trial or discovery phase before a longer commitment.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes. Client work stays confidential — I don't publish client or project names publicly, which is why my portfolio describes systems generically.",
  },
  {
    question: "What's your tech stack preference?",
    answer:
      "Claude API/Claude Code, Next.js, Supabase, and n8n/Make for automation — but I pick the right tool for the problem, not just what I know.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-32 sm:py-40 lg:py-48">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <Reveal>
            <SectionLabel>FAQ</SectionLabel>
          </Reveal>
          <div className="max-w-2xl">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={item.question} className="border-t border-border first:border-t-0">
                  <Reveal delay={i * 60}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left outline-hidden focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                      <span className="font-sans text-base text-foreground">
                        {item.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`shrink-0 font-serif text-xl text-accent transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className="grid transition-[grid-template-rows] duration-300 ease-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-xl pb-5 font-sans text-base leading-relaxed text-foreground/70">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
