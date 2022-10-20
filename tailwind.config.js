/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Kumbh Sans']
      },
      colors: {
        'mainOrange': 'hsl(26, 100%, 55%)',
        'paleOrange': 'hsl(25, 100%, 94%)',
        'opaicBlack': 'rgba(0,0,0,0.6)'
      }
    },
  },
  plugins: [],
}
