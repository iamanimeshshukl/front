import React, { useState } from "react";
import { motion } from "framer-motion";
//import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import img from "../assets/smart.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
    className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-[70em] bg-white shadow-lg z-50 px-6 py-4 rounded-full flex items-center justify-center gap-3"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    {/* Logo & Company Name */}
    <img src={img} alt="Zenher Logo" className="h-10 w-10 object-contain" />
    <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text text-2xl font-bold">
    Zenher
  </div>
  </motion.div>
  
  );
};

export default Navbar;