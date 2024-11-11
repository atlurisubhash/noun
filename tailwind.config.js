/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    /* screens: {
      'mobile': '480px',
      // => @media (min-width: 480px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    }, */
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      animation: {
        loopL: 'loopTextLeft  4s linear infinite',
      },
      keyframes: {
        loopTextLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },

      transitionProperty: {
        height: 'height',
      },
      colors: {
        orange: '#ed7c50',
        darkOrange: '#d96d43',
        darkGrey: '#595959',
        lightGrey: '#8a8a8a',
        green: '#43ae61',
        purple: '#8566f6',
        turks: '#a6e2e3',
        red: '#e46060',
        black: '#282829',
        white: '#f5f4f5',
      },
    },
  },
  plugins: [],
};
