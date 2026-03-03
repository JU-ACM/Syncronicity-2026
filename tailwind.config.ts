
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Custom fonts from your @font-face declarations
        bounded: ["Bounded", "sans-serif"],
        euclid: ["Euclid Circular B", "sans-serif"],
        unbounded: ["Unbounded", "sans-serif"],
        // Keep existing if needed
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};