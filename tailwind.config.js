/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      wordSpacing: {
        small: '1px',
        medium: '1.2px',
        large: '2px',
      },
      screens:{
          'md':{'max':'1006px'},
          '2lg':{'max':'5000px'},
          'sm':{'max':'600px'}
      },
      colors:{
           theme:'var(--theme-color)',
           text1:'var(--text-black)',
           text2:'var(--text-para)',
           white:'var(--white)',
           bgBlack:'var(--bg-black)',
           cardBlack:'var(--card-bg)'
      },
      
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.word-spacing-small': { wordSpacing: '1px' },
        '.word-spacing-medium': { wordSpacing: '1.2px' },
        '.word-spacing-large': { wordSpacing: '2px' },
        '.text-stroke': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': 'white',
        },
      });
    },

    function ({ addComponents }) {
      addComponents({
        '.hide-scrollbar': {
          '::-webkit-scrollbar': {
            display: 'none',
          },
          'scrollbar-width': 'none', // For Firefox
        },
      });
    },
  ],
}

