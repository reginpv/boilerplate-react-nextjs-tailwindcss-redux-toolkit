module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '400px',
      // => @media (min-width: 400px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1180px',
      // => @media (min-width: 1180px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        azure: {
          50: '#E6F3FC',
          100: '#CEE7FA',
          200: '#9ED0F4',
          300: '#6DB8EE',
          400: '#0089E3', // Azure
        },
        fontSize: {
          sm: ['14px', '24px'],
        },
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
  corePlugins: {
    // container: false,
  },
}
