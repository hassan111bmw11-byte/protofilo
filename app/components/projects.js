
export default function Projects() {
  const projects = [
    { title: "Project Mangment", desc: "full stack project management build with menn" ,link:"https://task-managment-saas.vercel.app/"  },
    { title: "News app", desc: "responsive web app with search and categoryes build with next.js + newsApi",link: "https://nextjs-news-app.vercel.app/" },
    { title: "Pdf translater", desc: "web app to translate pdfs build with Next.js + Tailwind + node.js + GroqApi + Vercel", link:"https://pdfapp-puce.vercel.app/" },
  ];

  return (
    <section id="projects" className="p-10 border-b flex h-screen justify-center items-center flex-col border-gray-600 snap-start">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-4 items-center justify-center ">
        {projects.map((p, i) => (
          <div key={i} className="flex flex-col gap-2 p-5 justify-center w-90 h-40 rounded bg-linear-to-b from-gray-800 to-gray-900 shadow">
            <h3 className="font-bold">{p.title}</h3>
            <p className="text-gray-500">{p.desc}</p>
            <a href={p.link} className="bg-linear-to-b from-blue-900 to-blue-950 w-fit text-white py-2 px-4 rounded hover:bg-linear-to-b hover:from-blue-600 hover:to-blue-500 transition duration-900">View project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
