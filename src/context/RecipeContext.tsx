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
  const [userProgress, setUserProgress] = useState<{ [recipeId: string]: number }>({});
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
    if (currentRecipe) {
      setUserProgress({
        ...userProgress,
        [currentRecipe.id]: Math.max(currentStepIndex, userProgress[currentRecipe.id] || 0)
      });
      
      // Here you would also save to Firebase or localStorage
      localStorage.setItem('recipeProgress', JSON.stringify({
        ...userProgress,
        [currentRecipe.id]: Math.max(currentStepIndex, userProgress[currentRecipe.id] || 0)
      }));
    }
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