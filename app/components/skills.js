import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";





export default function Skills() {
  return (
    <section id="skills" className="p-10 snap-start">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-8 w-100 ">
          <span className="p-4 scale-125 bg-white/30 rounded">
            <FaReact className="text-teal-600 text-3xl hover:text-teal-600/80 hover:scale-125 transition duration-300 ease" />
          </span>

              <span className="p-4 scale-125 bg-white/30 rounded">
            <FaNodeJs className="text-yellow-400 text-3xl hover:text-yellow-300/80 hover:scale-125 transition duration-300 ease" />
          </span>
              <span className="p-4 scale-125 bg-white/30 rounded">
            <SiNextdotjs className=" text-3xl hover:text-white/80 hover:scale-125 transition duration-300 ease" />
          </span>
              <span className="p-4 scale-125 bg-white/30 rounded ">
            <FaGitAlt className="text-orange-600 text-3xl hover:text-orange-500 hover:scale-125 transition duration-300 ease" />
          </span>
              <span className="p-4 scale-125 bg-white/30 rounded ">
            <FaGithub className="text-black text-3xl hover:text-black/70 hover:scale-125 transition duration-300 ease" />
          </span>
              <span className="p-4 scale-125 bg-white/30 rounded ">
            <IoLogoJavascript className=" text-amber-400 text-3xl hover:text-amber-300 hover:scale-125 transition duration-300 ease" />
          </span>
            <span className="p-4 scale-125 bg-white/30 rounded">
            <RiTailwindCssFill className=" text-teal-400 text-3xl hover:text-teal-300  hover:scale-125 transition duration-300 ease" />
          </span>
      </div>
    </section>
  );
}
