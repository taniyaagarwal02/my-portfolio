import React from "react";

const projects = [
  {
    title: "Travel Planner App",
    description:
      "A smart travel planner that recommends routes, hotels, and activities based on preferences.",
    tech: ["React", "Tailwind", "OpenAI"],
    link: "https://github.com/TaniyaAgarwal02/travel-app",
  },
  {
    title: "Weather Forecast for Farmers",
    description:
      "Weather dashboard built with Spring Boot tailored for farmers with local language support.",
    tech: ["Java", "Spring Boot", "HTML/CSS"],
    link: "https://github.com/TaniyaAgarwal02/weather-app",
  },
  {
    title: "Portfolio Website",
    description:
      "Responsive single-page portfolio built with React and TailwindCSS.",
    tech: ["React", "Tailwind CSS"],
    link: "https://github.com/TaniyaAgarwal02/portfolio",
  },
];

const Projects = () => {
  return (
    <section className="w-full text-white px-4 py-10" id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-8 text-center">
        Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-md hover:shadow-orange-400/40 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-orange-600 text-white text-xs font-medium px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-sm"
            >
              View Code &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
