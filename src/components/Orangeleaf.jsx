import React from "react";
import { motion } from "framer-motion";
import product1 from "../assets/Orange_leaf_01.jpg";
import product2 from "../assets/Orange_leaf_02.jpg";
import product3 from "../assets/Orange_leaf_03.jpg";

const products = [
  {
    id: 1,
    title: "SNOSYN Tablet",
    description:
      "Contains collagen peptide, glucosamine sulphate, and chondroitin sulphate for structural joint support.",
    image: product1,
  },
  {
    id: 2,
    title: "SNOCAL Tablet",
    description: "Calcium promotes bone development and formation.",
    image: product2,
  },
  {
    id: 3,
    title: "SNOMMUNE Tablet",
    description: "Curcumin and Amla helps to improve immune system.",
    image: product3,
  },
];

const ProductCards = () => {
  const handleBuyNow = () => {
    window.location.href = "https://www.orangeleaf.co.in/category/all-products";
  };

  // Animation variants for cards
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" },
    tap: { scale: 0.95 },
  };

  return (
    <div className="relative flex flex-col items-center justify-center py-12 px-4 sm:px-6 ">
      {/* Section Heading */}
     

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 sm:h-56 object-cover rounded-t-2xl"
            />
            {/* Card Content */}
            <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-purple-900">
                  {product.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-3 bg-pink-100 text-pink-800 px-3 py-2 rounded-lg font-medium text-xs sm:text-sm text-center">
                  🎉 Use code{" "}
                  <span className="text-pink-600 font-bold">ZENHER20</span> for{" "}
                  <span className="text-green-600 font-bold">20% OFF</span>
                </div>
              </div>
              {/* Buy Now Button */}
              <motion.button
                onClick={handleBuyNow}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-rose-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm sm:text-base hover:bg-pink-600 transition-all w-full sm:w-auto"
              >
                Buy Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subtle Background Particles */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-10 left-10 w-12 h-12 bg-pink-200 rounded-full filter blur-xl opacity-30"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.6, 0.3],
            transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-16 h-16 bg-purple-200 rounded-full filter blur-xl opacity-30"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
        />
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ProductCards;