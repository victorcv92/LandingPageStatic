/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    './*.html'
  ],
  theme: {
    container:{
      padding: {
       'DEFAULT': '1.4rem' ,
       '2xl':'7rem',
      }
    },
    extend: {
      transitionTimingFunction:{
        'timingmy': 'cubic-bezier(.05,.78,.93,.25)'
      },
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
        'lps-color-ligther': '#f9fafe',

      },
      boxShadow:{
        'input':'0 4px 1px 0 rgb(0, 0, 0, 0.1)',
        'inputfocus': '0 2px 1px 0 rgb(0, 0, 0, 0.1)',
      },
      width:{
        '88':'22rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

