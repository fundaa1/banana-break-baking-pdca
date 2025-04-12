import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRecipe } from '../context/RecipeContext';
import { recipes } from '../data/recipes';
import StepCard from '../components/StepCard';

const RecipePage: React.FC = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const navigate = useNavigate();
  const { 
    currentRecipe, 
    setCurrentRecipe, 
    currentStepIndex, 
    nextStep, 
    previousStep, 
    saveProgress 
  } = useRecipe();

  // Find the recipe by ID when the component mounts
  useEffect(() => {
    const recipe = recipes.find(r => r.id === recipeId);
    if (recipe) {
      setCurrentRecipe(recipe);
    } else {
      // Redirect if recipe not found
      navigate('/');
    }
    
    // Save progress when component unmounts
    return () => {
      saveProgress();
    };
  }, [recipeId, setCurrentRecipe, navigate, saveProgress]);

  if (!currentRecipe) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Loading recipe...</p>
      </div>
    );
  }

  const currentStep = currentRecipe.steps[currentStepIndex];

  return (
    <div className="min-h-screen bg-neutralLight p-4">
      <header className="mb-6">
        <div className="flex items-center mb-4">
          <button 
            className="mr-4 text-gray-600" 
            onClick={() => navigate('/')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h1 className="font-heading text-2xl text-neutralDark">{currentRecipe.title}</h1>
        </div>
        <div className="flex justify-between w-full bg-white rounded-xl p-2">
          {currentRecipe.steps.map((step, index) => (
            <div 
              key={step.id}
              className={`w-2 h-2 rounded-full ${
                index < currentStepIndex 
                  ? 'bg-secondary' 
                  : index === currentStepIndex 
                  ? 'bg-primary' 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </header>
      
      <motion.div
        key={currentStep.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="flex justify-center"
      >
        <StepCard
          stepNumber={currentStep.id}
          title={currentStep.title}
          instructions={currentStep.instructions}
          image={currentStep.image}
          timer={currentStep.timer}
          onNext={nextStep}
          onPrevious={previousStep}
        />
      </motion.div>
    </div>
  );
};

export default RecipePage; 