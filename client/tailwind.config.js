/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: '#232323',
        darkGray: '#BFBFBF',
        mediumGray: '#E6E6E6',
        lightGray: '#F3F3F3',
        white: '#FFFFFF',
        logoOrange: '#A63E0E',
        darkOrange: '#CC4C11',
        orange: '#F15A14',
        lightOrange: '#FF6721',
        veryLightOrange: '#FF8247'
      },
      fontSize: {
        buttonText: '0.75rem',
        smallP: '0.875rem', //Paragraph
        regularP: '1rem',   //Paragraph
        heading6: '0.75rem',
        heading5: '1.125rem',
        heading4: '1.25rem',
        heading3: '1.5rem',
        heading2: '2rem',
        heading1: '2.5rem',
      },
      fontFamily: {
        'Inter': ['Inter'],
        'TitilliumWeb': ['TitilliumWeb'],
      },
      screens: {
        'xs': '300px', //FOLD 🙂
      },
    },
  },
}


