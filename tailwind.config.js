/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-45': 'linear-gradient(135deg, #facc15, #c2410c)', // Adjust colors
      }
    },
  },
  plugins: [],
}

