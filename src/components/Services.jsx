import React from "react";
import { FaCode, FaMobileAlt, FaPaintBrush, FaServer } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    icon: <FaCode className="text-[#6A5AE0] text-4xl mb-4" />,
    description: "Building responsive and modern websites using React.js, Next.js and more.",
  },
  {
    title: "Mobile App Development",
    icon: <FaMobileAlt className="text-[#6A5AE0] text-4xl mb-4" />,
    description: "Cross-platform mobile apps using React Native with fast and smooth UI.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush className="text-[#6A5AE0] text-4xl mb-4" />,
    description: "Intuitive user interface and experience design that enhances engagement.",
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-[#6A5AE0] text-4xl mb-4" />,
    description: "Secure and scalable backend with Node.js, Express.js, and database systems.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white w-full px-6 py-16 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#6A5AE0]">Services</h2>
        <p className="text-gray-600 mt-2">What I can do for you</p>
        <div className="h-1 w-24 bg-[#6A5AE0] mx-auto mt-4 rounded"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-6 text-center shadow hover:shadow-xl transition duration-300"
          >
            {service.icon}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
