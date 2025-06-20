import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaDatabase,
  FaMobileAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiRedux,
  SiMysql
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-500 text-4xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black text-4xl" /> },
  { name: "React Native", icon: <FaMobileAlt className="text-purple-500 text-4xl" /> },
  { name: "Redux", icon: <SiRedux className="text-indigo-500 text-4xl" /> },
  { name: "Node.js", icon: <FaNode className="text-green-600 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-4xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700 text-4xl" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-50 w-full px-6 py-16 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#6A5AE0]">Skills</h2>
        <p className="text-gray-600 mt-2">Technologies I work with</p>
        <div className="h-1 w-24 bg-[#6A5AE0] mx-auto mt-4 rounded"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition duration-300 group"
          >
            <div className="flex justify-center mb-4">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#6A5AE0]">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
