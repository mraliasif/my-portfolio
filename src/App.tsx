import { SpeedInsights } from "@vercel/speed-insights/react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Stats from "./components/Stats";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#05050A] text-white">
      {/* film grain overlay */}
      <div className="grain pointer-events-none fixed inset-0 z-40" aria-hidden />

      <Nav />

      <main>
        <Hero />
        <Stats />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <SpeedInsights />
    </div>
  );
}
