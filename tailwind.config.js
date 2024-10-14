/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        zoomInOut: {
          '0%, 100%': { transform: 'scale(0.6)' }, // Start and end smaller and more transparent
          '40%': { transform: 'scale(1)' }, // Fully visible and normal size at 50%
        },
      },
      animation: {
        'zoom-blink': 'zoomInOut 1.5s ease-in-out infinite', // Name of the animation with timing options
      },
    },
  },
  plugins: [],
}

