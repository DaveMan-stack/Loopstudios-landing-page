/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    
    extend: {
      colors: {
        White: 'hsl(0, 0%, 100%)',
        Black: 'hsl(0, 0%, 0%)',
        DarkGray: 'hsl(0, 0%, 55%)',
        VeryDarkGray: 'hsl(0, 0%, 41%)'
      },
    },
  },
  plugins: [],
}
