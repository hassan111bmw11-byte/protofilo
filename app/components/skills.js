import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="w-full md:w-1/2">
      <h2 className="text-3xl font-bold mb-10 text-white">Technical Skills</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center gap-2 group">
          <div className="p-4 bg-gray-900 border border-gray-800 rounded-xl group-hover:border-blue-500 transition-all transform group-hover:-translate-y-2">
            <FaReact className="floating-logo text-teal-400 text-4xl" />
          </div>
          <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
            React
          </span>
        </div>
        {/* كرر نفس النمط لبقية الأيقونات */}
        <div className="flex flex-col items-center gap-2 group">
          <div className="p-4 bg-gray-900 border border-gray-800 rounded-xl group-hover:border-blue-500 transition-all transform group-hover:-translate-y-2">
            <SiNextdotjs className="text-white text-4xl" />
          </div>
          <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
            Next.js
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 group">
          <div className="p-4 bg-gray-900 border border-gray-800 rounded-xl group-hover:border-blue-500 transition-all transform group-hover:-translate-y-2">
            <IoLogoJavascript className="text-yellow-400 text-4xl" />
          </div>
          <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
            JS
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 group">
          <div className="p-4 bg-gray-900 border border-gray-800 rounded-xl group-hover:border-blue-500 transition-all transform group-hover:-translate-y-2">
            <RiTailwindCssFill className="text-sky-400 text-4xl" />
          </div>
          <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
            Tailwind
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 group">
          <div className="p-4 bg-gray-900 border border-gray-800 rounded-xl group-hover:border-blue-500 transition-all transform group-hover:-translate-y-2">
            <FaNodeJs className="text-yellow-400 text-4xl" />
          </div>
          <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
            Node.js
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 group">
          <div className="p-4 bg-gray-900 border border-gray-800 rounded-xl group-hover:border-blue-500 transition-all transform group-hover:-translate-y-2">
            <FaGitAlt className="text-orange-600 text-4xl" />
          </div>
          <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
            Git
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 group">
          <div className="p-4 bg-gray-900 border border-gray-800 rounded-xl group-hover:border-blue-500 transition-all transform group-hover:-translate-y-2">
            <FaGithub className="text- text-4xl" />
          </div>
          <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
            GitHub
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 group">
          <div className="p-4 bg-gray-900 border border-gray-800 rounded-xl group-hover:border-blue-500 transition-all transform group-hover:-translate-y-2">
            <RiSupabaseFill className="text-green-500 text-4xl" />
          </div>
          <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
            Supabase
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 group">
          <div className="p-4 bg-gray-900 border border-gray-800 rounded-xl group-hover:border-blue-500 transition-all transform group-hover:-translate-y-2">
            <SiPostgresql className="text-green-600 text-4xl" />
          </div>
          <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
            PostgreSQL
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 group">
          <div className="p-4 bg-gray-900 border border-gray-800 rounded-xl group-hover:border-blue-500 transition-all transform group-hover:-translate-y-2">
            <SiMongodb className="text-green-500 text-4xl" />
          </div>
          <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">
            MongoDB
          </span>
        </div>
      </div>
    </section>
  );
}
