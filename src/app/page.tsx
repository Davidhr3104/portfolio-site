import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Stack } from "@/components/sections/Stack";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
