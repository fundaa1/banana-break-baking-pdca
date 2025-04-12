import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-neutralLight">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <div className="p-8">
          <h1 className="text-4xl text-center font-heading text-primary mb-6">
            Banana Bread Baking
          </h1>
          <p className="text-center text-neutralDark mb-8">
            Learn to bake delicious banana bread through an interactive step-by-step guide.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 px-6 bg-primary text-neutralDark font-bold rounded-xl shadow-md hover:bg-opacity-90 transition duration-300"
          >
            Start Baking
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home; 