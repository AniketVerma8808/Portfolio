import React from "react";
import heroImg from "../../public/home-right.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full bg-white px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 overflow-hidden"
    >
      {/* Left Text Section */}
      <div className="z-10">
        <div className="flex items-center mb-4">
          <h2 className="text-3xl font-bold text-black">HELLO</h2>
          <div className="h-1 flex-1 bg-[#6A5AE0] ml-4"></div>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-black leading-tight">
          I AM <span className="text-[#6A5AE0]">ANIKET VERMA</span>
        </h1>

        <p className="text-xl font-semibold text-gray-700 mt-4">
          FULL STACK DEVELOPER
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-[#6A5AE0] text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300">
            HIRE ME
          </button>
          <button className="border-2 border-[#6A5AE0] text-[#6A5AE0] px-6 py-3 rounded-lg hover:bg-[#f4f4f4] transition">
            GET CV
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="z-10 flex justify-center">
        <img
          src={heroImg}
          alt="Developer Illustration"
          className="max-w-[400px] w-full object-contain animate-fadeIn"
        />
      </div>
    </section>
  );
};

export default Hero;
