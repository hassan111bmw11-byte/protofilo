"use client";
import Image from "next/image";
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center md:justify-between items-center bg-linear-to-br from-gray-950 via-gray-900 to-black text-white px-8 md:px-20 py-20 snap-start"
    >
      <div className="flex flex-col gap-6 max-w-2xl text-center md:text-left">
        <div>
          <h3 className="text-blue-500 font-mono mb-2">Hello, my name is</h3>
          <h1 className="text-5xl md:text-7xl font-bold mb-2 text-white">
            Hassan <span className="text-blue-600">Farhan</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-400">
            I build things for the web.
          </h2>
        </div>
        <p className="text-zinc-400 text-lg max-w-lg leading-relaxed">
          I'm a Full Stack Developer specializing in building exceptional
          digital experiences that solve real-world problems.
        </p>
        <div className="flex gap-4 justify-center md:justify-start mt-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all transform hover:-translate-y-1"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-zinc-700 hover:bg-zinc-800 rounded-lg font-medium transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="relative mt-12 md:mt-0">
        <div className="absolute -inset-1 bg-blue-600 rounded-full blur opacity-25"></div>
        <Image
          className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
          src="/hassan.jpg"
          loading="eager"
          width={350}
          height={350}
          alt="profile"
        />
      </div>
    </section>
  );
}
