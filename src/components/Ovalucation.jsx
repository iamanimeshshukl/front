import React, { useState, useEffect } from "react";
import { format, addDays } from "date-fns";
import { motion } from "framer-motion";
import { ThreeDots } from "react-loader-spinner";

export default function WomenHealthCalculator() {
  const [lastPeriod, setLastPeriod] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [result, setResult] = useState(null);
  const [calculatorType, setCalculatorType] = useState("menstrual");
  const [loading, setLoading] = useState(false);
  const [irregularMessage, setIrregularMessage] = useState("");
  const [periodHistory, setPeriodHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("periodHistory")) || [];
    setPeriodHistory(savedHistory);
  }, []);

  const savePeriodDate = (date) => {
    const updatedHistory = [date, ...periodHistory.slice(0, 4)]; // Keep last 5 entries
    setPeriodHistory(updatedHistory);
    localStorage.setItem("periodHistory", JSON.stringify(updatedHistory));
  };

  const calculateCycle = () => {
    if (!lastPeriod) {
      alert("Please enter a valid date.");
      return;
    }

    // For modes other than period tracker, check the cycle length
    if (calculatorType !== "period") {
      if (cycleLength < 21 || cycleLength > 40) {
        alert("Please enter a valid cycle length (21-40 days).");
        return;
      }
    }

    setLoading(true);
    setTimeout(() => {
      const lastPeriodDate = new Date(lastPeriod);
      let cycleResult = null;

      if (calculatorType === "menstrual") {
        if (cycleLength > 35) {
          setIrregularMessage("Your cycle is irregular. Consider consulting a doctor.");
        } else {
          setIrregularMessage("");
        }
        const nextPeriodDate = addDays(lastPeriodDate, cycleLength);
        // Save the period date to history
        savePeriodDate(format(lastPeriodDate, "MMMM dd, yyyy"));
        const safeStart = addDays(nextPeriodDate, -7);
        const safeEnd = addDays(nextPeriodDate, -1);
        cycleResult = {
          label1: "Next Period Start",
          value1: format(nextPeriodDate, "MMMM dd, yyyy"),
          label2: "Safe Window",
          value2: `${format(safeStart, "MMMM dd, yyyy")} - ${format(safeEnd, "MMMM dd, yyyy")}`,
        };
      } else if (calculatorType === "ovulation") {
        setIrregularMessage("");
        const ovulationDay = addDays(lastPeriodDate, cycleLength - 14);
        const fertileStart = addDays(ovulationDay, -5);
        const fertileEnd = addDays(ovulationDay, 1);
        cycleResult = {
          label1: "Ovulation Date",
          value1: format(ovulationDay, "MMMM dd, yyyy"),
          label2: "Fertile Window",
          value2: `${format(fertileStart, "MMMM dd, yyyy")} - ${format(fertileEnd, "MMMM dd, yyyy")}`,
        };
      } else if (calculatorType === "pregnancy") {
        setIrregularMessage("");
        const testDate = addDays(lastPeriodDate, 14);
        cycleResult = {
          label1: "Earliest Pregnancy Test Date",
          value1: format(testDate, "MMMM dd, yyyy"),
          label2: "Best Testing Window",
          value2: `${format(testDate, "MMMM dd, yyyy")} - ${format(addDays(testDate, 7), "MMMM dd, yyyy")}`,
        };
      } else if (calculatorType === "period") {
        // For the period tracker mode, save the date and show a message
        savePeriodDate(format(lastPeriodDate, "MMMM dd, yyyy"));
        cycleResult = {
          label1: "Period Date Saved",
          value1: format(lastPeriodDate, "MMMM dd, yyyy"),
          label2: "",
          value2: "",
        };
      }

      setResult(cycleResult);
      setLoading(false);
    }, 2000);
  };

  const renderCalculatorHeading = () => {
    switch (calculatorType) {
      case "menstrual":
        return "Menstrual Cycle Calculator";
      case "ovulation":
        return "Ovulation Calculator";
      case "pregnancy":
        return "Pregnancy Test Calculator";
      case "period":
        return "Period Tracker";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md p-6 shadow-lg rounded-2xl bg-white/70 backdrop-blur-md border border-pink-300"
      >
        <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">
          {renderCalculatorHeading()}
        </h2>

        <div className="flex justify-center gap-3 mb-6">
          {["menstrual", "ovulation", "pregnancy", "period"].map((type) => (
            <button
              key={type}
              className={`py-2 px-4 rounded-lg text-sm font-semibold transition ${
                calculatorType === type ? "bg-pink-500 text-white shadow-md" : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => {
                setCalculatorType(type);
                setResult(null);
                setIrregularMessage("");
              }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <label className="block text-sm font-medium text-gray-700">Last Period Date</label>
        <input
          type="date"
          value={lastPeriod}
          onChange={(e) => setLastPeriod(e.target.value)}
          className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
        />

        {/* Render cycle length only for modes that require it */}
        {calculatorType !== "period" && (
          <>
            <label className="block text-sm font-medium text-gray-700 mt-4">Cycle Length (days)</label>
            <input
              type="number"
              value={cycleLength}
              onChange={(e) => setCycleLength(Number(e.target.value))}
              className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              min="21"
              max="40"
            />
          </>
        )}

        {irregularMessage && (
          <p className="text-red-600 text-center mt-2 font-semibold">{irregularMessage}</p>
        )}

        <button
          className="w-full mt-5 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition duration-300 flex justify-center items-center"
          onClick={calculateCycle}
          disabled={loading}
        >
          {loading ? (
            <ThreeDots height="20" width="50" color="#fff" />
          ) : calculatorType === "period" ? (
            "Save Period Date"
          ) : (
            "Calculate"
          )}
        </button>

        {!loading && result && (
          <div className="mt-6 p-4 bg-pink-100 rounded-lg text-center border border-pink-300">
            {result.label1 && (
              <p className="text-md font-semibold text-pink-600">
                {result.label1}: {result.value1}
              </p>
            )}
            {result.label2 && result.value2 && (
              <p className="text-md font-semibold text-pink-600">
                {result.label2}: {result.value2}
              </p>
            )}
          </div>
        )}

        {/* Display period history when in Period Tracker mode */}
        {calculatorType === "period" && periodHistory.length > 0 && (
          <div className="mt-6 p-4 bg-white rounded-lg border border-gray-300">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">Period History</h3>
            <ul>
              {periodHistory.map((date, index) => (
                <li key={index} className="text-gray-700 text-center">{date}</li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  );
}

