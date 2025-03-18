import { motion } from "framer-motion";
import { FaClipboardList, FaInstagram, FaXTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import heroImage from "/src/assets/hero-image.png"; // Hero image

export default function HeroSection() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-6 sm:px-10 lg:px-24 py-16 min-h-screen overflow-hidden">
      {/* Decorative SVG Background */}
      <div className="absolute inset-0 -z-10">
        <svg className="absolute top-0 left-0 w-full h-full opacity-30 hidden sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffafcc"
            fillOpacity="1"
            d="M0,192L60,176C120,160,240,128,360,133.3C480,139,600,181,720,192C840,203,960,181,1080,160C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full"
      >
        <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 leading-tight">
          Welcome to <span className="text-pink-600">Zenher</span>
        </h1>
        <p className="text-md sm:text-lg text-gray-700 mt-4">
        ZenHer is a modern women's health platform that lets you track periods, ovulation, pregnancy, and more. With AI-powered insights, it helps you stay in control of your health effortlessly.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center lg:justify-start space-x-4 mt-6">
          <a href="https://wa.me/7310212507" className="text-pink-600 hover:text-pink-800 transition transform hover:scale-110">
            <FaWhatsapp size={20} />
          </a>
          <a href="https://x.com/zenherofficial?t=dvq11Gf3ToZiHiMIrwsRnw&s=09" className="text-pink-600 hover:text-pink-800 transition transform hover:scale-110">
            <FaXTwitter size={20} />
          </a>
          <a href="https://www.instagram.com/zenher.co?igsh=MmR2OWJkNG9xcDVn" className="text-pink-600 hover:text-pink-800 transition transform hover:scale-110">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.linkedin.com/company/zenher/" className="text-pink-600 hover:text-pink-800 transition transform hover:scale-110">
            <FaLinkedinIn size={20} />
          </a>
        </div>

        {/* Survey Button */}
        <motion.a
          href="https://docs.google.com/forms/d/e/1FAIpQLSecByJsq-fsmP6rqFeAD9wO98Z1gPpcEXZGCf5Lf2IO_gxpnQ/viewform"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 inline-flex px-6 py-3 bg-pink-600 text-white rounded-full text-lg font-medium transition-all hover:bg-pink-700 focus:outline-none items-center justify-center gap-2 mx-auto lg:mx-0"
        >
          <FaClipboardList size={20} />
          Join the Survey
        </motion.a>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-10 lg:mt-0 w-full flex justify-center"
      >
        <img
          src={heroImage}
          alt="Zenher App Preview"
          className="w-full max-w-xs sm:max-w-md lg:max-w-lg drop-shadow-lg"
        />
      </motion.div>
    </section>
  );
}
