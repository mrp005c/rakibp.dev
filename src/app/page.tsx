import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
  <main className="min-h-[calc(100vh-105px)]">
    <Hero/>
    <About/>
    <Skills/>
  </main>
  );
}
