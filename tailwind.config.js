const defaultTheme = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    backgroundImage:{
      'button-slide': "radial-gradient(circle at center, #FF385C 0%, #E61E4D 27.5%, #E31C5F 40%, #D70466 57.5%, #BD1E59 75%, #BD1E59 100% )"
    },
    width:{
      '4xl': '1240px',
    },
    colors:{
      'airbnb': '#FF385C',
      'off-grey': '#DDDDDD',
    },
    gridTemplateColumns: {
      // Simple 16 column grid
      'four': 'repeat(4, minmax(400px, 1fr))',

      // Complex site-specific column configuration
      'footer': '200px minmax(900px, 1fr) 100px',
    }
    

    },
    
  },
  
  plugins: [],
}