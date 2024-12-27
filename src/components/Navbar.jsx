import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaBriefcaseMedical,
  FaInfoCircle,
  FaPhoneAlt,
} from "react-icons/fa";
import img from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: <FaHome className="mr-2" /> },
    { href: "/about", label: "About Us", icon: <FaInfoCircle className="mr-2" /> },
    { href: "/product", label: "Products", icon: <FaBriefcaseMedical className="mr-2" /> },
    { href: "/contact", label: "Contact", icon: <FaPhoneAlt className="mr-2" /> },
  ];

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 text-white shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={img} alt="Annanta Logo" className="h-14" />
          <p className="text-2xl font-extrabold tracking-wide">
            Annanta <span className="text-teal-200">Pharmaceuticals</span>
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium text-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center hover:text-yellow-400 transition duration-300"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gradient-to-b from-teal-600 to-teal-500 px-6 py-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-white items-center hover:text-yellow-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center">
                {link.icon}
                {link.label}
              </span>
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
