"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { ColorBlob } from "@/components/ColorBlob";
import { SectionLabel } from "@/components/SectionLabel";

const faqs = [
  {
    question: "Do you work solo or with a team?",
    answer:
      "I work as an individual — direct communication, no hand-off loss, though it means being realistic about pacing on larger projects.",
  },
  {
    question:
      "You've been doing this less than two years — why should I trust you with something this important?",
    answer:
      "Fair question. My depth is in how deliberately I approach reliability, not years on a calendar — every system I build separates what needs to be exactly right (deterministic logic) from what genuinely needs a model's judgment, with confidence scoring and human review on anything high-stakes. Happy to walk through the architecture of any project so you can judge the thinking directly, not just the résumé.",
  },
  {
    question: "Can you work across time zones — how available are you really?",
    answer:
      "Based in Bogotá (UTC-5), with strong natural overlap with US Eastern and Central time zones. I keep communication async-friendly — written updates, clear documentation — so timezone gaps don't become a bottleneck.",
  },
  {
    question: "What's your typical engagement length?",
    answer:
      "Ranges from focused 1–2 week builds to ongoing monthly work, depending on scope. I usually start with a smaller trial or discovery phase before a longer commitment.",
  },
  {
    question:
      "What if the project doesn't work out, or requirements change halfway through?",
    answer:
      "I build in phases and validate early — a discovery phase or small trial before a larger commitment whenever possible, so we catch misalignment before a lot of time is sunk. If requirements shift, I'd rather re-scope openly than quietly ship something I know doesn't fit anymore.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes. Client work stays confidential — I don't publish client or project names publicly, which is why my portfolio describes systems generically.",
  },
  {
    question: "What's your tech stack preference?",
    answer:
      "Whatever gets a reliable system shipped fastest — usually Claude, Next.js, and Supabase, but I don't force a stack where it doesn't fit the problem.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative overflow-hidden border-t border-border">
      <ColorBlob
        className="top-0 right-0 translate-x-[10%] -translate-y-1/5"
        size={460}
        opacity={0.22}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:py-36">
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
