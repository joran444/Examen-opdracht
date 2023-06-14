/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1025px',
      xl: '1280px',
      xxl: '1440px',
      xxxl: '1536px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#ffffff',
      'black': '#000000',
      'background': '#374220',
      'card': '#1B2110',
    },
    fontFamily: {
      sans: ['Cincel Decorative', 'sans-serif'],
      serif: ['Cinzel', 'serif'],
      poppins: ['Poppins', 'serif']
    },
    extend: {
      spacing: {
        '128': '32rem', //512px
        '144': '36rem',
        '160': '53.125rem',// px used in the single recept view for the width of the Content holder
        '84': '21rem', // 336px
        '85': '22rem',
        '100': '25.625rem', //410px width of the cards 
        '86': '22.5rem', // 360px height of the cards
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        'cinzel': ['Cinzel Decorative', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
