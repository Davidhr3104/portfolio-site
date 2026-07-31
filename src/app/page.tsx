import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Tools } from "@/components/sections/Tools";
import { HowIWork } from "@/components/sections/HowIWork";
import { Projects } from "@/components/sections/Projects";
import { Impact } from "@/components/sections/Impact";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Tools />
      <HowIWork />
      <Projects />
      <Impact />
      <Faq />
      <Contact />
    </>
  );
}
