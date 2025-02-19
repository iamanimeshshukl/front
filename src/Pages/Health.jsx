import { FaHeartbeat, FaShieldAlt, FaUserMd, FaLightbulb, FaBookMedical } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ZenherArticles() {
  const articles = [
    {
      icon: <FaHeartbeat className="text-pink-500 text-5xl" />, 
      title: "Understanding Your Cycle: A Holistic Guide",
      description: "Learn how to track and understand your menstrual cycle for better well-being and reproductive health.",
      link: "#"
    },
    {
      icon: <FaShieldAlt className="text-blue-500 text-5xl" />, 
      title: "The Importance of Women’s Health Security",
      description: "Discover how Zenher ensures your data privacy while providing top-notch health insights.",
      link: "#"
    },
    {
      icon: <FaUserMd className="text-green-500 text-5xl" />, 
      title: "Expert-Backed Health Advice for Every Woman",
      description: "Get science-backed recommendations from top healthcare professionals tailored to your needs.",
      link: "#"
    },
    {
      icon: <FaLightbulb className="text-yellow-500 text-5xl" />, 
      title: "How AI is Transforming Women’s Healthcare",
      description: "Explore how AI-driven insights empower women to take charge of their health like never before.",
      link: "#"
    },
    {
      icon: <FaBookMedical className="text-purple-500 text-5xl" />, 
      title: "Essential Health Tips for Every Stage of Life",
      description: "From adolescence to menopause, find essential tips to maintain a healthy lifestyle at every stage.",
      link: "#"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white text-gray-800">
      <div className="text-center mb-12 p-12">
        <h2 className="text-4xl font-bold text-pink-600 mb-4">Know your Body</h2>
        <p className="text-lg text-gray-600">Empowering women with knowledge, backed by experts and AI-driven insights.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-2xl border border-gray-200 flex flex-col items-center text-center hover:shadow-xl transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            {article.icon}
            <h3 className="text-xl font-semibold mt-4">{article.title}</h3>
            <p className="text-gray-500 mt-2">{article.description}</p>
            <a href={article.link} className="mt-4 text-pink-600 font-semibold hover:underline">Read More</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
