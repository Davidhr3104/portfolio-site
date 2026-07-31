import { Reveal } from "@/components/Reveal";
import { ColorBlob } from "@/components/ColorBlob";
import { SectionLabel } from "@/components/SectionLabel";

// TODO(David): replace with your real Upwork profile URL.
const UPWORK_URL = "https://www.upwork.com/freelancers/~yourprofile";
// TODO(David): replace "#" with your Calendly link (or swap this href back
// to a mailto: if you'd rather take the first message by email).
const CALENDLY_URL = "#";
const EMAIL = "andreshr4578@gmail.com";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border">
      <ColorBlob
        className="top-0 left-0 -translate-x-[10%] -translate-y-1/5"
        size={440}
        opacity={0.24}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <Reveal>
            <SectionLabel>Contact</SectionLabel>
          </Reveal>
          <div className="max-w-xl">
            <Reveal>
              <p className="font-serif text-2xl leading-snug text-foreground sm:text-3xl">
                Currently available for select freelance and contract
                engagements.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  href={CALENDLY_URL}
                  className="inline-flex items-center gap-3 border border-accent px-6 py-3 font-sans text-sm uppercase tracking-[0.15em] text-accent outline-hidden transition-colors duration-300 hover:bg-accent hover:text-background focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Get in touch
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href={UPWORK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-accent px-6 py-3 font-sans text-sm uppercase tracking-[0.15em] text-accent outline-hidden transition-colors duration-300 hover:bg-accent hover:text-background focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  View my Upwork profile
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-sans text-sm text-accent underline decoration-accent/30 underline-offset-4 outline-hidden transition-colors duration-300 hover:decoration-accent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {EMAIL}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
