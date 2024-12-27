import React from 'react';
import { motion } from 'framer-motion';

const Review = () => {
  return (
    <div>
      <section id="stats" className="py-16 lg:py-24">
        <div className="container mx-auto text-center">
          <p className="uppercase tracking-wider text-gray-600">Our customers get results</p>

          <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
            {/* Stat Block 1 */}
            <motion.div
              className="w-full sm:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
            >
              <p className="text-4xl lg:text-6xl font-semibold text-teal-500">+90%</p>
              <p className="font-semibold mb-6">Customer Satisfaction</p>
            </motion.div>

            {/* Stat Block 2 */}
            <motion.div
              className="w-full sm:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, delay: 0.4 }}
            >
              <p className="text-4xl lg:text-6xl font-semibold text-teal-500">+75%</p>
              <p className="font-semibold mb-6">Product Efficiency</p>
            </motion.div>

            {/* Stat Block 3 */}
            <motion.div
              className="w-full sm:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, delay: 0.6 }}
            >
              <p className="text-4xl lg:text-6xl font-semibold text-teal-500">+80%</p>
              <p className="font-semibold mb-6">Repeat Purchases</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-12 mx-auto md:pb-20 max-w-6xl">
        <div className="py-4 text-center md:py-8">
          <h4 className="text-base font-bold tracking-wide text-teal-600 uppercase text-center">
            Reviews
          </h4>
          <p className="mt-2 text-xl tracking-tight text-gray-900 md:text-2xl">
            What our clients are saying
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Review Card 1 */}
          <motion.div
            className="p-6 bg-white border border-gray-100 shadow-xl rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h6 className="text-lg font-medium text-gray-700"> Aarav Kapoor</h6>
         
            <p className="mt-6">
              The pharma solutions provided by your company have revolutionized patient care in my
              practice. The quality and reliability are unmatched.
            </p>
          </motion.div>

          {/* Review Card 2 */}
          <motion.div
            className="p-6 bg-white border border-gray-100 shadow-xl rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h6 className="text-lg font-medium text-gray-700">Ishani Verma</h6>
          
            <p className="mt-6">
              My patients have seen excellent results with the dermatology range. The effectiveness
              of your products is truly commendable.
            </p>
          </motion.div>

          {/* Review Card 3 */}
          <motion.div
            className="p-6 bg-white border border-gray-100 shadow-xl rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h6 className="text-lg font-medium text-gray-700">Kabir Joshi</h6>
            <p className="mt-6">
              Your targeted treatments have significantly improved patient outcomes in oncology.
              It's a remarkable advancement in the field.
            </p>
          </motion.div>

          {/* Review Card 4 */}
          <motion.div
            className="p-6 bg-white border border-gray-100 shadow-xl rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h6 className="text-lg font-medium text-gray-700">Mira Sen</h6>
           
            <p className="mt-6">
              The child-friendly formulations have made it so much easier for parents to
              administer medication. A lifesaver for many families.
            </p>
          </motion.div>

          {/* Review Card 5 */}
          <motion.div
            className="p-6 bg-white border border-gray-100 shadow-xl rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h6 className="text-lg font-medium text-gray-700">Rohan Malhotra</h6>
            
            <p className="mt-6">
              The advanced formulations have greatly improved adherence to treatment among my
              patients. The results speak for themselves.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Review;
