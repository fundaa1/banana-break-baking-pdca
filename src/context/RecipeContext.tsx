import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the recipe steps
export interface RecipeStep {
  id: number;
  title: string;
  instructions: string;
  image?: string;
  timer?: number; // in minutes
  hasQuiz?: boolean;
}

// Define the recipe structure
export interface Recipe {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  time: string;
  image?: string;
  steps: RecipeStep[];
  ingredients: {
    name: string;
    amount: string;
    amountMetric?: string;
    unit: string;
    unitMetric?: string;
  }[];
}

// Define context type
interface RecipeContextType {
  currentRecipe: Recipe | null;
  currentStepIndex: number;
  userProgress: { [recipeId: string]: number }; // recipeId: lastCompletedStep
  useMetricMeasurements: boolean;
  setCurrentRecipe: (recipe: Recipe | null) => void;
  setCurrentStepIndex: (index: number) => void;
  nextStep: () => void;
  previousStep: () => void;
  toggleMeasurementSystem: () => void;
  saveProgress: () => void;
}

// Create context with default values
const RecipeContext = createContext<RecipeContextType>({
  currentRecipe: null,
  currentStepIndex: 0,
  userProgress: {},
  useMetricMeasurements: false,
  setCurrentRecipe: () => {},
  setCurrentStepIndex: () => {},
  nextStep: () => {},
  previousStep: () => {},
  toggleMeasurementSystem: () => {},
  saveProgress: () => {},
});

// Create provider component
export const RecipeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [userProgress, setUserProgress] = useState<{ [recipeId: string]: number }>(() => {
    try {
      const value = JSON.parse(localStorage.getItem('recipeProgress') || '{}');
      return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
    } catch {
      return {};
    }
  });
  const [useMetricMeasurements, setUseMetricMeasurements] = useState<boolean>(false);

  const nextStep = () => {
    if (currentRecipe && currentStepIndex < currentRecipe.steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const previousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const toggleMeasurementSystem = () => {
    setUseMetricMeasurements(!useMetricMeasurements);
  };

  const saveProgress = () => {
    if (!currentRecipe) return;
    setUserProgress(previous => {
      const saved = previous[currentRecipe.id];
      const progress = {
        ...previous,
        [currentRecipe.id]: Math.max(currentStepIndex, Number.isInteger(saved) && saved >= 0 ? saved : 0)
      };
      try {
        localStorage.setItem('recipeProgress', JSON.stringify(progress));
      } catch {
        // Continue in memory when storage is unavailable.
      }
      return progress;
    });
  };

  return (
    <RecipeContext.Provider
      value={{
        currentRecipe,
        currentStepIndex,
        userProgress,
        useMetricMeasurements,
        setCurrentRecipe,
        setCurrentStepIndex,
        nextStep,
        previousStep,
        toggleMeasurementSystem,
        saveProgress,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

// Custom hook for using the recipe context
export const useRecipe = () => useContext(RecipeContext);

export default RecipeContext; 