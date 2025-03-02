import React from "react";
import { motion } from "framer-motion";
import { FaHeartbeat, FaCalendarAlt, FaNotesMedical, FaUsers } from "react-icons/fa";
import zenherLogo from "../assets/smart.png"; // Replace with actual logo path
//import heroImage from "../assets/hero-women-health.svg"; // Use a relevant SVG illustration

const AboutZenher = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
      {/* Header Section */}
      <div className="max-w-6xl w-full text-center">
        <motion.img
          src={zenherLogo}
          alt="Zenher Logo"
          className="w-48 mx-auto mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <h1 className="text-5xl font-extrabold text-pink-600 mb-4">All Women’s Healthcare Needs in One App</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
        According to the National Family Health Survey (NFHS-5) conducted between 2019 and 2021, approximately 60% of Indian women aged 15-49 reported facing challenges in accessing healthcare for themselves. These challenges include inadequate infrastructure, insufficient health personnel, lack of available medicines, and absence of female healthcare providers. 

        </p>
      </div>

      {/* Statistics Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="bg-pink-500 text-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-4xl font-bold">71%</h2>
          <p className="text-md mt-2">of young girls in India are unaware of menstruation before their first period.</p>
        </div>
        <div className="bg-purple-500 text-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-4xl font-bold">70%</h2>
          <p className="text-md mt-2">of breast cancer cases in India are diagnosed too late.</p>
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-4xl font-bold">36%</h2>
          <p className="text-md mt-2">of Indian women use proper menstrual hygiene products.</p>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="max-w-5xl mt-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Why Choose Zenher?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gray-100 p-6 rounded-lg flex items-center gap-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaCalendarAlt className="text-pink-500 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold">Smart Period & Ovulation Tracking</h3>
              <p className="text-gray-600">AI-powered predictions for cycle tracking and fertility awareness.</p>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-gray-100 p-6 rounded-lg flex items-center gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaHeartbeat className="text-purple-500 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold">Breast Cancer & PCOS Awareness</h3>
              <p className="text-gray-600">Early detection and preventive care resources.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-100 p-6 rounded-lg flex items-center gap-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaNotesMedical className="text-blue-500 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold">Doctor Consultation</h3>
              <p className="text-gray-600">Connect with top gynecologists & women's health specialists instantly.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-100 p-6 rounded-lg flex items-center gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <FaUsers className="text-green-500 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold">Community Support</h3>
              <p className="text-gray-600">A safe space for women to discuss, share, and seek advice.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        className="mt-12 text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <a
          href="#"
          className="bg-pink-600 text-white px-8 py-3 text-lg font-semibold rounded-full hover:bg-pink-700 transition duration-300"
        >
          Join Zenher Today
        </a>
      </motion.div>
    </section>
  );
};

export default AboutZenher;
