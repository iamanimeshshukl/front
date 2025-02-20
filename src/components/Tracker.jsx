import React from "react";
import  Ovalucation from "../components/Ovalucation"; // Import your component
 // Import your component

const MenstrualTracker = () => {
  return (
    <section className=" bg-gradient-to-r from-pink-100 to-purple-200 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-700 dark:text-pink-200">
          Menstrual & Ovulation Tracker
        </h2>
        <p className="text-pink-600 dark:text-pink-300 mt-2">
          Track your cycle and predict ovulation with ease.
        </p>
      </div>
      <Ovalucation />
     
    </section>
  );
};

export default MenstrualTracker;
