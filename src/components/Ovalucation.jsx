import React, { useState } from "react";
import { format, addDays } from "date-fns";
import { motion } from "framer-motion";
import { ThreeDots } from "react-loader-spinner";

export default function WomenHealthCalculator() {
  const [lastPeriod, setLastPeriod] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [result, setResult] = useState(null);
  const [calculatorType, setCalculatorType] = useState("menstrual");
  const [loading, setLoading] = useState(false);

  const calculateCycle = () => {
    if (!lastPeriod || cycleLength < 21 || cycleLength > 35) {
      alert("Please enter a valid date and cycle length (21-35 days). ");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const lastPeriodDate = new Date(lastPeriod);
      let cycleResult;

      if (calculatorType === "menstrual") {
        const nextPeriodDate = addDays(lastPeriodDate, cycleLength);
        const safeStart = addDays(nextPeriodDate, -7);
        const safeEnd = addDays(nextPeriodDate, -1);
        cycleResult = {
          label1: "Next Period Start",
          value1: format(nextPeriodDate, "MMMM dd, yyyy"),
          label2: "Safe Window",
          value2: `${format(safeStart, "MMMM dd, yyyy")} - ${format(safeEnd, "MMMM dd, yyyy")}`,
        };
      } else {
        const ovulationDay = addDays(lastPeriodDate, cycleLength - 14);
        const fertileStart = addDays(ovulationDay, -5);
        const fertileEnd = addDays(ovulationDay, 1);
        cycleResult = {
          label1: "Ovulation Date",
          value1: format(ovulationDay, "MMMM dd, yyyy"),
          label2: "Fertile Window",
          value2: `${format(fertileStart, "MMMM dd, yyyy")} - ${format(fertileEnd, "MMMM dd, yyyy")}`,
        };
      }
      setResult(cycleResult);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md p-6 shadow-lg rounded-2xl bg-white/70 backdrop-blur-md border border-pink-300"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-pink-600 mb-4">
            {calculatorType === "menstrual" ? "Menstrual Cycle Calculator" : "Ovulation Calculator"}
          </h2>
          <p className="text-gray-600 text-sm mb-6">Track your cycle and fertility with ease.</p>
        </div>

        <div className="flex justify-center gap-3 mb-6">
          <button
            className={`py-2 px-4 rounded-lg text-sm font-semibold transition ${
              calculatorType === "menstrual" ? "bg-pink-500 text-white shadow-md" : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setCalculatorType("menstrual")}
          >
            Menstrual Cycle
          </button>
          <button
            className={`py-2 px-4 rounded-lg text-sm font-semibold transition ${
              calculatorType === "ovulation" ? "bg-pink-500 text-white shadow-md" : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setCalculatorType("ovulation")}
          >
            Ovulation
          </button>
        </div>

        <label className="block text-sm font-medium text-gray-700">Last Period Date</label>
        <input
          type="date"
          value={lastPeriod}
          onChange={(e) => setLastPeriod(e.target.value)}
          className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
        />
        <label className="block text-sm font-medium text-gray-700 mt-4">Cycle Length (days)</label>
        <input
          type="number"
          value={cycleLength}
          onChange={(e) => setCycleLength(Number(e.target.value))}
          className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
          min="21"
          max="35"
        />

        <button
          className="w-full mt-5 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition duration-300 flex justify-center items-center"
          onClick={calculateCycle}
          disabled={loading}
        >
          {loading ? <ThreeDots height="20" width="50" color="#fff" /> : "Calculate"}
        </button>

        {!loading && result && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="mt-6 p-4 bg-pink-100 rounded-lg text-center border border-pink-300"
          >
            <p className="text-md font-semibold text-pink-600">{result.label1}: {result.value1}</p>
            <p className="text-md font-semibold text-pink-600">{result.label2}: {result.value2}</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
