module.exports = {
    darkMode: 'class',
    content: ["./*.html"],
    theme: {
      extend: {
        fontFamily: {
          montserrat: ['Montserrat', 'sans-serif'],
        },
        animation: {
          'fade-in': 'fadeIn 1s ease-in-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          }
        }
      }
    }
  }

