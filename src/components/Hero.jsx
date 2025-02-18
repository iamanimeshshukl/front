import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24 py-16 bg-pink-50 h-[45em]">
      {/* Left Content */}
      <div className="max-w-2xl text-center lg:text-left">
        <p className="text-sm font-semibold text-gray-600 flex items-center justify-center lg:justify-start">
          <span className="text-red-500">★★★★★</span> Over 7 million 5-star ratings
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          We’re Zenher, the world’s #1 women’s health app
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Over 420 million people around the world use the Flo app to track their periods, ovulation, and pregnancy.
        </p>

        {/* Download Buttons */}
        <div className="flex gap-4 mt-6 justify-center lg:justify-start">
          <button className="flex items-center gap-2 px-5 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-900">
            <FaApple size={20} /> Download on the App Store
          </button>
          <button className="flex items-center gap-2 px-5 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-900">
            <FaGooglePlay size={20} /> Get it on Google Play
          </button>
        </div>
      </div>
      
      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-10 lg:mt-0"
      >
        <img
          src="/hero-image.png"
          alt="App preview"
          className="w-full max-w-md lg:max-w-lg"
        />
      </motion.div>
    </section>
  );
}
