import React from 'react';
import { motion } from 'framer-motion';

interface RecipeCardProps {
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  time: string;
  image?: string;
  onClick: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  title,
  description,
  difficulty,
  time,
  image,
  onClick
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-sm cursor-pointer"
      onClick={onClick}
    >
      {image && (
        <div className="h-48 w-full bg-gray-200">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover" 
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="font-heading text-xl text-neutralDark mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            difficulty === 'easy' ? 'bg-green-100 text-green-800' :
            difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </span>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeCard; 