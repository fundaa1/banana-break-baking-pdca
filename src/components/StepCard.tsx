import React from 'react';
import { motion } from 'framer-motion';

interface StepCardProps {
  stepNumber: number;
  title: string;
  instructions: string;
  image?: string;
  timer?: number; // In minutes
  onNext: () => void;
  onPrevious: () => void;
}

const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  title,
  instructions,
  image,
  timer,
  onNext,
  onPrevious
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <span className="bg-primary text-neutralDark rounded-full w-10 h-10 flex items-center justify-center font-bold">
          {stepNumber}
        </span>
        <h2 className="font-heading text-2xl text-neutralDark">{title}</h2>
      </div>
      
      {image && (
        <div className="mb-4 rounded-xl overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      
      <p className="text-gray-700 mb-6">{instructions}</p>
      
      {timer && (
        <div className="mb-6 bg-secondary bg-opacity-20 p-4 rounded-xl flex items-center justify-between">
          <span className="text-secondary font-medium">Timer</span>
          <span className="font-bold">{timer} minutes</span>
          <button className="bg-secondary text-white px-4 py-2 rounded-lg">
            Start Timer
          </button>
        </div>
      )}
      
      <div className="flex justify-between mt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl"
          onClick={onPrevious}
        >
          Previous
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-primary text-neutralDark font-bold rounded-xl"
          onClick={onNext}
        >
          Next
        </motion.button>
      </div>
    </div>
  );
};

export default StepCard; 