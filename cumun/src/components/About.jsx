import React from "react";
import VantaBackground from "./VantaBackground";

const About = () => {
  return (
    <VantaBackground>
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
            About the Conference
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The Chandigarh University Model United Nations Conference brings
            together students from around the country to simulate the United
            Nations and other international bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-red-600 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6">
              The CU MUN Conference is designed to empower aspiring leaders by
              fostering thoughtful discussions, honing diplomatic abilities, and
              offering a deeper understanding of global governance and
              international affairs.
            </p>

            <h3 className="text-2xl font-bold text-red-600 mb-4">
              Conference Theme
            </h3>
            <p className="text-gray-600 mb-6">
              The theme for the CU MUN 2025 Conference is "Diplomacy Beyond
              Borders: Tackling Global Challenges Through the Prism of Science,
              Security, and Sustainability."
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
              <a
                href="#committees"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors duration-300 text-center"
              >
                View Committees
              </a>
              <a
                href="#registration"
                className="px-6 py-3 bg-transparent hover:bg-gray-100 text-red-600 font-medium rounded-md border border-red-800 transition-colors duration-300 text-center"
              >
                Register Now
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative max-w-full w-full md:w-auto">
              <img
                src="src/public/iste2.jpg"
                alt="Students in discussion"
                className="rounded-lg shadow-lg w-full max-h-[400px] object-contain"
                style={{ imageRendering: "auto" }}
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-4 rounded-lg shadow-lg">
                <p className="text-xl font-bold">New Beginnings</p>
                <p className="text-sm">Committed to Excellence</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:scale-105">
            <div className="text-red-600 font-bold text-4xl mb-2">300+</div>
            <p className="text-gray-600">Delegates</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:scale-105">
            <div className="text-red-600 font-bold text-4xl mb-2">5</div>
            <p className="text-gray-600">Committees</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:scale-105">
            <div className="text-red-600 font-bold text-4xl mb-2">50+</div>
            <p className="text-gray-600">Universities</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:scale-105">
            <div className="text-red-600 font-bold text-4xl mb-2">3</div>
            <p className="text-gray-600">Days of Debate</p>
          </div>
        </div>
      </div>
    </section>
    </VantaBackground>
  );
};

export default About;

