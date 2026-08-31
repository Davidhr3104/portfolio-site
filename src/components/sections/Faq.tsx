"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/components/LocaleProvider";

export function Faq() {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = t.faq.items;

  return (
    <section id="faq" className="relative overflow-hidden border-t border-border">
      <div className="relative mx-auto max-w-3xl px-6 py-24 sm:py-32 lg:py-36">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl">
            {t.faq.label}
          </h2>
        </Reveal>
        <div className="mt-10">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-t border-border first:border-t-0">
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
                      <p className="pb-5 font-sans text-base leading-relaxed text-foreground/70">
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
    </section>
  );
}
