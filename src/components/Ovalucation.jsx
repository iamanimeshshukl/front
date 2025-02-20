import React, { useState } from "react";
import { format, addDays } from "date-fns";

export default function WomenHealthCalculator() {
  const [lastPeriod, setLastPeriod] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [result, setResult] = useState(null);
  const [calculatorType, setCalculatorType] = useState("menstrual"); // "menstrual" or "ovulation"

  const calculateCycle = () => {
    if (!lastPeriod || cycleLength < 21 || cycleLength > 35) {
      alert("Please enter a valid date and cycle length (21-35 days). ");
      return;
    }

    const lastPeriodDate = new Date(lastPeriod);

    if (calculatorType === "menstrual") {
      const nextPeriodDate = addDays(lastPeriodDate, cycleLength);
      const safeStart = addDays(nextPeriodDate, -7);
      const safeEnd = addDays(nextPeriodDate, -1);

      setResult({
        label1: "Next Period Start",
        value1: format(nextPeriodDate, "MMMM dd, yyyy"),
        label2: "Safe Window",
        value2: `${format(safeStart, "MMMM dd, yyyy")} - ${format(safeEnd, "MMMM dd, yyyy")}`
      });
    } else {
      const ovulationDay = addDays(lastPeriodDate, cycleLength - 14);
      const fertileStart = addDays(ovulationDay, -5);
      const fertileEnd = addDays(ovulationDay, 1);

      setResult({
        label1: "Ovulation Date",
        value1: format(ovulationDay, "MMMM dd, yyyy"),
        label2: "Fertile Window",
        value2: `${format(fertileStart, "MMMM dd, yyyy")} - ${format(fertileEnd, "MMMM dd, yyyy")}`
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-100 to-purple-200 p-4">
      <div className="w-full max-w-md p-6 shadow-xl rounded-2xl bg-white border border-pink-300">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-pink-600 mb-4">
            {calculatorType === "menstrual" ? "Menstrual Cycle Calculator" : "Ovulation Calculator"}
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Track your cycle and fertility with ease.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-3 mb-6">
          <button
            className={`py-2 px-4 rounded-lg text-sm font-semibold transition ${
              calculatorType === "menstrual" ? "bg-pink-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setCalculatorType("menstrual")}
          >
            Menstrual Cycle
          </button>
          <button
            className={`py-2 px-4 rounded-lg text-sm font-semibold transition ${
              calculatorType === "ovulation" ? "bg-pink-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setCalculatorType("ovulation")}
          >
            Ovulation
          </button>
        </div>

        {/* Input Fields */}
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

        {/* Calculate Button */}
        <button
          className="w-full mt-5 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          onClick={calculateCycle}
        >
          Calculate
        </button>

        {/* Results Display */}
        {result && (
          <div className="mt-6 p-4 bg-pink-100 rounded-lg text-center border border-pink-300">
            <p className="text-md font-semibold text-pink-600">{result.label1}: {result.value1}</p>
            <p className="text-md font-semibold text-pink-600">{result.label2}: {result.value2}</p>
          </div>
        )}
      </div>
    </div>
  );
}
