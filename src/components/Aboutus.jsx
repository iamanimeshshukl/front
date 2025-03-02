import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Emily Johnson",
    company: "Wellness Care",
    review: "The AI-driven health insights have empowered me to take charge of my well-being. A game changer for women's healthcare!",
    rating: 5,
  },
  {
    name: "Sophia Martinez",
    company: "FemHealth",
    review: "Their AI tools helped me track my pregnancy journey with precision and care. Absolutely love the experience!",
    rating: 4.8,
  },
  {
    name: "Olivia Roberts",
    company: "Mind & Body AI",
    review: "The mental wellness chatbot has been a blessing, offering guidance and support anytime I need it.",
    rating: 5,
  },
  {
    name: "Ava Thompson",
    company: "HerMedTech",
    review: "From menstrual health tracking to personalized care recommendations, this AI-powered platform is phenomenal!",
    rating: 4.7,
  },
  {
    name: "Grace Wilson",
    company: "AI Women Care",
    review: "The seamless experience and accurate health predictions have made a huge impact on my daily life.",
    rating: 5,
  },
];

const ReviewCard = ({ name, company, review, rating }) => {
  return (
    <motion.div
      className="bg-pink-500 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-pink-700 max-w-2xl w-full relative overflow-hidden flex flex-col items-center text-center"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <Quote className="absolute top-4 right-4 text-white h-8 w-8" />
      <div className="flex items-center gap-2 mb-3">
        {[...Array(5)].map((_, index) => (
          <Heart key={index} className={`h-5 w-5 ${index < Math.floor(rating) ? "text-white" : "text-gray-600"}`} />
        ))}
      </div>
      <p className="text-white mb-4 text-lg italic max-w-lg">"{review}"</p>
      <h3 className="text-white font-semibold text-xl">{name}</h3>
      <p className="text-white text-sm">{company}</p>
    </motion.div>
  );
};

export default function ReviewsSection() {
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="bg-gradient-to-r from-pink-100 to-purple-200 py-16 px-6 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-purple-800 mb-12">What Women Say About Us</h2>
      <div className="flex items-center gap-4 w-full max-w-4xl">
        <button onClick={prevReview} className="text-white p-2 bg-pink-800 rounded-full hover:bg-pink-700">
          <ChevronLeft className="h-8 w-8" />
        </button>
        <div className="flex justify-center w-full overflow-hidden">
          <ReviewCard key={index} {...reviews[index]} />
        </div>
        <button onClick={nextReview} className="text-white p-2 bg-pink-800 rounded-full hover:bg-pink-700">
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}
