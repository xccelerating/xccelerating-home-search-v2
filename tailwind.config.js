/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'xccel-gold': '#D4AF34',
        'xccel-gold-light': '#E5C547',
        'xccel-gold-dark': '#B8962A',
        'xccel-charcoal': '#1A1A1A',
        'xccel-gray': '#4A4A4A',
        'xccel-light': '#F5F5F5',
      },
      fontFamily: {
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}