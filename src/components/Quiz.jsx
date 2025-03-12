import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaQuestionCircle } from "react-icons/fa";

const questions = [
  { question: "What is the average menstrual cycle length?", options: ["21 days", "28 days", "35 days", "40 days"], answer: "28 days" },
  { question: "Which vitamin is essential during pregnancy?", options: ["Vitamin C", "Vitamin D", "Folic Acid", "Iron"], answer: "Folic Acid" },
  { question: "What is a common symptom of PCOS?", options: ["Weight Loss", "Irregular Periods", "High Blood Pressure", "Low Blood Sugar"], answer: "Irregular Periods" },
  { question: "Which hormone regulates the menstrual cycle?", options: ["Estrogen", "Testosterone", "Melatonin", "Insulin"], answer: "Estrogen" },
  { question: "What test is used to detect breast cancer?", options: ["Mammogram", "MRI", "CT Scan", "Ultrasound"], answer: "Mammogram" },
  { question: "Daily recommended water intake for women?", options: ["1L", "2L", "3L", "4L"], answer: "2L" },
  { question: "Which exercise is best for bone health?", options: ["Yoga", "Swimming", "Weight Training", "Cycling"], answer: "Weight Training" },
  { question: "What is a symptom of iron deficiency?", options: ["Dizziness", "Increased Appetite", "Low Heart Rate", "Weight Gain"], answer: "Dizziness" },
  { question: "What is the leading cause of death among women?", options: ["Diabetes", "Heart Disease", "Breast Cancer", "Stroke"], answer: "Heart Disease" },
  { question: "What helps relieve menstrual cramps?", options: ["Cold Packs", "Warm Compress", "High Sugar Diet", "Skipping Meals"], answer: "Warm Compress" }
];

const Quiz = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerClick = (option) => setSelectedAnswer(option);

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].answer) setScore(score + 1);
    setSelectedAnswer(null);

    if (currentQuestion === questions.length - 1) setShowResults(true);
    else setCurrentQuestion(currentQuestion + 1);
  };

  const getStarRating = () => {
    if (score >= 8) return "⭐⭐⭐⭐⭐ Excellent!";
    if (score >= 6) return "⭐⭐⭐⭐ Good!";
    if (score >= 4) return "⭐⭐⭐ Average!";
    return "⭐ Keep Learning!";
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 text-lg font-semibold hover:shadow-2xl transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaQuestionCircle className="text-xl" />
        Take Quiz
      </motion.button>

      {/* Sidebar Quiz Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 120 }}
        className="fixed top-0 right-0 h-full w-[85%] sm:w-96 bg-white shadow-2xl border-l border-gray-200 p-6 z-50 flex flex-col"
      >
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-600 hover:text-red-600" onClick={() => setIsOpen(false)}>
          <FaTimes size={20} />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 text-center font-playfair">Women's Healthcare Quiz</h2>

        {showResults ? (
          <div className="text-center mt-6">
            <h2 className="text-2xl font-bold text-gray-800">Quiz Completed!</h2>
            <p className="mt-2 text-lg font-semibold text-gray-600">
              Your Score: {score} / {questions.length}
            </p>
            <p className="mt-2 text-xl">{getStarRating()}</p>
            <button
              className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-500"
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
                setShowResults(false);
              }}
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-900 font-playfair">{currentQuestion + 1}. {questions[currentQuestion].question}</h3>
            <div className="mt-4 space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`w-full py-2 px-4 rounded-lg text-lg font-medium transition ${
                    selectedAnswer === option ? "bg-pink-500 text-white" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => handleAnswerClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              className="mt-4 w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-600"
              onClick={handleNextQuestion}
              disabled={!selectedAnswer}
            >
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Quiz;
