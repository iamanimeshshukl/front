import React from 'react';
import { motion } from 'framer-motion';
import img from '../assets/products/ANNANTA PHARMACEUTICALS.jpg'; // Ensure image naming matches file conventions
import logo from '../assets/products/logo.png';

const AboutUs = () => {
  return (
    <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 p-8">
      {/* Header Section */}
      <header className="flex flex-col items-center text-center w-full mb-10">
        <img src={logo} alt="Annanta Pharmaceuticals Logo" className="w-32 h-32 mb-4" />
        <h1 className="text-5xl font-bold leading-tight text-gray-800 sm:text-6xl md:text-7xl">
          Annanta <span className="text-teal-600">Pharmaceuticals</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 sm:text-xl md:mt-6 md:text-2xl">
          Empowering Wellness Through Authentic Ayurvedic Solutions
        </p>
      </header>

      {/* Banner Section */}
      <div className="relative mb-12">
        <motion.img
          src={img}
          alt="Annanta Pharmaceuticals"
          className="w-full max-w-4xl rounded-lg shadow-lg"
          initial={{ opacity: 0, transform: 'translateY(50px) rotateX(10deg)', scale: 1.1 }}
          animate={{ opacity: 1, transform: 'translateY(0px) rotateX(0deg)', scale: 1 }}
          transition={{ duration: 1.2 }}
        />
      </div>

      {/* About Section */}
      <motion.section
        className="w-full px-4 text-left sm:px-8 lg:px-16"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold text-gray-800 sm:text-5xl mb-6">
          About <span className="text-teal-600">Us</span>
        </h2>
        <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
          At <strong>Annanta Pharmaceuticals</strong>, we take pride in being a trusted source for authentic Ayurvedic
          medicines and holistic wellness solutions. With a deep passion for traditional Indian medicine, we are
          dedicated to sharing its timeless benefits with the world.
        </p>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="w-full px-4 py-10 sm:px-8 lg:px-16"
        initial={{ opacity: 0, y: 50, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>
        <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
          To provide high-quality Ayurvedic products and expert guidance that empower individuals to take control of
          their health. Our mission is to support wellness journeys with reliable, natural solutions rooted in
          tradition and modern science.
        </p>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="w-full px-4 py-10 sm:px-8 lg:px-16 bg-gray-100 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h3>
        <ul className="space-y-4 text-lg text-gray-600 list-disc pl-5">
          <li><strong>Authenticity:</strong> Sourcing products from trusted suppliers to ensure genuine quality and potency.</li>
          <li><strong>Quality:</strong> Maintaining the highest standards of safety and effectiveness.</li>
          <li><strong>Sustainability:</strong> Promoting eco-friendly practices and minimizing our environmental impact.</li>
          <li><strong>Education:</strong> Empowering customers with knowledge to make informed health choices.</li>
        </ul>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="w-full px-4 py-10 sm:px-8 lg:px-16"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.8 }}
      >
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Benefits of Ayurvedic Medicine</h3>
        <p className="text-lg leading-relaxed text-gray-600 md:text-xl mb-4">
          Ayurvedic medicine emphasizes balance in the body, mind, and spirit to promote wellness and prevent illness.
        </p>
        <ul className="space-y-4 text-lg text-gray-600 list-disc pl-5">
          <li>Helps cleanse the body and restore natural balance.</li>
          <li>Combines ancient wisdom with practitioner expertise for personalized care.</li>
          <li>Integrates complementary and traditional healthcare practices for comprehensive wellness.</li>
        </ul>
      </motion.section>
    </div>
  );
};

export default AboutUs;
