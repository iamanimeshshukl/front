import React from 'react';
import logo from '../assets/logo.png'; // Logo path
import productImage from '../assets/products/ANNANTA PHARMACEUTICALS.jpg'; // Product image
//import { FaCapsules } from 'react-icons/fa'; // Pharmaceutical-related icon
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div>
      <div className="p-6 sm:p-12 m-4 rounded-3xl bg-gradient-to-r from-gray-100 via-white to-gray-100 text-gray-900 flex items-center justify-center overflow-hidden shadow-2xl relative">
        {/* Background 3D Effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-30"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5 }}
        ></motion.div>
        <motion.div
          className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl opacity-50"
          initial={{ x: -100, y: -100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 0.3 }}
          transition={{ duration: 1.2 }}
        ></motion.div>

        <div className="w-full max-w-6xl px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left Side: Logo and Name */}
            <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <motion.img
                  src={logo}
                  alt="Annanta Pharmaceuticals Logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  initial={{ rotateY: -90 }}
                  animate={{ rotateY: 0 }}
                  transition={{ duration: 1 }}
                />
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase leading-tight tracking-tight"
                  initial={{ textShadow: "0px 0px 0px rgba(0, 0, 0, 0)" }}
                  animate={{ textShadow: "3px 3px 10px rgba(0, 0, 0, 0.3)" }}
                  transition={{ duration: 1 }}
                >
                  Annanta <span className="text-teal-500">Pharmaceuticals</span>
                </motion.h1>
              </div>
              <p className="mt-4 text-sm sm:text-base md:text-lg font-medium text-gray-600">
                Advancing pharmaceutical innovation for healthier lives.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-4">
              <motion.a
  href="tel:+919839175313"
  className="rounded-md p-3 grow text-center bg-rose-500 text-white font-bold uppercase text-sm tracking-widest hover:bg-yellow-400 transition"
  whileHover={{ scale: 1.1 }}
>
  Call Now - +91 9839175313
</motion.a>

                <motion.a
                  href="https://drive.google.com/file/d/1UbyvQNODGAxc0AuTh29ZrCEmBEAvDwU8/view?usp=sharing" // Replace with the actual path to your PDF
                  download="Download.pdf" // Optional: Specifies the default name of the downloaded file
                  className="rounded-md p-3 grow border text-center border-rose-500 text-rose-500 font-bold uppercase text-sm tracking-widest hover:bg-rose-500 hover:text-white transition"
                  whileHover={{ scale: 1.1 }}
                >
                  Download Brochure
                </motion.a>
              </div>
            </div>

            {/* Right Side: Product Image */}
            <motion.div
              className="relative flex items-center sm:m-10"
              initial={{ scale: 0.8, opacity: 0.8, rotateY: 15 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={productImage}
                alt="Product"
                className="rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
