import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import Quiz from "../components/Quiz";
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
    <>
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
          <motion.button
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <RiCloseLine className="text-gray-800" size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <RiMenu3Line className="text-gray-800" size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Blur Background */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-pink-600/90 via-pink-700/90 to-pink-800/90 backdrop-blur-2xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <div className="relative h-full flex flex-col justify-center items-center px-6 py-8">
              
              
                
              
      <br></br>
 <br></br>
 <br></br>
                {/* Navigation Links */}
                <div className="w-full max-w-sm space-y-4 mb-12 mt-12">
                  {navLinks.map((link, index) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="flex items-center p-4 bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 text-white hover:bg-white/25 transition-all duration-300 group shadow-xl"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/25 group-hover:bg-white/35 transition-all duration-300 mr-4">
                        {React.cloneElement(link.icon, { 
                          className: "text-white text-xl",
                          size: 24
                        })}
                      </div>
                      <span className="font-semibold text-lg text-white">{link.label}</span>
                    </a>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="w-full max-w-sm space-y-4">
                  
                  
                  
                  <button>
                   <Quiz/>
                  </button>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
