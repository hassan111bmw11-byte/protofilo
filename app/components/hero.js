"use client";
import Image from "next/image";
export default function Hero() {
  return (
    <section id="home" className="h-screen flex justify-between gap-50 border-b border-gray-600 items-center bg-linear-to-r from-gray-950 via-gray-900 to-gray-950 text-white text-center p-6 snap-start">
      <div className="grid grid-col justify-center w-full gap-4">
          <h1 className="text-zinc-300 text-2xl">Hello , Im</h1>
          <b className=" text-4xl"><span className="text-blue-800">Hassan</span> Farhan</b>
          <h1 className=" text-zinc-200 text-2xl font-bold">Full Stack Developer</h1>
          <h2 className="text-zinc-300">I build web applications that solve problems</h2>
        <div className="flex gap-4">
          <a href="#projects" className="px-4 py-2 text-white/90 bg-linear-to-b from-blue-900 to-blue-950 hover:bg-linear-to-b hover:from-blue-600 hover:to-blue-500 transition duration-900 rounded">View My Work</a>
          <a href="#contact" className="px-6 py-2 text-white/90 border rounded  hover:bg-linear-to-b hover:from-blue-600 hover:to-blue-500 transition duration-900">Contact Me</a>
        </div>
      </div>
      <div className="w-full overflow-hidden">
      <Image className="rounded mt-10 h-fit w-fit" src="/hassan.jpg" loading="eager" width={350} height={350} alt="profile" />

      </div>
    </section>
  );
}