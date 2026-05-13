import Hero from "./components/hero";
import Navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
export default function Home() {
  return (
    <div className="bg-linear-to-b  from-gray-900 to-gray-950">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-8 md:px-20 py-20 min-h-screen gap-12">
        <Skills />
        <Contact />
      </div>
    </div>
  );
}
