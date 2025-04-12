import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import { recipes } from '../data/recipes';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-neutralLight">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-heading text-primary mb-3">
            Banana Bread Baking
          </h1>
          <p className="text-neutralDark max-w-md mx-auto">
            Learn to bake delicious banana bread through an interactive step-by-step guide.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-heading text-neutralDark mb-6">Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recipes.map(recipe => (
              <RecipeCard
                key={recipe.id}
                title={recipe.title}
                description={recipe.description}
                difficulty={recipe.difficulty}
                time={recipe.time}
                image={recipe.image}
                onClick={() => navigate(`/recipe/${recipe.id}`)}
              />
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-heading text-neutralDark mb-4">About</h2>
          <p className="text-gray-700 mb-6">
            This interactive baking guide helps you create perfect banana bread with step-by-step instructions, 
            timers, and technique demonstrations.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-secondary text-white rounded-xl shadow-md"
            onClick={() => navigate('/about')}
          >
            Learn More
          </motion.button>
        </section>
      </motion.div>
    </div>
  );
};

export default Home; 