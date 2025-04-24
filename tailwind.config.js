tailwind.config = {
        darkMode: 'class',
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
              'fade-in': 'fadeIn 0.5s ease-in-out',
              'fade-in-up': 'fadeInUp 0.6s ease-out',
              'fade-in-down': 'fadeInDown 0.6s ease-out',
              'float': 'float 3s ease-in-out infinite',
              'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              'bounce-slow': 'bounce 2s infinite'
            },
            keyframes: {
              fadeIn: {
                '0%': { opacity: '0' },
                '100%': { opacity: '1' }
              },
              fadeInUp: {
                '0%': { opacity: '0', transform: 'translateY(20px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' }
              },
              fadeInDown: {
                '0%': { opacity: '0', transform: 'translateY(-20px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' }
              },
              float: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' }
              }
            }
          }
        }
      }