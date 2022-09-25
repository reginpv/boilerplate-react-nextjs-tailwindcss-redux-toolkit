module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#D8E1F1',
          100: '#98B0DB',
          200: '#658ACA',
          300: '#003DA7', // Signal Blue
          400: '#023E7A', // Navy
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
