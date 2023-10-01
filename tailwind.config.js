/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        
  
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1074px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        'xxl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        'foot-purp': '#120B48',
        'light-gray': '#c3c3c3',
        'e-card-bg' : '#F2F4F7',
        'primar-300' : '#605C84'
      }
    },
  },
  plugins: [],
}