// Hace el modo oscuro y el modo claro
document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('modoBoton');
    const root = document.documentElement; // <html> element
    const iconoSol = document.getElementById('iconoSol');
    const iconoLuna = document.getElementById('iconoLuna');

    function actualizarIconos() {
        if (root.classList.contains('dark')) {
            iconoSol.style.display = 'none';
            iconoLuna.style.display = '';
        } else {
            iconoSol.style.display = '';
            iconoLuna.style.display = 'none';
        }
    }

    // Cargar modo guardado correctamente
    const modo = localStorage.getItem('modo');
    if (modo === 'oscuro') {
        root.classList.add('dark');
    } else {
        root.classList.remove('dark');
        // Si hay un valor inválido, lo borramos
        if (modo && modo !== 'claro') {
            localStorage.removeItem('modo');
        }
    }
    actualizarIconos();

    // Evento click para alternar
    boton.addEventListener('click', function () {
        root.classList.toggle('dark');
        const isDark = root.classList.contains('dark');
        localStorage.setItem('modo', isDark ? 'oscuro' : 'claro');
        actualizarIconos();
    });
});
