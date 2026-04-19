import Image from "next/image";
export default function About() {
  return (
    <section id="about" className="p-10 border-b w-full h-screen flex justify-between items-center bg-linear-to-b from-gray-900 to-gray-950 border-gray-600 snap-start">
      <div className="ml-20">  
         <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="w-100 text-zinc-300 text-2xl">
        I am a passionate developer skilled in both frontend and backend technologies. I love creating efficient and innovative web solution.
      </p>
      </div>
      <Image className="mr-20" src="/comuter.jpg" width={300} height={300} alt="profile" />
   
    </section>
  );
}
