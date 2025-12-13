// Esperar a que el documento esté listo
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-item');

  // 1. Alternar menú al hacer clic en el botón hamburguesa
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Cambiar el ícono de ☰ a X
    if (navLinks.classList.contains('active')) {
      menuToggle.textContent = '✕';
    } else {
      menuToggle.textContent = '☰';
    }
  });

  // 2. Cerrar el menú automáticamente al hacer clic en un enlace
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 768) { // Solo en móvil
        navLinks.classList.remove('active');
        menuToggle.textContent = '☰';
      }
    });
  });
});