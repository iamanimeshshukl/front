import React from "react";
import img1 from "../assets/download.png";
import img2 from "../assets/download.jpeg";

const MentorSection = () => {
  return (
    <div className="w-full py-16 flex flex-col items-center text-white">
      {/* Heading */}
      <h1 className="font-bold text-4xl text-pink-600 md:text-5xl tracking-tight">Our Collaborators</h1>
    

      {/* Mentor Cards */}
      <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
        {[img1, img2].map((img, index) => (
          <div
            key={index}
            className="bg-white shadow-lg border border-white rounded-xl flex flex-col items-center p-6 h-40 w-52 md:h-48 md:w-60 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img src={img} alt={`Mentor ${index + 1}`} className="h-24 md:h-28 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorSection;
