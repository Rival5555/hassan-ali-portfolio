import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(139,92,246,0.25),_transparent_60%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-4 pb-16 pt-28 sm:px-6 lg:px-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
