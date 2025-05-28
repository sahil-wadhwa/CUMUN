import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <section id="home" className="relative w-screen h-screen bg-red-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r to-red-900/90 from-red-600/40 z-10"></div>

      <div
        className="absolute inset-0 bg-cover bg-top z-0"
        style={{
          backgroundImage: "url('https://i.ibb.co/gMqc21t4/191230189-3739112682862090-9220374159950932563-n.jpg')",
        }}
      ></div>

      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-3 py-1 bg-red-600 rounded-full">
            <span className="text-white text-sm font-medium">
              September 8-10, 2025
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            <span className="text-red-600">Chandigarh</span> University <br />
            Model United Nations Conference 2025
          </h1>

          <p className="text-xl text-red-200 mb-8 max-w-1xl">
            Join us for three days of diplomacy, debate, and dialogue as we
            tackle the world's most pressing challenges together.
          </p>

          <div className="flex flex-col text-white sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div
              href="#registration"
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-yellow font-medium rounded-md duration-300 text-center"
            >
              Register Now
            </div>
            <div
              href="#about"
              className="px-8 py-3 bg-transparent hover:bg-white/10 text-white font-medium rounded-md border border-white transition-colors duration-300 text-center"
            >
              Learn More
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <a href="#about" className="flex flex-col items-center text-white">
            <span className="mb-2 text-sm">Scroll Down</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;