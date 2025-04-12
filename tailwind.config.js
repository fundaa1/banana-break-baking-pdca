/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700', // Warm yellow
        secondary: '#8FBC8F', // Soft green
        accent: '#FF6347', // Playful red
        neutralLight: '#F5F5F5', // Light gray
        neutralDark: '#333333', // Dark gray
      },
      fontFamily: {
        heading: ['Fredoka One', 'cursive'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
} 