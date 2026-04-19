
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center  py- px-4 fixed w-full bg-gray-900  border-b border-gray-500 text-white">
      <ul className="flex mx-20 mt-4 gap-6 text-zinc-300">
        <a href="#home" className="h-10 hover:border-b-2 hover:border-b-blue-600 hover:text-white snap-y transition duration-500 ease">Home</a> 
        <a href="#about" className="h-10 hover:border-b-2 hover:border-b-blue-600 hover:text-white">About</a>
        <a href="#projects" className="h-10 hover:border-b-2 hover:border-b-blue-600 hover:text-white">Projects</a>
        <a href="#skills" className="h-10 hover:border-b-2 hover:border-b-blue-600 hover:text-white">Skills</a>
        <a href="#contact" className="h-10 hover:border-b-2 hover:border-b-blue-600 hover:text-white">Contact</a>
      </ul>
      <button className="mx-20 bg-linear-to-b from-blue-900 to-blue-950 text-white/90 py-2 px-4 rounded hover:bg-linear-to-b hover:from-blue-600 hover:to-blue-500 transition duration-900">Resume</button>
    </nav>
  );
}

