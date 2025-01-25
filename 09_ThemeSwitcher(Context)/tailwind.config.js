// tailwind.config.js
module.exports = {
    darkMode: 'class', 
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // Ensure all files are scanned
    theme: {
        extend: {}, // Customize Tailwind here
    },
    plugins: [], // Add any plugins like @tailwindcss/forms if needed
};
