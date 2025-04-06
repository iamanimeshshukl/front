import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  RiMenu3Line,
  RiCloseLine,
  RiHomeHeartLine,
  RiUserHeartLine,
  RiContactsBookLine,
  RiInformationLine,
  RiLogoutBoxRLine,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
//import img from "/src/assets/zenher-logo.png";
import { FaTools } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const navLinks = [
    { href: "/", label: "Home", icon: <RiHomeHeartLine className="mr-2" /> },
    { href: "/products", label: "Products", icon: <RiUserHeartLine className="mr-2" /> },
    { href: "/health", label: "Health Library", icon: <RiContactsBookLine className="mr-2" /> },
    { href: "/tools", label: "Tools", icon: <FaTools className="mr-2" /> },
    { href: "/about", label: "About Us", icon: <RiInformationLine className="mr-2" /> },
  ];

  return (
    <motion.div
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-[70em] bg-white shadow-lg z-50 px-6 py-2 rounded-full flex items-center justify-between space-x-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="https://res.cloudinary.com/denlloigs/image/upload/v1742224838/zenher-logo_lgfkwg.png" alt="Annanta Logo" className="h-16 w-16 rounded-full" />
       
      </div>
      
      {/* Navbar Links for Desktop */}
      <div className="hidden lg:flex items-center space-x-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex items-center text-gray-700 hover:text-teal-500 transition-all duration-300"
          >
            {link.icon}
            {link.label}
          </a>
        ))}
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center bg-pink-500 px-4 py-2 rounded-full text-white hover:bg-pink-600"
        >
         Try Zenher
        </button>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden">
        <motion.div
          className="flex items-center justify-center"
         
          transition={{ duration: 0.2 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <RiCloseLine className="text-gray-800" size={30} />
          ) : (
            <RiMenu3Line className="text-gray-800" size={30} />
          )}
        </motion.div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          
          className="absolute top-16 left-1/2 transform -translate-x-1/2 w-full bg-white shadow-lg p-6 rounded-lg flex flex-col items-center space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center text-gray-700 hover:text-teal-500 transition-all duration-300"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
         <button
      onClick={() => (window.location.href = "/signin")}
      className="flex items-center bg-red-600 px-4 py-2 rounded-full text-white hover:bg-red-800 transition duration-300"
    >
      Join Waitlist
    </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
