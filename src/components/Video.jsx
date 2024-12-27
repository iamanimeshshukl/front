import React from "react";
import { motion } from "framer-motion";
import img from "../assets/logo.png";
import video from "../assets/products/ANNANTA VIDEO.mp4";

const Video = () => {
  return (
    <div>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <motion.video
              className="absolute inset-0 w-full h-full object-cover blur-sm"
              src={video}
              type="video/mp4"
              autoPlay
              muted
              loop
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
          </motion.div>
        </div>

        {/* Overlay Content */}
        <motion.div
          className="relative z-10 space-y-6 px-6 md:px-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Logo and Title */}
          <div className="flex flex-col items-center space-y-4">
            <motion.img
              src={img}
              alt="Annanta Logo"
              className="h-20 md:h-32"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            <motion.h1
              className="font-bold text-4xl md:text-6xl leading-tight tracking-widest"
              initial={{ textShadow: "0px 0px 0px rgba(0, 0, 0, 0)" }}
              animate={{ textShadow: "5px 5px 15px rgba(0, 0, 0, 0.5)" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              Annanta <span className="text-teal-300">Pharmaceuticals</span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Your trusted partner in pharmaceutical excellence.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};

export default Video;
