import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import Works from "@/components/sections/Works";

export default function Home() {
  return (
  <main className="min-h-[calc(100vh-105px)]">
    <Hero/>
    <About/>
    <Skills/>
    <Experience/>
    <Works/>
    <Testimonials/>
    <Contact/>
  </main>
  );
}
