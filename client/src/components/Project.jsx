import React from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Complete Backend Project",
    image: "", 
    description:
      "A backend system built with Node.js and Express, handling user authentication, API endpoints, and database operations.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
  },
  {
    title: "GitHub Automation Tool",
    image: "", // Add image URL if available
    description:
      "A project that automates GitHub workflows, including repo management, issue tracking, and PR handling.",
    technologies: ["Node.js", "GitHub API", "JavaScript"],
  },
  {
    title: "Todo CLI (Node.js)",
    image: "", // Add image URL if available
    description:
      "A command-line interface (CLI) tool for managing tasks with features like add, remove, and mark as done.",
    technologies: ["Node.js", "Commander.js", "File System"],
  },
  {
    title: "Todo Task Manager (JavaScript DOM)",
    image: "", // Add image URL if available
    description:
      "A task management web app built using JavaScript and DOM manipulation, allowing users to add, delete, and update tasks.",
    technologies: ["JavaScript", "DOM", "LocalStorage", "HTML", "CSS"],
  },
  {
    title: "HTML & CSS Projects",
    image: "", // Add image URL if available
    description:
      "Three different projects demonstrating front-end development skills using pure HTML and CSS.",
    technologies: ["HTML", "CSS", "Responsive Design"],
  },
];

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
      {/* Animated Heading */}
      <motion.h2
        className="my-10 text-center text-4xl text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects 💻
      </motion.h2>

      {/* Projects Section */}
      <div className="flex flex-col gap-16 px-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center gap-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Left Side → Image */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/3 h-auto rounded-lg shadow-lg object-cover"
              whileHover={{ scale: 1.05 }}
            />

            {/* Right Side → Text */}
            <div className="md:w-2/3 text-white">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-400">{project.description}</p>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="bg-cyan-700 text-white px-3 py-1 text-xs rounded-md shadow-md cursor-pointer hover:bg-cyan-500 hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
