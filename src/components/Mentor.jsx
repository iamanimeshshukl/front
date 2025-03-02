import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import img1 from "../assets/download.png";
import img2 from "../assets/download.jpeg";

const MentorSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div ref={containerRef} className="w-full py-12 flex flex-col items-center">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-gray-900 font-extrabold text-4xl md:text-5xl"
      >
        Our Mentors
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-gray-600 mt-2 text-lg md:text-xl text-center max-w-2xl"
      >
        We sincerely appreciate the invaluable guidance and support from our mentors.
      </motion.p>

      {/* Mentor Cards */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-wrap justify-center items-center gap-10 mt-10"
      >
        {[img1, img2].map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="backdrop-blur-md bg-white/30 shadow-lg border border-gray-200 rounded-3xl flex justify-center items-center h-28 w-44 md:h-32 md:w-52 transition-transform duration-300"
          >
            <img src={img} alt={`Mentor ${index + 1}`} className="h-20 md:h-24 object-contain" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MentorSection;
