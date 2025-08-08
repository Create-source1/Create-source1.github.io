// src/components/sections/Skills.jsx
import React from "react";

const techStack = [
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
];

const tools = [
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Netlify",
    logo: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
  },
  {
    name: "Postman",
    logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-indigo-50 to-cyan-50 scroll-mt-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-14">
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-20">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center bg-white p-4 rounded-xl shadow transition duration-300 ease-in-out hover:bg-indigo-50 hover:ring-2 hover:ring-indigo-300 glow-hover"
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-16 h-16 object-contain mb-3 pointer-events: none;"
            />
            <p className="text-gray-700 font-semibold">{tech.name}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-14">
        Tools
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex flex-col items-center bg-white p-4 rounded-xl shadow transition duration-300 ease-in-out hover:bg-indigo-50 hover:ring-2 hover:ring-indigo-300 glow-hover"
          >
            <img
              src={tool.logo}
              alt={tool.name}
              className="w-16 h-16 object-contain mb-3 pointer-events: none;"
            />
            <p className="text-gray-700 font-semibold">{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
