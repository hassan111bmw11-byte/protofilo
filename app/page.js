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
      <div className="flex justify-between items-center border-b mx-20 h-screen"> 
        <Skills />
      <Contact /></div>
     
    </div>
    
  );
}
