/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: 'hsl(0, 0%, 100%)',
      lightGrayishViolet: 'hsl(270, 3%, 87%)',
      darkGrayishViolet: 'hsl(279, 6%, 55%)',
      veryDarkViolet: '#21092F',
      boderOne: 'hsl(249, 99%, 64%)',
      borderTwo: 'hsl(278, 94%, 30%)',
      error: 'hsl(0, 100%, 66%)'
  },
  },
  plugins: [],
}