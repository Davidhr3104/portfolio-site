"use client";

import { SiGmail, SiUpwork, SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { MdVideocam } from "react-icons/md";
import { Reveal } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { ContactForm } from "@/components/ContactForm";
import { ScheduleIconButton } from "@/components/ScheduleIconButton";
import { useLocale } from "@/components/LocaleProvider";

const UPWORK_URL = "https://www.upwork.com/freelancers/~01cbe720b774ffd4c6";
const GITHUB_URL = "https://github.com/Davidhr3104";
const LINKEDIN_URL = "https://www.linkedin.com/in/david-herrera-tech-ea/";
const EMAIL = "andreshr4578@gmail.com";

const iconBadgeClass =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface border border-border text-foreground/80 outline-hidden transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Contact() {
  const { t } = useLocale();

  return (
    <section id="contact" className="relative overflow-hidden border-t border-border">
      <div className="relative mx-auto max-w-5xl px-6 py-32 sm:py-40 lg:py-48">
        <Reveal>
          <SectionLabel>{t.contact.label}</SectionLabel>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <Reveal delay={80} className="order-2 md:order-1">
            <ContactForm />
          </Reveal>

          <Reveal delay={40} className="order-1 md:order-2">
            <p className="font-serif text-2xl leading-snug text-foreground sm:text-3xl">
              {t.contact.heading}
            </p>
            <p className="mt-3 font-sans text-sm text-muted">{t.contact.responds}</p>
            <p className="mt-1 font-sans text-sm text-muted">{t.contact.location}</p>
            <p className="mt-4 max-w-md font-sans text-sm text-muted">
              {t.contact.notRightFit}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.linkedinAria}
                className={iconBadgeClass}
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.githubAria}
                className={iconBadgeClass}
              >
                <SiGithub size={18} />
              </a>
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.upworkAria}
                className={iconBadgeClass}
              >
                <SiUpwork size={20} />
              </a>
              <ScheduleIconButton
                className={iconBadgeClass}
                aria-label={t.contact.scheduleAria}
              >
                <MdVideocam size={20} />
              </ScheduleIconButton>
              <a
                href={`mailto:${EMAIL}`}
                aria-label={t.contact.emailAria}
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
