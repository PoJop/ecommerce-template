/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'vsm': '330px',
      // => @media (min-width: 330px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {

        'gray-950': '#222',
        'gray-900': '#333',
        'gray-600': '#666',
        'gray-400': '#999',
        'dull-gray': '#e5e5e5',

        'blue-800': '#1E87F0',
        'blue-200': '#D8EAFC',
        'blue-700': '#0F7AE5',

        'red-light': '#f0506e',
      },
      dropShadow: {
        '3xl': '0 5px 15px rgb(0 0 0 / 8%)',
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '1.4xl': '1.4rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '3xl2': '2rem',
        '4xl': '2.625rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      }
    },
  },
  plugins: [],
}
