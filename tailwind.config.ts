/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        bounded: ["Bounded", "sans-serif"],
        euclid: ["Euclid Circular B", "sans-serif"],
      },
    },
  },
  plugins: [],
};

