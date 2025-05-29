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
    <div className="w-full py-16 flex flex-col items-center text-white">
      {/* Heading */}
      <h1 className="font-bold text-4xl text-pink-600 md:text-5xl tracking-tight">
        Our Collaborators
      </h1>

      {/* Collaborator Cards */}
      <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
        {collaborators.map((collab, index) => (
          <a
            key={index}
            href={collab.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-lg border border-white rounded-xl flex justify-center items-center p-6 h-40 w-52 md:h-48 md:w-60 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={collab.img}
              alt={`Collaborator ${index + 1}`}
              className="h-24 md:h-28 object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default MentorSection;
