import { motion } from "framer-motion";
import { FaClipboardList, FaInstagram, FaXTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

export default function HeroSection() {
  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      opacity: [0.3, 0.7, 0.3],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2,
      },
    },
  };

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-6 sm:px-12 lg:px-16 py-20 min-h-screen overflow-hidden bg-gradient-to-r from-pink-50 to-purple-200">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-10 left-20 w-12 h-12 bg-pink-200 rounded-full filter blur-xl opacity-30"
          variants={particleVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-24 w-16 h-16 bg-purple-200 rounded-full filter blur-xl opacity-30"
          variants={particleVariants}
          animate="animate"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-lg w-full space-y-8"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-purple-900 leading-tight tracking-tight">
            Welcome to <span className="text-pink-600">Zenher</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light max-w-md mx-auto lg:mx-0 leading-relaxed">
            Zenher is your trusted platform for women’s health, offering seamless tracking of periods, ovulation, and pregnancy, with AI-powered insights to guide your journey.
          </p>

          <div className="flex justify-center lg:justify-start space-x-6 mt-6">
            {[
              { href: "https://wa.me/7310212507", Icon: FaWhatsapp },
              { href: "https://x.com/zenherofficial", Icon: FaXTwitter },
              { href: "https://www.instagram.com/zenher.in", Icon: FaInstagram },
              { href: "https://www.linkedin.com/company/zenher/", Icon: FaLinkedinIn },
            ].map(({ href, Icon }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="text-purple-500 hover:text-purple-600 transition-colors"
              >
                <Icon size={26} />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="https://nas.io/zenher"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition-all items-center justify-center gap-3 mx-auto lg:mx-0"
          >
            <FaClipboardList size={22} />
            Join Our Community
          </motion.a>
        </motion.div>

        {/* App Preview Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-12 lg:mt-0 w-full max-w-sm lg:max-w-md flex justify-center"
        >
          <img
            src="https://res.cloudinary.com/denlloigs/image/upload/v1743919074/istockphoto-2197888918-612x612-removebg-preview_tha77b.png"
            alt="Zenher App Preview"
            className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
}
