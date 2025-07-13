import React from "react";
import img1 from "../assets/download.png";
import healthcompass from "../assets/Health Compass Logo PNG.png";
import orangeleaf from "../assets/Orange Leaf Logo.jpg";

const MentorSection = () => {
  // Array of collaborator info: image and corresponding URL
  const collaborators = [
    { img: img1, url: "" },
    { img: healthcompass, url: "https://healthcompass.io/" },
    { img: orangeleaf, url: "https://www.orangeleaf.co.in/" },
  ];

  return (
    <div className="w-full py-20 flex flex-col items-center text-white">
      {/* Professional Heading Section */}
      <div className="text-center mb-16">
        <h1 className="font-bold text-4xl text-pink-600 md:text-5xl tracking-tight mb-4">
          Our Collaborators
        </h1>
        <div className="w-24 h-1 bg-pink-600 mx-auto rounded-full"></div>
      </div>

      {/* Professional Collaborator Cards Container */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {collaborators.map((collab, index) => (
            <a
              key={index}
              href={collab.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex flex-col justify-center items-center p-8 h-48 w-full max-w-sm transition-all duration-500 hover:bg-white/20 hover:border-white/40 hover:scale-105 hover:shadow-2xl"
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 rounded-2xl"></div>
              
              {/* Logo container with professional styling */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 mb-4 shadow-lg">
                  <img
                    src={collab.img}
                    alt={`Collaborator ${index + 1}`}
                    className="h-20 w-auto object-contain max-w-full"
                  />
                </div>
                
                {/* Subtle indicator for clickable cards */}
                {collab.url && (
                  <div className="flex items-center text-white/70 text-sm group-hover:text-white transition-colors duration-300">
                    <span className="mr-2">Visit Partner</span>
                    <svg 
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorSection;
