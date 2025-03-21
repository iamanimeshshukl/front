


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaQuestionCircle } from "react-icons/fa";
import { Heart, RefreshCw } from "lucide-react";

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

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className=" bg-purple-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 text-lg font-semibold hover:shadow-2xl transition-all"
        onClick={() => setIsOpen(true)}
      >
        <FaQuestionCircle className="text-xl" />
        Take Quiz
      </motion.button>

      {/* Quiz Popup */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative"
          >
            {/* Close Button */}
            <button className="absolute top-4 right-4 text-gray-600 hover:text-red-600" onClick={() => setIsOpen(false)}>
              <FaTimes size={20} />
            </button>
            <h2 className="text-2xl font-bold text-gray-900 text-center">Women's Healthcare Quiz</h2>
            {showResults ? (
              <div className="text-center mt-6">
                <h3 className="text-lg font-semibold text-purple-700">Quiz Completed!</h3>
                <p className="text-gray-600">Your Score: {score} / {questions.length}</p>
                <button
                  className="mt-4 bg-purple-700 text-white px-4 py-2 rounded-lg"
                  onClick={() => {
                    setCurrentQuestion(0);
                    setScore(0);
                    setShowResults(false);
                    setShowExplanation(false);
                  }}
                >
                  <RefreshCw className="inline-block mr-2" /> Restart Quiz
                </button>
              </div>
            ) : (
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900">{currentQuestion + 1}. {questions[currentQuestion].question}</h3>
                <div className="mt-4 space-y-2">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      className={`w-full py-2 px-4 rounded-lg text-lg font-medium transition ${
                        selectedAnswer
                          ? option === questions[currentQuestion].answer
                            ? "bg-green-500 text-white"
                            : selectedAnswer === option
                            ? "bg-red-500 text-white"
                            : "bg-gray-200"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                      onClick={() => handleAnswerClick(option)}
                      disabled={selectedAnswer !== null}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 rounded-lg"
                  >
                    <p className="text-sm font-semibold">Correct Answer: <span className="text-green-600">{questions[currentQuestion].answer}</span></p>
                    <p className="text-sm">{questions[currentQuestion].explanation}</p>
                  </motion.div>
                )}
                <button
                  className="mt-4 w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-600"
                  onClick={handleNextQuestion}
                  disabled={!allowNext}
                >
                  {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Quiz;