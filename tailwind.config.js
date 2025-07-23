/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0D1117',
        'secondary-dark': '#161B22',
        'accent-blue': '#38BDF8',
        'accent-indigo': '#6366F1',
        'accent-purple': '#A855F7',
        'primary-text': '#E6EDF3',
        'secondary-text': '#8B949E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['monospace'],
      },
      animation: {
        'gradient-animation': 'gradient-animation 8s ease infinite',
      },
      keyframes: {
        'gradient-animation': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      }
    },
  },
  plugins: [],
};
