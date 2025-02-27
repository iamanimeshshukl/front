import React from "react";
import img1 from "../assets/download.png";
import img2 from "../assets/download.jpeg";

const MentorSection = () => {
  return (
    <div className="w-full h-[35vh] bg-gradient-to-r from-pink-100 to-purple-200 rounded-lg shadow-lg p-6 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-purple-800 font-extrabold text-4xl md:text-5xl">Our Mentors</h1>
        <p className="text-pink-600 mt-2 text-lg md:text-xl">
       We sincerely appreciate the invaluable guidance and support from our platforms
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
        {[img1, img2].map((img, index) => (
          <div
            key={index}
            className="p-5 bg-white shadow-lg border border-gray-300 rounded-xl flex justify-center items-center h-24 w-36 md:h-28 md:w-44 transition-transform duration-300 hover:scale-105"
          >
            <img src={img} alt={`Mentor ${index + 1}`} className="h-16 md:h-20 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorSection;
