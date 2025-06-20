import React from "react";
import aboutImg from "../../public/about-us.png"; // replace with your actual image path

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#f8f8ff] py-20 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-10"
    >
      {/* Left Image */}
      <div className="flex justify-center w-full lg:w-1/2">
        <img
          src={aboutImg}
          alt="About Illustration"
          className="max-w-md w-full"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight mb-4">
          LET’S <br />
          INTRODUCE ABOUT <br />
          MYSELF
        </h2>
        <p className="text-gray-600 mb-4">
          I'm a passionate MERN Stack and mobile app developer who thrives on
          building responsive, high-performance web and mobile applications.
          With a strong grasp of both frontend and backend technologies, I love
          turning ideas into scalable and elegant digital solutions.
        </p>

        <p className="text-gray-600 mb-8">
          From crafting sleek React interfaces to building powerful RESTful APIs
          with Node.js and MongoDB, I ensure smooth user experiences and
          efficient data handling. Whether it's a full-stack web platform or a
          modern cross-platform mobile app, I bring creativity, clean code, and
          dedication to every project I work on.
        </p>

        <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold px-8 py-3 rounded-md shadow-md hover:opacity-90 transition">
          DOWNLOAD CV
        </button>
      </div>
    </section>
  );
};

export default About;
