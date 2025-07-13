import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";
import logo from "/src/assets/zenher-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#2D0E5E] text-white px-6 py-12 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Zenher Logo" className="h-14 w-14 mb-4" />
          <p className="text-sm leading-relaxed text-center md:text-left">
            Empowering women’s healthcare with AI-driven insights and holistic wellness.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <a href="/about" className="hover:text-pink-300 transition">About Us</a>
          <a href="/products" className="hover:text-pink-300 transition">Services</a>
          <a href="/health" className="hover:text-pink-300 transition">Blog</a>
          <a href="/termandconditions" className="hover:text-pink-300 transition">Terms & Conditions</a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <a href="mailto:info@zenher.in" className="hover:text-pink-300 transition">
              info@zenher.in
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone />
            <a href="tel:+916392637347" className="hover:text-pink-300 transition">
              +91 63926 37347
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="font-semibold text-lg">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-pink-300 transition"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-pink-300 transition"><FaXTwitter size={20} /></a>
            <a href="https://www.instagram.com/zenher.co?igsh=MmR2OWJkNG9xcDVn" className="hover:text-pink-300 transition"><FaInstagram size={20} /></a>
            <a href="https://www.linkedin.com/company/zenher/" className="hover:text-pink-300 transition"><FaLinkedinIn size={20} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Zenher Healthcare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
