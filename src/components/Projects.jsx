import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio built using React.js and Tailwind CSS to showcase skills, services, and contact information.",
    image: "/projects/portfolio.png", // Put your actual image path in public folder
    demoLink: "https://your-portfolio-url.com",
    codeLink: "https://github.com/yourusername/portfolio",
  },
  {
    title: "E-commerce App",
    description: "Full-stack MERN application with product listing, cart, payment gateway and admin dashboard.",
    image: "/projects/ecommerce.png",
    demoLink: "https://your-ecommerce-demo.com",
    codeLink: "https://github.com/yourusername/ecommerce-app",
  },
  {
    title: "Chat App",
    description: "Real-time chat application using Socket.io and React Native with authentication and chat room features.",
    image: "/projects/chatapp.png",
    demoLink: "https://your-chatapp-demo.com",
    codeLink: "https://github.com/yourusername/chat-app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 w-full px-6 py-16 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#6A5AE0]">Projects</h2>
        <p className="text-gray-600 mt-2">A few recent works I've done</p>
        <div className="h-1 w-24 bg-[#6A5AE0] mx-auto mt-4 rounded"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{project.description}</p>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#6A5AE0] text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#6A5AE0] text-[#6A5AE0] px-4 py-2 rounded hover:bg-[#f2f2ff] transition"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
