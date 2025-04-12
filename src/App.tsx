import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipePage from './pages/RecipePage';
import { RecipeProvider } from './context/RecipeContext';

function App() {
  return (
    <RecipeProvider>
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:recipeId" element={<RecipePage />} />
            {/* Add more routes as we develop them */}
          </Routes>
        </div>
      </Router>
    </RecipeProvider>
  );
}

export default App; 