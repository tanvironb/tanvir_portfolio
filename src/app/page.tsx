import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      
      <footer className="w-full border-t border-white/10 bg-slate-950 py-8 text-center text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Tanvir Ahmmed. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <a href="https://github.com" className="hover:text-purple-400 transition-colors">GitHub</a>
            <a href="https://linkedin.com" className="hover:text-purple-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
}
