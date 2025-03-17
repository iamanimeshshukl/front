import { useState } from "react";
import { motion } from "framer-motion";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);
      determineCategory(bmiValue);
    }
  };

  const determineCategory = (bmi) => {
    if (bmi < 18.5) setCategory("Underweight");
    else if (bmi >= 18.5 && bmi < 24.9) setCategory("Healthy Weight");
    else if (bmi >= 25 && bmi < 29.9) setCategory("Overweight");
    else setCategory("Obese");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-xl text-center space-y-6">
      <h2 className="text-2xl font-bold text-pink-600">Women's BMI Calculator</h2>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full p-2 mt-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button
          onClick={calculateBMI}
          className="mt-4 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-500 transition"
        >
          Calculate BMI
        </button>
      </motion.div>
      {bmi && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <p className="text-lg font-semibold">Your BMI: <span className="text-pink-600">{bmi}</span></p>
          <p className="text-md text-gray-600">Category: <span className="font-medium text-pink-500">{category}</span></p>
        </motion.div>
      )}
    </div>
  );
}