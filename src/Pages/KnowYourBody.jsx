import React, { useState } from "react";
import { motion } from "framer-motion";

const questions = [
  { id: 1, text: "What is your body type?", options: ["Ectomorph", "Mesomorph", "Endomorph"] },
  { id: 2, text: "How do you feel about your metabolism?", options: ["Fast", "Average", "Slow"] },
  { id: 3, text: "What is your primary fitness goal?", options: ["Lose Weight", "Gain Muscle", "Maintain"] },
  { id: 4, text: "How easily do you gain weight?", options: ["Very Hard", "Moderate", "Very Easy"] },
  { id: 5, text: "What describes your muscle growth?", options: ["Very Slow", "Steady", "Fast"] },
  { id: 6, text: "How would you describe your natural body shape?", options: ["Lean & Thin", "Athletic", "Round & Soft"] },
];

const results = {
  Ectomorph: "You have a fast metabolism and may need to consume more calories to gain muscle.",
  Mesomorph: "You naturally gain and lose weight easily. Strength training is great for you!",
  Endomorph: "You tend to store fat easily. Focus on a balanced diet and cardio workouts.",
};

export default function KnowYourBodyQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: option });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getBodyType = () => {
    return answers[1] || "Ectomorph";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md text-center"
      >
        {showResult ? (
          <div>
            <h2 className="text-2xl font-bold">Your Body Type: {getBodyType()}</h2>
            <p className="mt-4 text-gray-700">{results[getBodyType()]}</p>
            <button
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
              onClick={() => window.location.reload()}
            >
              Retake Quiz
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold">{questions[currentQuestion].text}</h2>
            <p className="mt-2 text-gray-600">Question {currentQuestion + 1} of {questions.length}</p>
            <div className="mt-4 space-y-2">
              {questions[currentQuestion].options.map((option) => (
                <motion.button
                  key={option}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer(option)}
                  className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
