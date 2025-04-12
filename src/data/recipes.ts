import { Recipe } from '../context/RecipeContext';

// Standard banana bread recipe
export const bananaBreadRecipe: Recipe = {
  id: 'classic-banana-bread',
  title: 'Classic Banana Bread',
  description: 'A delicious, moist banana bread recipe that is perfect for beginners.',
  difficulty: 'easy',
  time: '1 hour 10 min',
  image: '/assets/banana-bread.jpg',
  ingredients: [
    {
      name: 'Ripe bananas',
      amount: '3',
      unit: '',
      unitMetric: '',
    },
    {
      name: 'Butter, melted',
      amount: '1/3',
      amountMetric: '75',
      unit: 'cup',
      unitMetric: 'g',
    },
    {
      name: 'Baking soda',
      amount: '1',
      amountMetric: '1',
      unit: 'teaspoon',
      unitMetric: 'teaspoon',
    },
    {
      name: 'Salt',
      amount: '1',
      amountMetric: '1',
      unit: 'pinch',
      unitMetric: 'pinch',
    },
    {
      name: 'Sugar',
      amount: '3/4',
      amountMetric: '150',
      unit: 'cup',
      unitMetric: 'g',
    },
    {
      name: 'Egg, beaten',
      amount: '1',
      amountMetric: '1',
      unit: '',
      unitMetric: '',
    },
    {
      name: 'Vanilla extract',
      amount: '1',
      amountMetric: '1',
      unit: 'teaspoon',
      unitMetric: 'teaspoon',
    },
    {
      name: 'All-purpose flour',
      amount: '1 1/2',
      amountMetric: '190',
      unit: 'cups',
      unitMetric: 'g',
    }
  ],
  steps: [
    {
      id: 1,
      title: 'Preheat Oven',
      instructions: 'Preheat your oven to 350°F (175°C) and grease a 4x8-inch loaf pan.',
      image: '/assets/steps/preheat.jpg',
    },
    {
      id: 2,
      title: 'Prepare Bananas',
      instructions: 'In a mixing bowl, mash the ripe bananas with a fork until smooth.',
      image: '/assets/steps/mash-bananas.jpg',
    },
    {
      id: 3,
      title: 'Mix Wet Ingredients',
      instructions: 'Stir the melted butter into the mashed bananas. Mix in the baking soda and salt. Stir in the sugar, beaten egg, and vanilla extract.',
      image: '/assets/steps/mix-wet.jpg',
    },
    {
      id: 4,
      title: 'Add Flour',
      instructions: 'Add the flour and mix until just incorporated. Do not overmix!',
      image: '/assets/steps/add-flour.jpg',
      hasQuiz: true,
    },
    {
      id: 5,
      title: 'Pour into Pan',
      instructions: 'Pour the batter into your prepared loaf pan.',
      image: '/assets/steps/pour-batter.jpg',
    },
    {
      id: 6,
      title: 'Bake',
      instructions: 'Bake for 50-60 minutes at 350°F (175°C), or until a toothpick inserted into the center comes out clean.',
      image: '/assets/steps/bake.jpg',
      timer: 55,
    },
    {
      id: 7,
      title: 'Cool',
      instructions: 'Allow the bread to cool in the pan for 10 minutes, then remove and cool completely on a wire rack before slicing.',
      image: '/assets/steps/cool.jpg',
      timer: 10,
    },
    {
      id: 8,
      title: 'Enjoy!',
      instructions: 'Slice and serve your delicious banana bread! It can be stored at room temperature for up to 4 days, or frozen for up to 3 months.',
      image: '/assets/steps/enjoy.jpg',
    }
  ]
};

// List of available recipes
export const recipes: Recipe[] = [
  bananaBreadRecipe,
  // Add more recipes in the future
]; 