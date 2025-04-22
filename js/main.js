// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  // Configuración del Dark Mode
  const initDarkMode = () => {
    const darkToggle = document.getElementById('dark-toggle');
    const html = document.documentElement;
    
    if (darkToggle) {
      // Añadir clases para hacerlo interactivo
      darkToggle.classList.add('dark-mode-toggle');
      
      // Comprobar preferencias
      const storedTheme = localStorage.getItem('theme');
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (storedTheme === 'dark' || (!storedTheme && systemDark)) {
        html.classList.add('dark');
      }
      
      // Manejador de eventos
      darkToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
        
        // Feedback visual
        darkToggle.classList.add('animate-pulse-slow');
        setTimeout(() => darkToggle.classList.remove('animate-pulse-slow'), 500);
      });
    }
  };

  // Configuración del Formulario
  const initContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validación básica
        let isValid = true;
        const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
          if (!input.value.trim()) {
            input.classList.add('border-red-500');
            isValid = false;
          } else {
            input.classList.remove('border-red-500');
          }
        });
        
        if (isValid) {
          const submitBtn = contactForm.querySelector('button[type="submit"]');
          const originalText = submitBtn.innerHTML;
          
          submitBtn.disabled = true;
          submitBtn.innerHTML = `
            <span class="flex items-center gap-2">
              Enviando
              <i class="bx bx-loader-alt animate-spin"></i>
            </span>
          `;
          
          // Simular envío (reemplazar con tu lógica real)
          setTimeout(() => {
            submitBtn.innerHTML = `
              <span class="flex items-center gap-2">
                Enviado!
                <i class="bx bx-check"></i>
              </span>
            `;
            setTimeout(() => {
              contactForm.reset();
              submitBtn.disabled = false;
              submitBtn.innerHTML = originalText;
            }, 1500);
          }, 2000);
        }
      });
    }
  };

  // Inicializar
  initDarkMode();
  initContactForm();
});

 // Inicializar AOS (Animate On Scroll)
 AOS.init({
  duration: 800,
  once: true,
  easing: 'ease-in-out'
});

// Animación personalizada para el botón de modo oscuro
document.getElementById('dark-toggle').addEventListener('mouseover', function() {
  this.classList.add('animate-wiggle');
});

document.getElementById('dark-toggle').addEventListener('mouseout', function() {
  this.classList.remove('animate-wiggle');
});

// Efecto de hover para los íconos de tecnología
document.querySelectorAll('.tech-icon').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = 'translateY(-5px) scale(1.1)';
  });
  icon.addEventListener('mouseleave', () => {
    icon.style.transform = '';
  });
});

// Efecto de carga para el formulario
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const submitBtn = document.querySelector('#contact-form button[type="submit"]');
  const submitText = document.getElementById('submit-text');
  const submitIcon = document.getElementById('submit-icon');
  const loadingIcon = document.getElementById('loading-icon');
  
  // Mostrar estado de carga
  submitText.textContent = 'Enviando...';
  submitIcon.classList.add('hidden');
  loadingIcon.classList.remove('hidden');
  
  // Simular envío (en un caso real sería una petición AJAX)
  setTimeout(() => {
    submitText.textContent = '¡Mensaje enviado!';
    loadingIcon.classList.add('hidden');
    
    // Resetear después de 2 segundos
    setTimeout(() => {
      submitText.textContent = 'Enviar mensaje';
      submitIcon.classList.remove('hidden');
      this.reset();
    }, 2000);
  }, 1500);
});