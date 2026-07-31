import { ToolMarquee } from "@/components/ToolMarquee";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { HowIWork } from "@/components/sections/HowIWork";
import { Projects } from "@/components/sections/Projects";
import { Impact } from "@/components/sections/Impact";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ToolMarquee />
      <About />
      <HowIWork />
      <Projects />
      <Impact />
      <Contact />
    </>
  );
}
