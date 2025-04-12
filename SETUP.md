# Banana Bread Baking App Setup Instructions

## Local Development Setup

Follow these steps to get the Banana Bread Baking Interactive Web App running on your local machine:

### 1. Make sure Node.js is installed

You need Node.js version 14 or higher. You can download it from [nodejs.org](https://nodejs.org/).

### 2. Clone the repository

```bash
git clone https://github.com/yourusername/banana-bread-baking-app.git
cd banana-bread-baking-app
```

### 3. Install dependencies

Since the node_modules may not be properly installed due to some Windows-specific issues, try reinstalling with:

```bash
npm install --legacy-peer-deps
```

If you encounter issues, try:

```bash
npm install --force
```

### 4. Create Firebase Configuration

1. Go to [firebase.google.com](https://firebase.google.com/) and create a new project
2. Enable Authentication, Firestore, and Storage services
3. Get your Firebase configuration from Project Settings > General > Your Apps > Firebase SDK snippet
4. Update the configuration in `src/services/firebase.ts` with your Firebase settings

### 5. Start the development server

```bash
npm start
```

This will run the app in development mode at [http://localhost:3000](http://localhost:3000)

### 6. Build for production

```bash
npm run build
```

This will create a production-ready build in the `build` folder.

## Project Structure

- `public/` - Static files
   - `assets/` - Images and other media files
- `src/` - Source code
   - `components/` - Reusable UI components
   - `context/` - React contexts for state management
   - `data/` - Static data and configuration
   - `pages/` - Application pages
   - `services/` - Firebase and other service integrations
   - `styles/` - CSS and Tailwind configurations
   - `utils/` - Utility functions

## Common Issues and Troubleshooting

### Missing React Scripts

If you encounter the error `'react-scripts' is not recognized as an internal or external command`, try:

```bash
npm install react-scripts
```

### TypeScript Type Errors

There may be TypeScript errors during development due to missing type declarations. These don't prevent the app from running but might show in your IDE. You can add type declarations as needed:

```bash
npm install @types/react @types/react-dom
```

### Firebase Configuration

Make sure to replace the placeholder Firebase configuration in `src/services/firebase.ts` with your actual Firebase project details before running the application. 