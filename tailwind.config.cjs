/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        'primary-light': '#e6eaf3',
        secondary: '#1da1f2',
        'secondary-light': '#e6f5fd',
        accent: '#f1892b',
        'accent-light': '#fdf3e6',
        'dark-bg': '#1a202c',
        'dark-text': '#e2e8f0',
        'dark-card': '#2d3748',
      },
    },
  },
  plugins: [],
}