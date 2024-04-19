/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html'
  ],
  theme: {
    container:{
      padding: '1.4rem' ,
    },
    extend: {
      spacing:{
        'quarter':'25%'
      },
      fontFamily:{
        'sans': "'Work Sans', sans-serif"
      },
      colors:{
        'lps-color-dark': '#080c2d',
        'lps-color-light': 'rgb(0,105,255)',
        'lps-color-medium': 'rgb(20,86,255)',
        'lps-color-mediumdark': '#1d274c',

      },
      boxShadow:{
        'input':'0 4px 1px 0 rgb(0, 0, 0, 0.1)',
        'inputfocus': '0 2px 1px 0 rgb(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

