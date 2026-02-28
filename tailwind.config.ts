/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
<<<<<<< HEAD
        euclid: ["Euclid Circular B", "sans-serif"],
        bounded: ["Bounded", "sans-serif"],
        unbounded: ["Unbounded", "sans-serif"],
=======
        montserrat: ['Montserrat', 'sans-serif'],
        bounded: ["Bounded", "sans-serif"],
        euclid: ["Euclid Circular B", "sans-serif"],
>>>>>>> 3e14db1db4ee8088000083ae8593ce5e0f825ca2
      },
    },
  },
  plugins: [],
};

