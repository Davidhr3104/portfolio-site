import { SiGmail, SiUpwork, SiGithub } from "react-icons/si";
import { MdVideocam } from "react-icons/md";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { ContactForm } from "@/components/ContactForm";
import { ScheduleIconButton } from "@/components/ScheduleIconButton";
import { GlossySphereCorner } from "@/components/GlossySphere";

const UPWORK_URL = "https://www.upwork.com/freelancers/~01cbe720b774ffd4c6";
const GITHUB_URL = "https://github.com/Davidhr3104";
const EMAIL = "andreshr4578@gmail.com";

const iconBadgeClass =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface border border-border text-foreground/80 outline-hidden transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border">
      <GlossySphereCorner
        corner="bottom-left"
        primaryColor="var(--color-accent)"
        secondaryColor="var(--color-foreground)"
        secondaryOpacity={0.55}
      />
      <GlossySphereCorner
        corner="bottom-right"
        primaryColor="var(--color-foreground)"
        primaryOpacity={0.85}
        secondaryColor="var(--color-accent)"
      />
      <div className="relative mx-auto max-w-5xl px-6 py-32 sm:py-40 lg:py-48">
        <Reveal>
          <SectionLabel>Contact</SectionLabel>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <Reveal delay={80} className="order-2 md:order-1">
            <ContactForm />
          </Reveal>

          <Reveal delay={40} className="order-1 md:order-2">
            <p className="font-serif text-2xl leading-snug text-foreground sm:text-3xl">
              Currently available for select freelance and contract
              engagements.
            </p>
            <p className="mt-3 font-sans text-sm text-muted">
              Usually responds within 24 hours.
            </p>
            <p className="mt-1 font-sans text-sm text-muted">
              Based in Bogotá, Colombia — strong overlap with US business
              hours.
            </p>
            <p className="mt-4 max-w-md font-sans text-sm text-muted">
              Not the right fit if you&apos;re looking for a chatbot demo by
              Friday — I build systems meant to run in production, not
              prototypes.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className={iconBadgeClass}
              >
                <SiGithub size={18} />
              </a>
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Upwork profile"
                className={iconBadgeClass}
              >
                <SiUpwork size={20} />
              </a>
              <ScheduleIconButton
                className={iconBadgeClass}
                aria-label="Schedule a call via Zoom"
              >
                <MdVideocam size={20} />
              </ScheduleIconButton>
              <a
                href={`mailto:${EMAIL}`}
                aria-label="Email David"
                className={iconBadgeClass}
              >
                <SiGmail size={18} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
