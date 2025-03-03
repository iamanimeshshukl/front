import React from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const Faq = () => {
  return (
    <div className="w-full px-6 py-12 shadow-lg sm:rounded-lg">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-extrabold text-pink-600">Frequently Asked Questions</h2>
        <p className="mt-2 text-lg text-gray-700">
          Common questions about women's healthcare and ZenHer services.
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto mt-8 divide-y divide-pink-300">
        {faqData.map((faq, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="py-5"
          >
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between font-medium text-lg text-pink-700">
                <span>{faq.question}</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height={24} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width={24}>
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <motion.p 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.4 }}
                className="group-open:animate-fadeIn mt-3 text-gray-600"
              >
                {faq.answer}
              </motion.p>
            </details>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "What services does ZenHer offer?",
    answer: "ZenHer provides AI-driven health tracking, telemedicine consultations, period tracking, fertility insights, and community support for women's well-being.",
  },
  {
    question: "How does AI help in women’s healthcare?",
    answer: "Our AI analyzes symptoms, predicts potential health risks, and provides personalized health recommendations based on medical insights.",
  },
  {
    question: "Is my health data secure?",
    answer: "Absolutely! We use advanced encryption and data security protocols to keep your personal health information safe and confidential.",
  },
  {
    question: "Can I track my menstrual cycle with ZenHer?",
    answer: "Yes! Our intuitive menstrual cycle tracker helps you log periods, track symptoms, and receive personalized health insights.",
  },
  {
    question: "How do I contact support?",
    answer: "You can reach our support team via email at support@zenher.com or through the in-app chat feature.",
  },
];

export default Faq;
