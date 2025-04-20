// main.js
// Lógica para el modo oscuro y el formulario de contacto

document.addEventListener('DOMContentLoaded', function () {
  // Toggle dark mode
  const toggle = document.getElementById('dark-toggle');
  const html = document.documentElement;

  // Inicializar tema según preferencia
  if (localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      html.classList.toggle('dark');
      if (html.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // Formulario de contacto (solo muestra un alert de ejemplo)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('¡Gracias por contactarme! Te responderé pronto.');
      form.reset();
    });
  }
});
