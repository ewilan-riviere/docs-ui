/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './lib/**/*.{vue,js,ts,jsx,tsx}',
    './playground/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7E22CE',
          800: '#6B21A8',
          900: '#581C87',
        }
      },
    },
  },
  plugins: [
    // require('@tailwindcss/typography')
  ],
  // corePlugins: {
  //   preflight: false,
  // }
}
