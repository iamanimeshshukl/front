


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaQuestionCircle, FaCheck, FaTimes as FaX } from "react-icons/fa";
import { Heart, RefreshCw, Award, BookOpen } from "lucide-react";

const questions = [
  {
    question: "What is the average menstrual cycle length?",
    options: ["21 days", "28 days", "35 days", "40 days"],
    answer: "28 days",
    explanation: "The average menstrual cycle lasts about 28 days, but it can range between 21 and 35 days."
  },
  {
    question: "Which vitamin is essential during pregnancy?",
    options: ["Vitamin C", "Vitamin D", "Folic Acid", "Iron"],
    answer: "Folic Acid",
    explanation: "Folic acid is crucial for preventing birth defects and aiding fetal development."
  },
  {
    question: "What is a common symptom of PCOS?",
    options: ["Weight Loss", "Irregular Periods", "High Blood Pressure", "Low Blood Sugar"],
    answer: "Irregular Periods",
    explanation: "PCOS often causes irregular periods due to hormonal imbalances affecting ovulation."
  },
  {
    question: "Which hormone regulates the menstrual cycle?",
    options: ["Estrogen", "Testosterone", "Melatonin", "Insulin"],
    answer: "Estrogen",
    explanation: "Estrogen is responsible for regulating the menstrual cycle and reproductive functions."
  },
  {
    question: "What test is used to detect breast cancer?",
    options: ["Mammogram", "MRI", "CT Scan", "Ultrasound"],
    answer: "Mammogram",
    explanation: "Mammograms are specialized X-ray images used for early detection of breast cancer."
  },
  {
    question: "Which phase of the menstrual cycle involves ovulation?",
    options: ["Follicular phase", "Luteal phase", "Ovulatory phase", "Menstrual phase"],
    answer: "Ovulatory phase",
    explanation: "The ovulatory phase occurs around day 14 of a 28-day cycle, when an egg is released from the ovary."
  },
  {
    question: "Which nutrient is essential for strong bones and preventing osteoporosis?",
    options: ["Iron", "Calcium", "Magnesium", "Vitamin B12"],
    answer: "Calcium",
    explanation: "Calcium is vital for maintaining strong bones and preventing osteoporosis, especially in women."
  },
  {
    question: "What condition is characterized by tissue similar to the uterine lining growing outside the uterus?",
    options: ["Fibroids", "Endometriosis", "PCOS", "Ovarian Cysts"],
    answer: "Endometriosis",
    explanation: "Endometriosis occurs when tissue similar to the uterine lining grows outside the uterus, causing pain and potential fertility issues."
  },
  {
    question: "What is the main function of progesterone in the menstrual cycle?",
    options: ["Trigger ovulation", "Maintain pregnancy", "Regulate blood sugar", "Increase energy levels"],
    answer: "Maintain pregnancy",
    explanation: "Progesterone helps maintain the uterine lining for pregnancy and supports early fetal development."
  },
  {
    question: "At what age does menopause typically occur?",
    options: ["35-40 years", "40-45 years", "45-55 years", "55-60 years"],
    answer: "45-55 years",
    explanation: "Menopause usually occurs between the ages of 45 and 55, marking the end of a woman's reproductive years."
  }
];

const Quiz = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [allowNext, setAllowNext] = useState(false);

  useEffect(() => {
    if (showExplanation) {
      const timer = setTimeout(() => {
        handleNextQuestion();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showExplanation]);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setShowExplanation(true);
    setAllowNext(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setAllowNext(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setShowExplanation(false);
    setSelectedAnswer(null);
    setAllowNext(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) return "Excellent! You're very knowledgeable about women's health.";
    if (percentage >= 70) return "Great job! You have good knowledge of women's health.";
    if (percentage >= 50) return "Good effort! Keep learning about women's health.";
    return "Keep studying! Women's health is important to understand.";
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full shadow-xl flex items-center gap-3 text-lg font-semibold hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
        onClick={() => setIsOpen(true)}
      >
        <BookOpen className="text-xl" />
        Health Quiz
      </motion.button>

      {/* Quiz Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-t-2xl">
                <button 
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <FaTimes size={24} />
                </button>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Heart className="text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Women's Health Quiz</h2>
                    <p className="text-white/90 text-sm">Test your knowledge about women's healthcare</p>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="px-6 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Question {currentQuestion + 1} of {questions.length}</span>
                  <span className="text-sm font-semibold text-purple-600">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {showResults ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl mb-6">
                      <div className="bg-white p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                        <Award className="text-4xl text-purple-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Quiz Completed!</h3>
                      <div className="text-4xl font-bold text-purple-600 mb-2">
                        {score}/{questions.length}
                      </div>
                      <div className="text-2xl font-bold text-gray-600 mb-4">
                        {Math.round((score / questions.length) * 100)}%
                      </div>
                      <p className="text-gray-600">{getScoreMessage()}</p>
                    </div>
                    <button
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
                      onClick={resetQuiz}
                    >
                      <RefreshCw className="text-lg" />
                      Take Quiz Again
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 leading-relaxed">
                      {questions[currentQuestion].question}
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      {questions[currentQuestion].options.map((option, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`w-full p-4 rounded-xl text-left font-medium transition-all duration-200 border-2 ${
                            selectedAnswer
                              ? option === questions[currentQuestion].answer
                                ? "bg-green-50 border-green-500 text-green-700"
                                : selectedAnswer === option
                                ? "bg-red-50 border-red-500 text-red-700"
                                : "bg-gray-50 border-gray-200 text-gray-600"
                              : "bg-white border-gray-200 hover:border-purple-300 hover:bg-purple-50 text-gray-700"
                          }`}
                          onClick={() => handleAnswerClick(option)}
                          disabled={selectedAnswer !== null}
                        >
                          <div className="flex items-center justify-between">
                            <span>{option}</span>
                            {selectedAnswer && option === questions[currentQuestion].answer && (
                              <FaCheck className="text-green-600 text-lg" />
                            )}
                            {selectedAnswer && selectedAnswer === option && option !== questions[currentQuestion].answer && (
                              <FaX className="text-red-600 text-lg" />
                            )}
                          </div>
                        </motion.button>
                      ))}
                    </div>

                    <AnimatePresence>
                      {showExplanation && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl"
                        >
                          <div className="flex items-start gap-3">
                            <div className="bg-blue-500 p-2 rounded-full mt-1">
                              <BookOpen className="text-white text-sm" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-blue-800 mb-1">
                                Correct Answer: <span className="text-green-600">{questions[currentQuestion].answer}</span>
                              </p>
                              <p className="text-sm text-blue-700 leading-relaxed">
                                {questions[currentQuestion].explanation}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                        allowNext
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                      onClick={handleNextQuestion}
                      disabled={!allowNext}
                    >
                      {currentQuestion === questions.length - 1 ? "View Results" : "Next Question"}
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Quiz;