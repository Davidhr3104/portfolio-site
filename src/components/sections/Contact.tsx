import { Reveal } from "@/components/Reveal";

// TODO(David): replace with your real Upwork profile URL.
const UPWORK_URL = "https://www.upwork.com/freelancers/~yourprofile";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <Reveal>
            <h2 className="font-sans text-sm uppercase tracking-[0.2em] text-muted">
              Contact
            </h2>
          </Reveal>
          <div className="max-w-xl">
            <Reveal>
              <p className="font-serif text-2xl leading-snug text-foreground sm:text-3xl">
                Currently available for select freelance and contract
                engagements.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 border border-foreground px-6 py-3 font-sans text-sm uppercase tracking-[0.15em] text-foreground outline-hidden transition-colors duration-300 hover:bg-foreground hover:text-background focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                View my Upwork profile
                <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
