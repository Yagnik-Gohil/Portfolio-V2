/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'home-gradient': 'linear-gradient(135deg, #ffce4c, #ff6321 75%);',
        'about-gradient': 'linear-gradient(135deg, #ffe353, #ffc121 75%);',
        'portfolio-gradient': 'linear-gradient(135deg, #c06fff, #9226e6 75%);',
        'services-gradient': 'linear-gradient(135deg, #2ef171, #10983f 75%);',
        'contact-gradient': 'linear-gradient(135deg, #20d7ff, #00a5cd 75%);',
      },
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

