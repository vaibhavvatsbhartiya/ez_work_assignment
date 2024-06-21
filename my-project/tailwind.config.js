/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark_blue: '#112949',
        white: '#FFFFFF',
        light_blue: '#3CC3F2',
        saffron: '#EA7B2C',
        grey_color: '#ABABAB',
      },
      fontSize: {
        h1: '32Spx',
        h2: '28px',
        p: '24px',
      },
    },
  },
  plugins: [],
}
