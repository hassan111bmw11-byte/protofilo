export default function Projects() {
  const projects = [
    {
      title: "bookly-احجزلي",
      desc: "full stack booking app build with next.js + Supabase + Tailwind",
      link: "https://booking-app-six-bice.vercel.app/",
    },
    {
      title: "Project Mangment",
      desc: "full stack project management build with menn",
      link: "https://task-managment-saas.vercel.app/",
    },
    {
      title: "News app",
      desc: "responsive web app with search and categoryes build with next.js + newsApi",
      link: "https://nextjs-news-app.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-40 px-8  md:px-20 min-h-screen bg-gray-950 snap-start"
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-white">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group flex flex-col gap-4 p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10"
          >
            <h3 className="text-xl font-bold text-white">{p.title}</h3>
            <p className="text-zinc-400 leading-relaxed grow">{p.desc}</p>
            <div className="flex gap-4">
              <a
                href={p.link}
                className="text-blue-500 border border-blue-500 px-10 py-1 hover:bg-blue-600 hover:text-white rounded-md font-medium inline-flex items-center gap-2"
              >
                live demo →
              </a>
              <a
                href={p.link}
                className="text-blue-500 border border-blue-500 px-2 py-1 hover:bg-blue-600 hover:text-white rounded-md font-medium  inline-flex items-center gap-2"
              >
                github repo →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
