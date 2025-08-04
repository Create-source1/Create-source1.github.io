import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Care Companion – Pet Care Application ",
    description:
      "A comprehensive pet care app designed to manage routines, track health records, schedule vet appointments, and explore nearby pet-friendly spots—all through a clean, responsive interface.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "Firebase",
      "Chart.js",
      "Tailwind CSS",
      "Google Maps API",
    ],
    coverImage: "/care-companion.png", // replace with actual
    githubLink: "https://github.com/Create-source1/care-companion-application",
    liveLink: "https://care-companion.netlify.app/", // or video link
  },
  {
    title: "Momento – Event Management Platform",
    description:
      "A full-featured event management system allowing users to create, edit, and delete events, send RSVP and email invitations, and view precise event locations on an interactive map.",
    techStack: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Postman",
      "Tailwind CSS",
      "Google Maps API",
      "JWT",
      "Nodemailer",
    ],
    coverImage: "/momento.png",
    githubLink: "https://github.com/Create-source1/momento-frontend",
    liveLink: "https://momento-pj.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-17 bg-gradient-to-br from-cyan-50 to-indigo-50 scroll-mt-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-14">
        Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 text-indigo-700 px-2 py-1 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 mt-auto">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                >
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
