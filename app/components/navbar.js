export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center py-4 px-8 md:px-20 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 text-white">
      <div className="text-xl font-bold bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
        HF.
      </div>
      <ul className="hidden md:flex gap-8 text-zinc-400 font-medium">
        <li><a href="#home" className="hover:text-blue-500 transition-colors">Home</a></li>
        <li><a href="#about" className="hover:text-blue-500 transition-colors">About</a></li>
        <li><a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a></li>
        <li><a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a></li>
        <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
      </ul>
      <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition-all shadow-lg shadow-blue-900/20">Resume</button>
    </nav>
  );
}
