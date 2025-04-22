// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./*.html",
    "./js/**/*.js" // Asegúrate de incluir tus archivos JS
  ],
  theme: {
    extend: {
      colors: {
        fondo: "#1F2937",
        detalle: "#5C60DE",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    }
  },
  
}