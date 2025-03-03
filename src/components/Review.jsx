import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, LineChart, Line } from "recharts";

import zenherLogo from "../assets/smart.png";

const AboutZenher = () => {
  const [healthData, setHealthData] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/womens-health-stats") // Replace with actual API
      .then((response) => response.json())
      .then((data) => setHealthData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const statistics = [
    { name: "Menstrual Awareness", percentage: 71 },
    { name: "Breast Cancer Late Diagnosis", percentage: 70 },
    { name: "Proper Hygiene Usage", percentage: 36 },
    { name: "Maternal Healthcare Access", percentage: 58 },
    { name: "PCOS Diagnosis", percentage: 40 },
    { name: "Anemia in Women", percentage: 55 },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 ">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 w-full max-w-5xl">
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Women’s Health Challenges</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={statistics}>
              <XAxis dataKey="name" tick={{ fill: "#6B7280", fontSize: 12 }} />
              <YAxis />
              <Tooltip cursor={{ fill: "#f3e8ff" }} />
              <Legend />
              <Bar dataKey="percentage" fill="#EC4899" barSize={50} radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          className="bg-white shadow-lg rounded-lg p-6"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Health Progress Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={statistics}>
              <XAxis dataKey="name" tick={{ fill: "#6B7280", fontSize: 12 }} />
              <YAxis />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Legend />
              <Line type="monotone" dataKey="percentage" stroke="#8B5CF6" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutZenher;
