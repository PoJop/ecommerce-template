/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dull-gray': '#e5e5e5',
        'gray-500': '#666',

        'blue-800': '#1E87F0',
        'blue-700': '#0F7AE5',
      },
      dropShadow: {
        '3xl': '0 5px 15px rgb(0 0 0 / 8%)',
      }
    },
  },
  plugins: [],
}
