/** @type {import('tailwindcss').Config} */
export default {
  // CRITICAL: Tells Tailwind where your HTML/React code lives
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Now you can use 'font-sans' for your Google Font
       sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
