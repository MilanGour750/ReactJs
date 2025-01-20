/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/TS files in src folder
    "./public/index.html",         // Include your HTML entry point if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
