import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa6";
import logo from "/src/assets/zenher-logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-purple-900 to-pink-800 text-white py-12 px-6 md:px-16 lg:px-32 overflow-hidden">
      {/* Decorative SVG Wave */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 320"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff"
            fillOpacity="0.1"
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,144C672,139,768,149,864,165.3C960,181,1056,203,1152,202.7C1248,203,1344,181,1392,170.7L1440,160V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0V96Z"
          ></path>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Zenher Logo" className="h-16 w-16 mb-3" />
          <p className="text-sm max-w-sm">
            Empowering women's healthcare with innovative solutions, AI-driven insights, and holistic wellness.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-6">
          <a href="/about" className="hover:text-pink-300 transition">About Us</a>
          <a href="/products" className="hover:text-pink-300 transition">Services</a>
          <a href="/article" className="hover:text-pink-300 transition">Blog</a>
          <a href="/termandconditions" className="hover:text-pink-300 transition">Terms & Conditions</a>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start text-sm space-y-2">
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <a href="mailto:info@zenher.com" className="hover:text-pink-300 transition">
              zenherhealth@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone />
            <a href="tel:+916392637347" className="hover:text-pink-300 transition">
             +91 6392637347
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-pink-300 transition"><FaFacebookF size={20} /></a>
          <a href="#" className="hover:text-pink-300 transition"><FaXTwitter size={20} /></a>
          <a href="https://www.instagram.com/zenher.co?igsh=MmR2OWJkNG9xcDVn" className="hover:text-pink-300 transition"><FaInstagram size={20} /></a>
          <a href=" https://www.linkedin.com/company/zenher/ " className="hover:text-pink-300 transition"><FaLinkedinIn size={20} /></a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm mt-8 border-t border-pink-500 pt-4">
        &copy; {new Date().getFullYear()} Zenher Healthcare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
