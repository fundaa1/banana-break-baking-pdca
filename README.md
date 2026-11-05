# Banana Bread Baking Interactive Web App

Workshop status, maintenance and agent handoff: [WORKSHOP-HANDOFF.md](WORKSHOP-HANDOFF.md).

An interactive web application that guides users through the process of baking banana bread with step-by-step instructions, animations, educational content, and progress tracking.

## Features

- Mobile-first responsive design
- Interactive step-by-step baking guide
- Educational content about baking techniques
- Progress tracking across sessions
- Recipe measurements in both cups and grams
- Interactive quizzes between steps
- Animations for baking techniques
- Completion celebration with sharing capabilities
- Offline functionality via PWA

## Technology Stack

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Swipe Functionality**: Swiper.js
- **Backend/Data**: Firebase (Firestore, Authentication, Storage)
- **Progressive Web App**: For offline capabilities

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Firebase account (for backend functionality)

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   cd banana-bread-baking-app
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Configure Firebase
   - Create a Firebase project
   - Enable Authentication, Firestore, and Storage
   - Update the Firebase configuration in `src/services/firebase.ts`

4. Start the development server
   ```
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Project Structure

- `public/` - Static files
- `src/` - Source code
  - `components/` - Reusable UI components
  - `pages/` - Application pages
  - `context/` - React context for state management
  - `hooks/` - Custom React hooks
  - `services/` - Firebase and other service integrations
  - `styles/` - CSS and Tailwind configurations
  - `utils/` - Utility functions
  - `assets/` - Images, icons, and other static assets

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Banana Bread Recipe

### Ingredients
- 3 ripe bananas
- 1/3 cup melted butter
- 1 teaspoon baking soda
- Pinch of salt
- 3/4 cup sugar
- 1 egg, beaten
- 1 teaspoon vanilla extract
- 1 1/2 cups all-purpose flour

### Instructions
The app will guide users through each step of the baking process with interactive elements and educational content.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Recipe inspired by classic banana bread recipes
- UI design inspired by Airbnb, Uber, and Angry Birds # Banana Bread Baking App
